// import { definePicketByMeter, anyToNumber } from 'src/library/helpers/numbers';
import { definePicketByMeter, dotInsteadComma, getNumberFromString } from 'src/library/helpers/numbers';
import { defineSheetLength } from 'src/library/helpers/xlsx';
import { month as monthNames } from 'src/library/helpers/date';

import { IKilometer, IRetreat } from 'src/state/redux/features/RCDMRostov/DescartesBookConverter/actionCreators';

interface IxlsxDataItem {
  t: string;
  v: string;
  w: string;
}

/**
 * Функция конвертер объекта объектов (Самый первый объект который возвращает XLSX после загрузки файла)
 * в массив объектов с ключами типа IKilometer. Для листа "Оценка Км"
 *
 * @param xlsxData - объект объектов. Самый первый объект который возвращает XLSX после загрузки файла
 * @returns {IKilometer[]}
 */
export const convertPUToSheetObj = (xlsxData: any): IKilometer[] => {
  const directionCodeAddress = 'AD'; // Адрес колонки в которой находится код направленияв xlsxData (загруженном файле)
  const dateAddress = 'A';
  const trackNumberAddress = 'BD';
  const distanceNumberAddress = 'A';
  const kilometerAddress = 'A';
  const checkedKilometersAddress = 'D';
  const scoreAddress = 'AS';
  const gradeAddress = 'BC';
  const tableNameAddress = 'A';
  const noteAddress = 'BF';

  const retreatKilometersCountTableHead = 'Покилометровое количество отступлений'; // заголовок таблицы 'Покилометровое количество отступлений' из которой берем данные, чтобы не брать данные из других табдиц

  let isRetreatKilometersTable = false; // определим сначала, что мы находимс в не нудной нам таблице и не собираем данные, как только название таблицы будет нужное нам, собираем данные

  let returnedArr: IKilometer[] = [];
  let id: number = 0;

  const sheetLength = defineSheetLength(xlsxData);

  let distanceNumber: number = 0;
  let year: number = 0;
  let month: number = 0;
  let day: number = 0;
  let diagnosticToolNumber: number = 0;
  let checkType: number = 9999;
  let directionCode: number = 0;
  let trackNumber: string = '';
  let kilometer: number = 0;
  let grade: number = 0;
  let score: number = 0;
  let checked: number = 0;
  let passLimitSpeed: number | null = null;
  let freightLimitSpeed: number | null = null;
  let passSetSpeed: number | null = null;
  let reightSetSpeed: number | null = null;
  let note: string = '';

  for (let i = 1; i <= sheetLength; i++) {
    /* Дата проверки, номер диагностического средства */
    if (xlsxData[`${dateAddress}${i}`]) {
      const A = xlsxData[`${dateAddress}${i}`].v;
      const splitedA = A.split(' ');
      if (splitedA[0] === 'Дата') {
        const date = A.match(/\d\d\.\d\d\.\d\d\d\d/);
        if (date) {
          const splitedDate = date[0].split('.');
          year = splitedDate[2];
          month = splitedDate[1];
          day = splitedDate[0];
        }
      }

      if (splitedA[0] === 'По' && splitedA[1] === 'данным') {
        diagnosticToolNumber = +splitedA[splitedA.length - 1];

        if (splitedA[2] === 'рабочей') {
          checkType = 0;
        } else if (splitedA[2] === 'контрольной') {
          checkType = 1;
        } else if (splitedA[2] === 'дополнительной') {
          checkType = 2;
        } else {
          checkType = 9999;
        }
      }
    }
    /* / Дата проверки, номер диагностического средства */

    if (xlsxData[`${directionCodeAddress}${i}`]) {
      const AD = xlsxData[`${directionCodeAddress}${i}`].v;
      const splitedAD = AD.split(' ');
      const ADfirstWord = splitedAD[0];
      const ADsecondWord = splitedAD[1];

      if (ADfirstWord === 'Код:') {
        directionCode = +ADsecondWord;
        trackNumber = xlsxData[`${trackNumberAddress}${i}`]?.v;
        distanceNumber = getNumberFromString(xlsxData[`${distanceNumberAddress}${i + 1}`]?.v);
      }
    }

    /* Километры, проверено и тд */
    /* Если заголовок не такой как нам нужен прекратим собирать данные */
    if (
      xlsxData[`${tableNameAddress}${i}`] &&
      xlsxData[`${tableNameAddress}${i}`].v === retreatKilometersCountTableHead
    ) {
      isRetreatKilometersTable = true;
    } else if (
      xlsxData[`${tableNameAddress}${i}`] &&
      xlsxData[`${tableNameAddress}${i}`].v.split(' ')[0] === 'Средний'
    ) {
      isRetreatKilometersTable = false;
    }

    if (xlsxData[`${kilometerAddress}${i}`] && isRetreatKilometersTable) {
      const kilometerValue = xlsxData[`${kilometerAddress}${i}`].v;
      /* Если там число и мы уже определили номер ПЧ (потому что можем попасть на таблицу Количество отступлений по видам), то это километр, собираем данные */
      if (!isNaN(kilometerValue)) {
        kilometer = kilometerValue;

        if (xlsxData[`${gradeAddress}${i}`].v === 'О') {
          grade = 5;
        } else if (xlsxData[`${gradeAddress}${i}`].v === 'X') {
          grade = 4;
        } else if (xlsxData[`${gradeAddress}${i}`].v === 'У') {
          grade = 3;
        } else if (xlsxData[`${gradeAddress}${i}`].v === 'Н') {
          grade = 2;
        } else {
          grade = 0;
        }
        score = +xlsxData[`${scoreAddress}${i}`].v;
        checked = +dotInsteadComma(xlsxData[`${checkedKilometersAddress}${i}`].v);
        note = xlsxData[`${noteAddress}${i}`] ? xlsxData[`${noteAddress}${i}`].v : '';

        returnedArr.push({
          id: ++id,
          distanceNumber,
          year,
          month,
          day,
          diagnosticToolNumber,
          checkType,
          directionCode,
          trackNumber,
          kilometer,
          grade,
          score,
          checked,
          passLimitSpeed,
          freightLimitSpeed,
          passSetSpeed,
          reightSetSpeed,
          note,
        });
      }
    }
  }

  return returnedArr;
};

export const convertFourthDegreesToSheetObj = (xlsxData: any, insulatingGapxlsxData: any): IRetreat[] => {
  let returnedArr: IRetreat[] = [];
  let id: number = 0;

  const sheetLength = defineSheetLength(xlsxData);

  let distanceNumber: number = 0;
  let year: number = 0;
  let month: number = 0;
  let day: number = 0;
  let diagnosticToolNumber: number = 0;
  let checkType: number = 9999;
  let directionCode: number = 0;
  let trackNumber: string = '';
  let kilometer: number = 0;
  let meter: number = 0;
  let retreatName: string = '';
  let retreatDegree: number = 4;
  let retreatAmplitude: string = '';
  let retreatLength: string = '';
  let retreatScore: number = 0;
  let retreatCount: number = 0;
  let passLimitSpeed: number | null = null;
  let freightLimitSpeed: number | null = null;
  let passSetSpeed: number | null = null;
  let freightSetSpeed: number | null = null;
  let norm: number = 0;
  let subgrade: number = 0;
  let insulatingGap: number = 0;
  let bridge: number = 0;
  let prPredupr: number = 0;
  let note: string = '';

  for (let i = 1; i <= sheetLength; i++) {
    const A: IxlsxDataItem = xlsxData[`A${i}`];
    const K: IxlsxDataItem = xlsxData[`K${i}`];
    const T: IxlsxDataItem = xlsxData[`T${i}`];
    const G: IxlsxDataItem = xlsxData[`G${i}`];
    const I: IxlsxDataItem = xlsxData[`I${i}`];
    const E: IxlsxDataItem = xlsxData[`E${i}`];
    const H: IxlsxDataItem = xlsxData[`H${i}`];
    const M: IxlsxDataItem = xlsxData[`M${i}`];
    const J: IxlsxDataItem = xlsxData[`J${i}`];
    const P: IxlsxDataItem = xlsxData[`P${i}`];
    const Q: IxlsxDataItem = xlsxData[`Q${i}`];
    const S: IxlsxDataItem = xlsxData[`S${i}`];
    const U: IxlsxDataItem = xlsxData[`U${i}`];
    const V: IxlsxDataItem = xlsxData[`V${i}`];

    const AValue = A?.v;
    const KValue = K?.v;
    const TValue = T?.v;
    const GValue = G?.v;
    const IValue = I?.v;
    const EValue = E?.v;
    const HValue = H?.v;
    const MValue = M?.v;
    const JValue = J?.v;
    const PValue = P?.v;
    const QValue = Q?.v;
    const SValue = S?.v;
    const UValue = U?.v;
    const VValue = V?.v;

    if (A) {
      /* Если это строчка в которой в ячейке A номер ПЧ */
      const isDistanceNumberRow = /^ПЧ:/.test(AValue);
      if (isDistanceNumberRow) {
        distanceNumber = Number(A.v.match(/\d+/));
      }

      const isDiagnosticToolNumberRow = /Декарт/.test(AValue);
      if (isDiagnosticToolNumberRow) {
        diagnosticToolNumber = Number(A.v.match(/\d+$/));

        if (/рабочая$/.test(KValue)) {
          checkType = 0;
        } else if (/контрольная$/.test(KValue)) {
          checkType = 1;
        } else if (/дополнительная$/.test(KValue)) {
          checkType = 2;
        } else {
          checkType = 9999;
        }

        const monthFromTemplate = TValue.split(' ')[0];
        month = monthNames.verbal.full.ru.indexOf(monthFromTemplate) + 1;

        year = Number(TValue.split(' ')[1]);
      }

      const isDirectionCodeRow = /Код направления:/.test(AValue);
      if (isDirectionCodeRow) {
        directionCode = Number(AValue.match(/\d+/));
      }
    }

    if (G) {
      const isTrackNumberRow = /Путь/.test(GValue);
      if (isTrackNumberRow) {
        trackNumber = IValue;
      }
    }

    const isRetreatRow = M && !isNaN(+MValue) && H && !isNaN(+HValue);
    if (isRetreatRow) {
      if (E) kilometer = +EValue; // Если километр есть (то есть новый), запишем его иначе останется старый, как и надо
      const splitetSetSpeed = SValue.split('/');
      const splitetLimitSpeed = UValue.split('/');

      meter = +HValue;
      retreatName = JValue;
      retreatCount = +MValue;
      retreatAmplitude = PValue;
      retreatLength = QValue;
      passLimitSpeed = splitetLimitSpeed[0] === '-' ? null : +splitetLimitSpeed[0];
      freightLimitSpeed = splitetLimitSpeed[1] === '-' ? null : +splitetLimitSpeed[1];
      passSetSpeed = splitetSetSpeed[0] === '-' ? null : +splitetSetSpeed[0];
      freightSetSpeed = splitetSetSpeed[1] === '-' ? null : +splitetSetSpeed[1];
      note = VValue;

      returnedArr.push({
        id: ++id,
        distanceNumber,
        year,
        month,
        day,
        diagnosticToolNumber,
        checkType,
        directionCode,
        trackNumber,
        kilometer,
        picket: definePicketByMeter(meter) ?? 0,
        meter,
        retreatName,
        retreatDegree,
        retreatAmplitude,
        retreatLength,
        retreatScore,
        retreatCount,
        passLimitSpeed,
        freightLimitSpeed,
        passSetSpeed,
        freightSetSpeed,
        norm,
        subgrade,
        insulatingGap,
        bridge,
        prPredupr,
        note: note ?? '',
      });
    }
  }

  /* просадки в ИС */
  const insulatingGaps = convertInsulatingGapsToSheetObj(insulatingGapxlsxData);

  returnedArr = returnedArr.map((retreat) => {
    const retreatInsulatingGap = insulatingGaps.find(
      (insulatingGap) =>
        insulatingGap.directionCode === retreat.directionCode &&
        insulatingGap.distanceNumber === retreat.distanceNumber &&
        insulatingGap.trackNumber === retreat.trackNumber &&
        insulatingGap.kilometer === retreat.kilometer &&
        insulatingGap.meter === retreat.meter
    );

    if (retreatInsulatingGap) {
      retreat = { ...retreat, insulatingGap: 1 };
    }

    return retreat;
  });

  return returnedArr;
};

export const convertThirdDegreesToSheetObj = (xlsxData: any, insulatingGapxlsxData: any): IRetreat[] => {
  let returnedArr: IRetreat[] = [];
  let id: number = 0;

  const sheetLength = defineSheetLength(xlsxData);

  let distanceNumber: number = 0;
  let year: number = 0;
  let month: number = 0;
  let day: number = 0;
  let diagnosticToolNumber: number = 0;
  let checkType: number = 9999;
  let directionCode: number = 0;
  let trackNumber: string = '';
  let kilometer: number = 0;
  let meter: number = 0;
  let retreatName: string = '';
  let retreatDegree: number = 3;
  let retreatAmplitude: string = '';
  let retreatLength: string = '';
  let retreatScore: number = 0;
  let retreatCount: number = 0;
  let passLimitSpeed: number | null = null;
  let freightLimitSpeed: number | null = null;
  let passSetSpeed: number | null = null;
  let freightSetSpeed: number | null = null;
  let norm: number = 0;
  let subgrade: number = 0;
  let insulatingGap: number = 0;
  let bridge: number = 0;
  let prPredupr: number = 0;
  let note: string = '';

  for (let i = 1; i <= sheetLength; i++) {
    const A: IxlsxDataItem = xlsxData[`A${i}`];
    const K: IxlsxDataItem = xlsxData[`K${i}`];
    const T: IxlsxDataItem = xlsxData[`T${i}`];
    const G: IxlsxDataItem = xlsxData[`G${i}`];
    const I: IxlsxDataItem = xlsxData[`I${i}`];
    const E: IxlsxDataItem = xlsxData[`E${i}`];
    const H: IxlsxDataItem = xlsxData[`H${i}`];
    const M: IxlsxDataItem = xlsxData[`M${i}`];
    const J: IxlsxDataItem = xlsxData[`J${i}`];
    const P: IxlsxDataItem = xlsxData[`P${i}`];
    const Q: IxlsxDataItem = xlsxData[`Q${i}`];
    const S: IxlsxDataItem = xlsxData[`S${i}`];

    const AValue = A?.v;
    const KValue = K?.v;
    const TValue = T?.v;
    const GValue = G?.v;
    const IValue = I?.v;
    const EValue = E?.v;
    const HValue = H?.v;
    const MValue = M?.v;
    const JValue = J?.v;
    const PValue = P?.v;
    const QValue = Q?.v;
    const SValue = S?.v;

    if (A) {
      /* Если это строчка в которой в ячейке A номер ПЧ */
      const isDistanceNumberRow = /^ПЧ:/.test(AValue);
      if (isDistanceNumberRow) {
        distanceNumber = Number(A.v.match(/\d+/));
      }

      const isDiagnosticToolNumberRow = /Декарт/.test(AValue);
      if (isDiagnosticToolNumberRow) {
        diagnosticToolNumber = Number(A.v.match(/\d+$/));

        if (/рабочая$/.test(KValue)) {
          checkType = 0;
        } else if (/контрольная$/.test(KValue)) {
          checkType = 1;
        } else if (/дополнительная$/.test(KValue)) {
          checkType = 2;
        } else {
          checkType = 9999;
        }

        const monthFromTemplate = TValue.split(' ')[0];
        month = monthNames.verbal.full.ru.indexOf(monthFromTemplate) + 1;

        year = Number(TValue.split(' ')[1]);
      }

      const isDirectionCodeRow = /Код направления:/.test(AValue);
      if (isDirectionCodeRow) {
        directionCode = Number(AValue.match(/\d+/));
      }
    }

    if (G) {
      const isTrackNumberRow = /Путь/.test(GValue);
      if (isTrackNumberRow) {
        trackNumber = IValue;
      }
    }

    const isRetreatRow = M && !isNaN(+MValue) && H && !isNaN(+HValue);
    if (isRetreatRow) {
      if (E) kilometer = +EValue; // Если километр есть (то есть новый), запишем его иначе останется старый, как и надо

      meter = +HValue;
      retreatName = JValue;
      retreatCount = +MValue;
      retreatAmplitude = PValue;
      retreatLength = QValue;
      note = SValue;

      returnedArr.push({
        id: ++id,
        distanceNumber,
        year,
        month,
        day,
        diagnosticToolNumber,
        checkType,
        directionCode,
        trackNumber,
        kilometer,
        picket: definePicketByMeter(meter) ?? 0,
        meter,
        retreatName,
        retreatDegree,
        retreatAmplitude,
        retreatLength,
        retreatScore,
        retreatCount,
        passLimitSpeed,
        freightLimitSpeed,
        passSetSpeed,
        freightSetSpeed,
        norm,
        subgrade,
        insulatingGap,
        bridge,
        prPredupr,
        note: note ?? '',
      });
    }
  }

  /* просадки в ИС */
  const insulatingGaps = convertInsulatingGapsToSheetObj(insulatingGapxlsxData);

  returnedArr = returnedArr.map((retreat) => {
    const retreatInsulatingGap = insulatingGaps.find(
      (insulatingGap) =>
        insulatingGap.directionCode === retreat.directionCode &&
        insulatingGap.distanceNumber === retreat.distanceNumber &&
        insulatingGap.trackNumber === retreat.trackNumber &&
        insulatingGap.kilometer === retreat.kilometer &&
        insulatingGap.meter === retreat.meter
    );

    if (retreatInsulatingGap) {
      retreat = { ...retreat, insulatingGap: 1 };
    }

    return retreat;
  });

  return returnedArr;
};

export const convertSecondDegreesToSheetObj = (xlsxData: any, insulatingGapxlsxData: any): IRetreat[] => {
  let returnedArr: IRetreat[] = [];
  let id: number = 0;

  const sheetLength = defineSheetLength(xlsxData);

  let distanceNumber: number = 0;
  let year: number = 0;
  let month: number = 0;
  let day: number = 0;
  let diagnosticToolNumber: number = 0;
  let checkType: number = 9999;
  let directionCode: number = 0;
  let trackNumber: string = '';
  let kilometer: number = 0;
  let meter: number = 0;
  let retreatName: string = '';
  let retreatDegree: number = 2;
  let retreatAmplitude: string = '';
  let retreatLength: string = '';
  let retreatScore: number = 0;
  let retreatCount: number = 0;
  let passLimitSpeed: number | null = null;
  let freightLimitSpeed: number | null = null;
  let passSetSpeed: number | null = null;
  let freightSetSpeed: number | null = null;
  let norm: number = 0;
  let subgrade: number = 0;
  let insulatingGap: number = 0;
  let bridge: number = 0;
  let prPredupr: number = 0;

  let isFirstNumbersOfRowsSeted: boolean = false; // это флаг типа записан ли номер первой строки с которой потом начнем итерироваться для обратки данных из второй половины литса
  let firstRowNumber: number = 1;
  let isLastNumbersOfRowsSeted: boolean = false;
  let lastRowNumber: number = 1;

  let trackNumberAddress: string[] = ['']; // адрес (буква колонки) колонки пути в зависимости от того какую часть таблицы мы обрабатываем сейчас
  let directionCodeAddress: string = '';
  let kilimeterAddress: string = '';
  let meterAddress: string = '';
  let retreatNameAddress: string = '';
  let retreatAmplitudeAddress: string = '';
  let retreatLengthAddress: string = '';
  let retreatCountAddress: string = '';

  for (let i = 1; i <= sheetLength + 1; i++) {
    /* Назначим адреса ячеек при каждой итерации в зависимости от того какую часть таблицы мы обрабатываем сейчас */
    trackNumberAddress = ['A', 'C']; // первая буква в массиве - слово "Путь" в ячекйке, вторая номер пути
    directionCodeAddress = 'A';
    kilimeterAddress = 'E';
    meterAddress = 'F';
    retreatNameAddress = 'G';
    retreatAmplitudeAddress = 'H';
    retreatLengthAddress = 'I';
    retreatCountAddress = 'K';

    let directionCodeCell = xlsxData[`${directionCodeAddress}${i}`];
    let directionCodeCellValue = directionCodeCell?.v;

    let trackNumberPathCell = xlsxData[`${trackNumberAddress[0]}${i}`]; // слово "Путь"
    let trackNumberPathCellValue = directionCodeCell?.v;

    let trackNumberCell = xlsxData[`${trackNumberAddress[1]}${i}`]; // номер пути
    let trackNumberCellValue = trackNumberCell?.v;

    let kilometerCell = xlsxData[`${kilimeterAddress}${i}`];
    let kilometerCellValue = kilometerCell?.v;

    let meterCell = xlsxData[`${meterAddress}${i}`];
    let meterCellValue = meterCell?.v;

    let retreatNameCell = xlsxData[`${retreatNameAddress}${i}`];
    let retreatNameCellValue = retreatNameCell?.v;

    let retreatAmplitudeCell = xlsxData[`${retreatAmplitudeAddress}${i}`];
    let retreatAmplitudeCellValue = retreatAmplitudeCell?.v;

    let retreatLengthCell = xlsxData[`${retreatLengthAddress}${i}`];
    let retreatLengthCellValue = retreatLengthCell?.v;

    let retreatCountCell = xlsxData[`${retreatCountAddress}${i}`];
    let retreatCountCellValue = retreatCountCell?.v;

    const A: IxlsxDataItem = xlsxData[`A${i}`];
    const B: IxlsxDataItem = xlsxData[`B${i}`];
    const C: IxlsxDataItem = xlsxData[`C${i}`];
    const D: IxlsxDataItem = xlsxData[`D${i}`];
    const E: IxlsxDataItem = xlsxData[`E${i}`];
    const F: IxlsxDataItem = xlsxData[`F${i}`];
    const G: IxlsxDataItem = xlsxData[`G${i}`];
    const K: IxlsxDataItem = xlsxData[`K${i}`];
    const L: IxlsxDataItem = xlsxData[`L${i}`];
    const M: IxlsxDataItem = xlsxData[`M${i}`];
    const N: IxlsxDataItem = xlsxData[`N${i}`];
    const O: IxlsxDataItem = xlsxData[`O${i}`];
    const P: IxlsxDataItem = xlsxData[`P${i}`];
    const R: IxlsxDataItem = xlsxData[`R${i}`];
    const S: IxlsxDataItem = xlsxData[`S${i}`];
    const T: IxlsxDataItem = xlsxData[`T${i}`];
    const J: IxlsxDataItem = xlsxData[`J${i}`];
    const V: IxlsxDataItem = xlsxData[`V${i}`];

    const AValue = A?.v;
    const JValue = J?.v;
    const VValue = V?.v;

    if (A) {
      /* Если это строчка в которой в ячейке A номер ПЧ */
      const isDistanceNumberRow = /^ПЧ:/.test(AValue);
      if (isDistanceNumberRow) {
        distanceNumber = Number(A.v.match(/\d+/));
      }

      const isDiagnosticToolNumberRow = /Декарт/.test(AValue);
      if (isDiagnosticToolNumberRow && diagnosticToolNumber === 0) {
        diagnosticToolNumber = Number(A.v.match(/\d+$/));

        if (/рабочая$/.test(JValue) && checkType === 9999) {
          checkType = 0;
        } else if (/контрольная$/.test(JValue) && checkType === 9999) {
          checkType = 1;
        } else if (/дополнительная$/.test(JValue) && checkType === 9999) {
          checkType = 2;
        }

        if (month === 0) {
          const monthFromTemplate = VValue?.split(' ')[0];
          month = monthNames.verbal.full.ru.indexOf(monthFromTemplate) + 1;
        }
        if (year === 0) {
          year = Number(VValue?.split(' ')[1]);
        }
      }

      const isDirectionCodeRow = /Код направления:/.test(directionCodeCellValue);
      if (isDirectionCodeRow) {
        directionCode = Number(directionCodeCellValue.match(/\d+/));
      }
    }

    if (trackNumberPathCell) {
      const isTrackNumberRow = /Путь/.test(trackNumberPathCellValue);
      if (isTrackNumberRow) {
        trackNumber = trackNumberCellValue;
      }
    }

    if (AValue === 'ПЧУ') {
      firstRowNumber = i + 1; // первая строка листа с замечаниями, будем потом от нее циклить чтобы спарсить данные из второй половины листа
    }

    const isRetreatRow =
      meterCell &&
      !isNaN(+meterCellValue) &&
      retreatLengthCell &&
      !isNaN(+retreatLengthCellValue) &&
      retreatCountCell &&
      !isNaN(+retreatCountCellValue) &&
      retreatNameCell &&
      retreatAmplitudeCell;
    if (isRetreatRow) {
      /* Запишем в память номер строки с которой начнем иетрироваться для сбора данных из второй половины листа когда закончим сбор в первой */
      if (firstRowNumber !== i && !isFirstNumbersOfRowsSeted) {
        isFirstNumbersOfRowsSeted = true;
      }

      if (kilometerCell) kilometer = +kilometerCellValue; // Если километр есть (то есть новый), запишем его иначе останется старый, как и надо

      meter = +meterCellValue;
      retreatName = retreatNameCellValue;
      retreatCount = +retreatCountCellValue;
      retreatAmplitude = retreatAmplitudeCellValue;
      retreatLength = retreatLengthCellValue;

      returnedArr.push({
        id: ++id,
        distanceNumber,
        year,
        month,
        day,
        diagnosticToolNumber,
        checkType,
        directionCode,
        trackNumber,
        kilometer,
        picket: definePicketByMeter(meter) ?? 0,
        meter,
        retreatName,
        retreatDegree,
        retreatAmplitude,
        retreatLength,
        retreatScore,
        retreatCount,
        passLimitSpeed,
        freightLimitSpeed,
        passSetSpeed,
        freightSetSpeed,
        norm,
        subgrade,
        insulatingGap,
        bridge,
        prPredupr,
        note: '',
      });
    } else {
      /* конец ли это страницы, начинать ли итерироваться на второй половине или на первой половине, если это конец страница второй половины */
      const isEndOfPage =
        !A &&
        !B &&
        !C &&
        !D &&
        !E &&
        !F &&
        !G &&
        !K &&
        !L &&
        !M &&
        !N &&
        !O &&
        !P &&
        !R &&
        !S &&
        !T &&
        xlsxData[`${meterAddress}${i - 1}`] &&
        !xlsxData[`${meterAddress}${i + 1}`] &&
        !xlsxData[`${meterAddress}${i + 2}`];
      if (isEndOfPage) {
        lastRowNumber = i - 1; // последняя строка листа с замечаниями, будем потом от нее циклить чтобы спарсить данные из второй половины листа
        isLastNumbersOfRowsSeted = true;
      }
    }

    /* если мы прошли первуб половину листа, продем по второй */
    if (isFirstNumbersOfRowsSeted && isLastNumbersOfRowsSeted) {
      trackNumberAddress = ['L', 'N'];
      directionCodeAddress = 'L';
      kilimeterAddress = 'Q';
      meterAddress = 'T';
      retreatNameAddress = 'U';
      retreatAmplitudeAddress = 'W';
      retreatLengthAddress = 'X';
      retreatCountAddress = 'Y';

      for (let j = firstRowNumber; j <= lastRowNumber; j++) {
        directionCodeCell = xlsxData[`${directionCodeAddress}${j}`];
        directionCodeCellValue = directionCodeCell?.v;

        trackNumberPathCell = xlsxData[`${trackNumberAddress[0]}${j}`]; // слово "Путь"
        trackNumberPathCellValue = directionCodeCell?.v;

        trackNumberCell = xlsxData[`${trackNumberAddress[1]}${j}`]; // номер пути
        trackNumberCellValue = trackNumberCell?.v;

        kilometerCell = xlsxData[`${kilimeterAddress}${j}`];
        kilometerCellValue = kilometerCell?.v;

        meterCell = xlsxData[`${meterAddress}${j}`];
        meterCellValue = meterCell?.v;

        retreatNameCell = xlsxData[`${retreatNameAddress}${j}`];
        retreatNameCellValue = retreatNameCell?.v;

        retreatAmplitudeCell = xlsxData[`${retreatAmplitudeAddress}${j}`];
        retreatAmplitudeCellValue = retreatAmplitudeCell?.v;

        retreatLengthCell = xlsxData[`${retreatLengthAddress}${j}`];
        retreatLengthCellValue = retreatLengthCell?.v;

        retreatCountCell = xlsxData[`${retreatCountAddress}${j}`];
        retreatCountCellValue = retreatCountCell?.v;

        if (directionCodeCell) {
          const isDirectionCodeRow = /Код направления:/.test(directionCodeCellValue);
          if (isDirectionCodeRow) {
            directionCode = Number(directionCodeCellValue.match(/\d+/));
          }
        }

        if (trackNumberPathCell) {
          const isTrackNumberRow = /Путь/.test(trackNumberPathCellValue);
          if (isTrackNumberRow) {
            trackNumber = trackNumberCellValue;
          }
        }

        const isRetreatRow =
          meterCell &&
          !isNaN(+meterCellValue) &&
          retreatLengthCell &&
          !isNaN(+retreatLengthCellValue) &&
          retreatCountCell &&
          !isNaN(+retreatCountCellValue) &&
          retreatNameCell &&
          retreatAmplitudeCell;
        if (isRetreatRow) {
          if (kilometerCell) kilometer = +kilometerCellValue; // Если километр есть (то есть новый), запишем его иначе останется старый, как и надо

          meter = +meterCellValue;
          retreatName = retreatNameCellValue;
          retreatCount = +retreatCountCellValue;
          retreatAmplitude = retreatAmplitudeCellValue;
          retreatLength = retreatLengthCellValue;

          returnedArr.push({
            id: ++id,
            distanceNumber,
            year,
            month,
            day,
            diagnosticToolNumber,
            checkType,
            directionCode,
            trackNumber,
            kilometer,
            picket: definePicketByMeter(meter) ?? 0,
            meter,
            retreatName,
            retreatDegree,
            retreatAmplitude,
            retreatLength,
            retreatScore,
            retreatCount,
            passLimitSpeed,
            freightLimitSpeed,
            passSetSpeed,
            freightSetSpeed,
            norm,
            subgrade,
            insulatingGap,
            bridge,
            prPredupr,
            note: '',
          });
        }

        if (j === lastRowNumber) {
          isFirstNumbersOfRowsSeted = false;
          isLastNumbersOfRowsSeted = false;
        }
      }
    }
  }

  /* просадки в ИС */
  const insulatingGaps = convertInsulatingGapsToSheetObj(insulatingGapxlsxData);

  returnedArr = returnedArr.map((retreat) => {
    const retreatInsulatingGap = insulatingGaps.find(
      (insulatingGap) =>
        insulatingGap.directionCode === retreat.directionCode &&
        insulatingGap.distanceNumber === retreat.distanceNumber &&
        insulatingGap.trackNumber === retreat.trackNumber &&
        insulatingGap.kilometer === retreat.kilometer &&
        insulatingGap.meter === retreat.meter
    );

    if (retreatInsulatingGap) {
      retreat = { ...retreat, insulatingGap: 1 };
    }

    return retreat;
  });

  return returnedArr;
};

function convertInsulatingGapsToSheetObj(xlsxData: any): IRetreat[] {
  let returnedArr: IRetreat[] = [];
  let id: number = 0;

  let distanceNumber: number = 0;
  let directionCode: number = 0;
  let trackNumber: string = '';
  let kilometer: number = 0;
  let meter: number = 0;
  let retreatName: string = '';
  let retreatDegree: number = 0;
  let retreatAmplitude: string = '';
  let retreatLength: string = '';
  let passLimitSpeed: number | null = null;
  let freightLimitSpeed: number | null = null;
  let passSetSpeed: number | null = null;
  let freightSetSpeed: number | null = null;
  let note: string = '';

  const directionCodeAddress = 'A';
  const distanceNumberAddress = 'I';
  const trackNumberAddress = 'A';
  const kilimeterAddress = 'A';
  const meterAddress = 'B';
  const retreatNameAddress = 'D';
  const retreatAmplitudeAddress = 'E';
  const retreatLengthAddress = 'G';
  const retreatDegreeAddress = 'H';
  const setSpeedAddress = 'I';
  const limitSpeedAddress = 'K';
  const noteAddress = 'L';

  const sheetLength = defineSheetLength(xlsxData);

  for (let i = 1; i <= sheetLength; i++) {
    const A: IxlsxDataItem = xlsxData[`A${i}`];

    const directionCodeValue = xlsxData[`${directionCodeAddress}${i}`]?.v;
    const distanceNumberValue = xlsxData[`${distanceNumberAddress}${i}`]?.v;
    const trackNumberValue = xlsxData[`${trackNumberAddress}${i}`]?.v;
    const kilometerValue = xlsxData[`${kilimeterAddress}${i}`]?.v;
    const meterValue = xlsxData[`${meterAddress}${i}`]?.v;
    const retreatNameValue = xlsxData[`${retreatNameAddress}${i}`]?.v;
    const retreatAmplitudeValue = xlsxData[`${retreatAmplitudeAddress}${i}`]?.v;
    const retreatLengthValue = xlsxData[`${retreatLengthAddress}${i}`]?.v;
    const retreatDegreeValue = xlsxData[`${retreatDegreeAddress}${i}`]?.v;
    const setSpeedValue = xlsxData[`${setSpeedAddress}${i}`]?.v;
    const limitSpeedValue = xlsxData[`${limitSpeedAddress}${i}`]?.v;
    const noteValue = xlsxData[`${noteAddress}${i}`]?.v;
    const passSetSpeedValue = setSpeedValue?.split('/')[0];
    const freightSetSpeedValue = setSpeedValue?.split('/')[1];
    const passLimitSpeedValue = limitSpeedValue?.split('/')[0];
    const freightLimitSpeedValue = limitSpeedValue?.split('/')[1];

    const isDirectionCodeRow = /Направление:/.test(directionCodeValue);
    if (isDirectionCodeRow) {
      directionCode = Number(directionCodeValue.match(/\d+/));
    }

    const isDistanceNumberRow = /ПЧ:/.test(distanceNumberValue);
    if (isDistanceNumberRow) {
      distanceNumber = Number(distanceNumberValue.match(/\d+/));
    }

    const isTrackNumberRow = /Путь/.test(trackNumberValue);
    if (isTrackNumberRow) {
      const splited = trackNumberValue.split(' ');
      trackNumber = splited[1];
    }

    if (A) {
      const isRetreaRow =
        kilometerValue &&
        !isNaN(kilometerValue) &&
        meterValue &&
        !isNaN(meterValue) &&
        retreatNameValue &&
        retreatAmplitudeValue &&
        !isNaN(retreatAmplitudeValue) &&
        retreatLengthValue &&
        !isNaN(retreatLengthValue) &&
        retreatDegreeValue &&
        !isNaN(retreatDegreeValue) &&
        setSpeedValue &&
        limitSpeedValue &&
        noteValue;
      if (isRetreaRow) {
        kilometer = +kilometerValue;
        meter = +meterValue;
        retreatName = retreatNameValue;
        retreatAmplitude = retreatAmplitudeValue;
        retreatLength = retreatLengthValue;
        retreatDegree = +retreatDegreeValue;
        passLimitSpeed = passLimitSpeedValue === '-' ? null : +passLimitSpeedValue;
        freightLimitSpeed = freightLimitSpeedValue === '-' ? null : +freightLimitSpeedValue;
        passSetSpeed = passSetSpeedValue === '-' ? null : +passSetSpeedValue;
        freightSetSpeed = freightSetSpeedValue === '-' ? null : +freightSetSpeedValue;
        note = noteValue;

        returnedArr.push({
          id: ++id,
          distanceNumber,
          year: 0,
          month: 0,
          day: 0,
          diagnosticToolNumber: 0,
          checkType: 0,
          directionCode,
          trackNumber,
          kilometer,
          picket: definePicketByMeter(meter) ?? 0,
          meter,
          retreatName,
          retreatDegree,
          retreatAmplitude,
          retreatLength,
          retreatScore: 0,
          retreatCount: 1,
          passLimitSpeed,
          freightLimitSpeed,
          passSetSpeed,
          freightSetSpeed,
          norm: 0,
          subgrade: 0,
          insulatingGap: 1,
          bridge: 0,
          prPredupr: 0,
          note: note ?? '',
        });
      }
    }
  }

  return returnedArr;
}
