import {
  countOfFilledRows as countOfFilledRowsFunction,
  lastFilledRowNumber as lastFilledRowNumberFunction,
} from 'src/library/helpers/xlsx';

class FileValidator {
  isCorrectFileType(type: string | undefined) {
    if (type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      return false;
    } else {
      return true;
    }
  }

  missingSheets(validateSheets: string[], neededSheets: string[]): string[] {
    let missingSheets: string[] = [];

    neededSheets.forEach((item) => {
      if (!validateSheets.includes(item)) {
        missingSheets.push(item);
      }
    });

    return missingSheets;
  }

  /**
   * Возвращает названия пустых не заполненных пропущенных ячеек в указанной колнке
   *
   * @param {Object} parsedObject - объект парс excel файла с помощью библиотеки XLSX
   * @param {String} columnLetter - литер колонки например "A"
   * @returns {string[]}
   */
  emptyCellsInColumn(parsedObject: any, columnLetter: string): string[] {
    let emptyCellsInColumn: string[] = [];
    const countOfFilledRows = countOfFilledRowsFunction(parsedObject, columnLetter);
    const lastFilledRowNumber = lastFilledRowNumberFunction(parsedObject, columnLetter);

    if (countOfFilledRows !== lastFilledRowNumber) {
      for (let num = 1; num <= lastFilledRowNumber; num++) {
        if (!parsedObject[`${columnLetter}${num}`]) {
          emptyCellsInColumn.push(`${columnLetter}${num}`);
        }
      }
    }

    return emptyCellsInColumn;
  }

  /**
   * Возвращает названия пустых не заполненных ячеек в указанной колонке перебираем ячейки столько раз сколько ячеек в колонке А
   *
   * @param {Object} parsedObject - объект парс excel файла с помощью библиотеки XLSX
   * @param {String} columnLetter - литер колонки например "A"
   * @returns {string[]}
   */
  emptyCellsInColumnLoopCountColumnA(parsedObject: any, columnLetter: string): string[] {
    let emptyCellsInColumnLoopCountColumnA: string[] = [];
    const lastFilledRowNumber = lastFilledRowNumberFunction(parsedObject, 'A');

    for (let num = 2; num <= lastFilledRowNumber; num++) {
      if (!parsedObject[`${columnLetter}${num}`]) {
        emptyCellsInColumnLoopCountColumnA.push(`${columnLetter}${num}`);
      }
    }

    return emptyCellsInColumnLoopCountColumnA;
  }

  /**
   * Метод анализирует ячейки в определенном стобце сверяя их тип с переданным в параметрах type
   *
   * @param {string} type - тип проверяемых ячеек
   * @param parsedObject
   * @param columnLetter
   * @returns
   */
  allCellsInColumnMustBeTypeOf(type: string, parsedObject: any, columnLetter: string) {
    let returnedArr: string[] = [];

    const lastFilledRowNumber = lastFilledRowNumberFunction(parsedObject, columnLetter);

    for (let num = 2; num <= lastFilledRowNumber; num++) {
      if (typeof parsedObject[`${columnLetter}${num}`]?.v !== type) {
        returnedArr.push(`${columnLetter}${num}`);
      }
    }

    return returnedArr;
  }

  /**
   * Проверяем все нужные колонки на заполненность в листа "Грузо"
   *
   * @param parsedObject
   */
  sheetFreightCellsEmptyValues(parsedObject: any) {
    let returnedArr: string[] = [];

    let emptyCells = this.emptyCellsInColumnLoopCountColumnA(parsedObject, 'B');
    returnedArr = [...returnedArr, ...emptyCells];

    emptyCells = this.emptyCellsInColumnLoopCountColumnA(parsedObject, 'J');
    returnedArr = [...returnedArr, ...emptyCells];

    emptyCells = this.emptyCellsInColumnLoopCountColumnA(parsedObject, 'K');
    returnedArr = [...returnedArr, ...emptyCells];

    emptyCells = this.emptyCellsInColumnLoopCountColumnA(parsedObject, 'L');
    returnedArr = [...returnedArr, ...emptyCells];

    return returnedArr;
  }

  sheetRetreatsHeader(retreatSheet: any) {
    let returnedArr: string[] = [];

    if (retreatSheet.B1?.v !== 'ПЧ') returnedArr.push('B1');
    if (retreatSheet.C1?.v !== 'ГОД') returnedArr.push('C1');
    if (retreatSheet.D1?.v !== 'МЕСЯЦ') returnedArr.push('D1');
    if (retreatSheet.E1?.v !== 'ДЕНЬ') returnedArr.push('E1');
    if (retreatSheet.F1?.v !== 'ПС') returnedArr.push('F1');
    if (retreatSheet.G1?.v !== 'ВИД') returnedArr.push('G1');
    if (retreatSheet.H1?.v !== 'КОДНАПРВ') returnedArr.push('H1');
    if (retreatSheet.I1?.v !== 'ПУТЬ') returnedArr.push('I1');
    if (retreatSheet.L1?.v !== 'KM') returnedArr.push('L1');
    if (retreatSheet.M1?.v !== 'М') returnedArr.push('M1');
    if (retreatSheet.N1?.v !== 'ОТСТУПЛЕНИЕ') returnedArr.push('N1');
    if (retreatSheet.O1?.v !== 'СТЕПЕНЬ') returnedArr.push('O1');
    if (retreatSheet.P1?.v !== 'АМПЛИТУДА') returnedArr.push('P1');
    if (retreatSheet.Q1?.v !== 'ДЛИНА') returnedArr.push('Q1');
    if (retreatSheet.R1?.v !== 'БАЛЛ') returnedArr.push('R1');
    if (retreatSheet.S1?.v !== 'КОЛИЧЕСТВО') returnedArr.push('S1');
    if (retreatSheet.T1?.v !== 'СК_ОГР_ПАСС') returnedArr.push('T1');
    if (retreatSheet.U1?.v !== 'СК_ОГР_ГРУЗ') returnedArr.push('U1');
    if (retreatSheet.V1?.v !== 'СК_УСТ_ПАСС') returnedArr.push('V1');
    if (retreatSheet.W1?.v !== 'СК_УСТ_ГРУЗ') returnedArr.push('W1');
    if (retreatSheet.X1?.v !== 'HOPMA') returnedArr.push('X1');
    if (retreatSheet.Y1?.v !== 'ДЗ') returnedArr.push('Y1');
    if (retreatSheet.Z1?.v !== 'ИС') returnedArr.push('Z1');
    if (retreatSheet.AA1?.v !== '?') returnedArr.push('AA1');
    if (retreatSheet.AB1?.v !== 'СТРЕЛКА') returnedArr.push('AB1');
    if (retreatSheet.AD1?.v !== 'МОСТ') returnedArr.push('AD1');
    if (retreatSheet.AE1?.v !== 'PR_PREDUPR') returnedArr.push('AE1');
    if (retreatSheet.AF1?.v !== 'EXCLUDE') returnedArr.push('AF1');

    return returnedArr;
  }

  sheetKilometersHeader(kilometersSheet: any) {
    let returnedArr: string[] = [];

    if (kilometersSheet.B1.v !== 'ПЧ') returnedArr.push('B1');
    if (kilometersSheet.C1.v !== 'ГОД') returnedArr.push('C1');
    if (kilometersSheet.D1.v !== 'МЕСЯЦ') returnedArr.push('D1');
    if (kilometersSheet.E1.v !== 'ДЕНЬ') returnedArr.push('E1');
    if (kilometersSheet.F1.v !== 'ПС') returnedArr.push('F1');
    if (kilometersSheet.G1.v !== 'ВИД') returnedArr.push('G1');
    if (kilometersSheet.H1.v !== 'КОДНАПР') returnedArr.push('H1');
    if (kilometersSheet.I1.v !== 'ПУТЬ') returnedArr.push('I1');
    if (kilometersSheet.O1.v !== 'KM') returnedArr.push('O1');
    if (kilometersSheet.P1.v !== 'M') returnedArr.push('P1');
    if (kilometersSheet.Q1.v !== 'ОЦЕНКА') returnedArr.push('Q1');
    if (kilometersSheet.R1.v !== 'БАЛЛ') returnedArr.push('R1');
    if (kilometersSheet.S1.v !== 'ПРОВЕРЕНО') returnedArr.push('S1');
    if (kilometersSheet.T1.v !== 'СК_ОГР_ПАСС') returnedArr.push('T1');
    if (kilometersSheet.U1.v !== 'СК_ОГР_ГРУЗ') returnedArr.push('U1');
    if (kilometersSheet.Y1.v !== 'СК_УСТ_ПАСС') returnedArr.push('Y1');
    if (kilometersSheet.Z1.v !== 'СК_УСТ_ГРУЗ') returnedArr.push('Z1');

    return returnedArr;
  }

  sheetFreightHeader(freightSheet: any) {
    let returnedArr: string[] = [];

    if (freightSheet.A1.v !== '№') returnedArr.push('A1');
    if (freightSheet.B1.v !== 'Предприятие') returnedArr.push('B1');
    if (freightSheet.C1.v !== 'Главный путь') returnedArr.push('C1');
    if (freightSheet.D1.v !== 'Км начала') returnedArr.push('D1');
    if (freightSheet.E1.v !== 'Метр начала') returnedArr.push('E1');
    if (freightSheet.F1.v !== 'Км конца') returnedArr.push('F1');
    if (freightSheet.G1.v !== 'Метр конца') returnedArr.push('G1');
    if (freightSheet.H1.v !== 'Длина') returnedArr.push('H1');
    if (freightSheet.I1.v !== 'Грузонапряженность') returnedArr.push('I1');
    if (freightSheet.J1.v !== 'Направление') returnedArr.push('J1');
    if (freightSheet.K1.v !== 'путь') returnedArr.push('K1');
    if (freightSheet.L1.v !== 'Степень грузонапряженности') returnedArr.push('L1');

    return returnedArr;
  }

  sheetsValidate(retreatSheet: any, kilometersSheet: any, freightSheet: any, SheetNames: any): string[] {
    let newErrors: string[] = [];
    /* ---------------- Валидация загруженного файла ------------------ */
    const missingSheets = this.missingSheets(SheetNames, ['Отступления', 'Оценка КМ', 'Грузо']);
    if (missingSheets.length) {
      newErrors.push('В загруженном файле отсутствуют следуюшие листы: ' + missingSheets.join(', '));
      return newErrors;
    }

    const sheetFreightHeader = this.sheetFreightHeader(freightSheet);
    if (sheetFreightHeader.length) {
      newErrors.push(
        "В загруженном файле, в листе 'Грузо', Заголовки столбцов не соответствуют шаблонным. Не соответствующие заголовки: " +
          sheetFreightHeader.join(', ') +
          '. Скачайте файл-шаблон заного, это сэкономит Вам время.'
      );
    }

    const sheetRetreatsHeader = this.sheetRetreatsHeader(retreatSheet);
    if (sheetRetreatsHeader.length) {
      newErrors.push(
        "В загруженном файле, в листе 'Отступления', Заголовки столбцов не соответствуют шаблонным. Не соответствующие заголовки: " +
          sheetRetreatsHeader.join(', ') +
          '. Скачайте файл-шаблон заного, это сэкономит Вам время.'
      );
    }

    const sheetKilometersHeader = this.sheetKilometersHeader(kilometersSheet);
    if (sheetKilometersHeader.length) {
      newErrors.push(
        "В загруженном файле, в листе 'Оценка Км', Заголовки столбцов не соответствуют шаблонным. Не соответствующие заголовки: " +
          sheetKilometersHeader.join(', ') +
          '. Скачайте файл-шаблон заного, это сэкономит Вам время.'
      );
    }

    const emptyCellsInColumn = this.sheetFreightCellsEmptyValues(freightSheet);
    if (emptyCellsInColumn.length) {
      newErrors.push(
        "В загруженном файле, в листе 'Отступления', все значения в колонках 'B', 'J', 'K', 'L' должны быть заполнены. Не заполненные ячейки: " +
          emptyCellsInColumn.join(', ')
      );
    }

    let wrongTypeCells = this.allCellsInColumnMustBeTypeOf('number', freightSheet, 'J');
    if (wrongTypeCells.length) {
      newErrors.push(
        "В загруженном файле, в листе 'Отступления', все значения в колонке 'J' должны быть числами. Ячейки с не числовыми значениями: " +
          wrongTypeCells.join(', ')
      );
    }

    wrongTypeCells = this.allCellsInColumnMustBeTypeOf('number', freightSheet, 'K');
    if (wrongTypeCells.length) {
      newErrors.push(
        "В загруженном файле, в листе 'Отступления', все значения в колонке 'K' должны быть числами. Ячейки с не числовыми значениями: " +
          wrongTypeCells.join(', ')
      );
    }

    wrongTypeCells = this.allCellsInColumnMustBeTypeOf('number', freightSheet, 'L');
    if (wrongTypeCells.length) {
      newErrors.push(
        "В загруженном файле, в листе 'Отступления', все значения в колонке 'F' должны быть числами. Ячейки с не числовыми значениями: " +
          wrongTypeCells.join(', ')
      );
    }

    return newErrors;
    /* ---------------- / Валидация загруженного файла ------------------ */
  }
}

export default FileValidator;
