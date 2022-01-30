import { IKilometer, IRetreat } from 'src/state/redux/features/RCDMRostov/DescartesBookConverter/actionCreators';

export type TForXLSXAoA = (string | number)[][];

export interface IReturnedObj {
  forXLSXAoA: TForXLSXAoA;
}

export interface ISheetKilometerForBook {
  КОДДОР: '';
  ПЧ: number;
  ГОД: number;
  МЕСЯЦ: number;
  ДЕНЬ: number;
  ПС: number;
  ВИД: number;
  КОДНАПР: number;
  ПУТЬ: string;
  КЛАСС: '-';
  ЛИНИЯ: '-';
  ПЧУ: '';
  ПД: '';
  ПДБ: '';
  KM: number;
  M: number;
  ОЦЕНКА: number;
  БАЛЛ: number;
  ПРОВЕРЕНО: number;
  СК_ОГР_ПАСС: '-';
  СК_ОГР_ГРУЗ: '-';
  СК_ОГР_ПРЖ: '-';
  СК_ОГР_C: '-';
  СК_ОГР_СПН: '-';
  СК_УСТ_ПАСС: '-';
  СК_УСТ_ГРУЗ: '-';
  СК_УСТ_C: '-';
  СК_УСТ_СПН: '-';
  ПРИЧИНА: string;
  KOD_PREDUPR: '';
  НАПРАВЛЕНИЕ: string;
  ДЛКИЛОМЕТРА: '';
  RIX2: '';
  RIX3: '';
  RIX4: '';
  USH2: '';
  USH3: '';
  USH4: '';
  SUG2: '';
  SUG3: '';
  SUG4: '';
  PLU2: '';
  PLU3: '';
  PLU4: '';
  PER2: '';
  PER3: '';
  PER4: '';
  PRO2: '';
  PRO3: '';
  PRO4: '';
  OTS2: '';
  OTS3: '';
  OTS4: '';
  UKL: '';
  DRU: '';
  КАТЕГОРИЯ: '';
  PRUCH: '';
}

export interface ISheetRetreatsForBook {
  КОД: '';
  ПЧ: number;
  ГОД: number;
  МЕСЯЦ: number;
  ДЕНЬ: number;
  ПС: number;
  ВИД: number;
  КОДНАПРВ: number;
  ПУТЬ: string;
  КЛАСС: '-';
  ЛИНИЯ: '-';
  KM: number;
  М: number;
  ОТСТУПЛЕНИЕ: string;
  СТЕПЕНЬ: number;
  АМПЛИТУДА: number;
  ДЛИНА: number;
  БАЛЛ: number;
  КОЛИЧЕСТВО: number;
  СК_ОГР_ПАСС: number | null;
  СК_ОГР_ГРУЗ: number | null;
  СК_УСТ_ПАСС: number | null;
  СК_УСТ_ГРУЗ: number | null;
  HOPMA: '-';
  УСЛРАСЧЕТА: '';
  П50: '';
  КР: '';
  ДЗ: '';
  'T+': '';
  З: '';
  ИС: number;
  'ур.пр': null;
  '?прж': '';
  '?': '';
  СТРЕЛКА: number;
  ОБК: number;
  МОСТ: number;
  '+': '';
  '-': '';
  'н.р.': '';
  ИЗМ: '';
  ГР: '';
  PR_PREDUPR: '';
  UPDATTR: '';
  РАСШИФРОВКА: '';
  КОДОТСТУП: '';
  EXCLUDE: '';
}

export const sheetKilometers = (xlsxData: IKilometer[]): IReturnedObj => {
  // возвращаемый объект, тут будет 1 массив и 1 объект:
  // 1 массив - массив массивов для формирования книги excel с помощью библиотеки XLSX;
  // 2 объект - объект для отрисовки таблицы на странице в браузере, состоит из 2 свойств:
  // 1 свойство - массив из элемнтов для создания header`а таблицы,
  // 2 свойство массив массивов с данными для создания тела таблицы.

  // массив массивов для формирования книги excel с помощью библиотеки XLSX;
  let forXLSXAoA: TForXLSXAoA = [[]];

  /* ---------- Первая строчка отчета ----------------- */
  const firstRow: (string | number)[] = [
    'КОДДОР',
    'ПЧ',
    'ГОД',
    'МЕСЯЦ',
    'ДЕНЬ',
    'ПС',
    'ВИД',
    'КОДНАПР',
    'ПУТЬ',
    'КЛАСС',
    'ЛИНИЯ',
    'ПЧУ',
    'ПД',
    'ПДБ',
    'KM',
    'M',
    'ОЦЕНКА',
    'БАЛЛ',
    'ПРОВЕРЕНО',
    'СК_ОГР_ПАСС',
    'СК_ОГР_ГРУЗ',
    'СК_ОГР_ПРЖ',
    'СК_ОГР_C',
    'СК_ОГР_СПН',
    'СК_УСТ_ПАСС',
    'СК_УСТ_ГРУЗ',
    'СК_УСТ_C',
    'СК_УСТ_СПН',
    'ПРИЧИНА',
    'KOD_PREDUPR',
    'НАПРАВЛЕНИЕ',
    'ДЛКИЛОМЕТРА',
    'RIX2',
    'RIX3',
    'RIX4',
    'USH2',
    'USH3',
    'USH4',
    'SUG2',
    'SUG3',
    'SUG4',
    'PLU2',
    'PLU3',
    'PLU4',
    'PER2',
    'PER3',
    'PER4',
    'PRO2',
    'PRO3',
    'PRO4',
    'OTS2',
    'OTS3',
    'OTS4',
    'UKL',
    'DRU',
    'КАТЕГОРИЯ',
    'PRUCH',
  ];

  forXLSXAoA = [firstRow];
  /* ---------- Вторая строчка отчета ----------------- */
  let secondRow: (string | number)[] = [];

  xlsxData.forEach((item) => {
    secondRow.push(
      '',
      item.distanceNumber,
      item.year,
      item.month,
      item.day,
      item.diagnosticToolNumber,
      item.checkType,
      item.directionCode,
      item.trackNumber,
      '',
      '',
      '',
      '',
      '',
      item.kilometer,
      '',
      item.grade,
      item.score,
      item.checked,
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      item.note,
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    );
    forXLSXAoA.push(secondRow);
    secondRow = [];
  });

  /* ---------- / Вторая строчка отчета --------------- */

  /* ---------- / Первая строчка отчета --------------- */

  return { forXLSXAoA };
};

export const sheetRetreats = (xlsxData: IRetreat[]): IReturnedObj => {
  // возвращаемый объект, тут будет 1 массив и 1 объект:
  // 1 массив - массив массивов для формирования книги excel с помощью библиотеки XLSX;
  // 2 объект - объект для отрисовки таблицы на странице в браузере, состоит из 2 свойств:
  // 1 свойство - массив из элемнтов для создания header`а таблицы,
  // 2 свойство массив массивов с данными для создания тела таблицы.

  // массив массивов для формирования книги excel с помощью библиотеки XLSX;
  let forXLSXAoA: TForXLSXAoA = [[]];

  /* ---------- Первая строчка отчета ----------------- */
  const firstRow: (string | number)[] = [
    'КОД',
    'ПЧ',
    'ГОД',
    'МЕСЯЦ',
    'ДЕНЬ',
    'ПС',
    'ВИД',
    'КОДНАПРВ',
    'ПУТЬ',
    'КЛАСС',
    'ЛИНИЯ',
    'KM',
    'М',
    'ОТСТУПЛЕНИЕ',
    'СТЕПЕНЬ',
    'АМПЛИТУДА',
    'ДЛИНА',
    'БАЛЛ',
    'КОЛИЧЕСТВО',
    'СК_ОГР_ПАСС',
    'СК_ОГР_ГРУЗ',
    'СК_УСТ_ПАСС',
    'СК_УСТ_ГРУЗ',
    'HOPMA',
    'УСЛРАСЧЕТА',
    'П50',
    'КР',
    'ДЗ',
    'T+',
    'З',
    'ИС',
    'ур.пр',
    'прж',
    '?',
    'СТРЕЛКА',
    'ОБК',
    'МОСТ',
    '+',
    '-',
    'н.р.',
    'ИЗМ',
    'ГР',
    'PR_PREDUPR',
    'UPDATTR',
    'РАСШИФРОВКА',
    'КОДОТСТУП',
    'EXCLUDE',
  ];

  forXLSXAoA = [firstRow];
  /* ---------- Вторая строчка отчета ----------------- */
  let secondRow: (string | number)[] = [];

  xlsxData.forEach((item) => {
    secondRow.push(
      '',
      item.distanceNumber,
      item.year,
      item.month,
      item.day,
      item.diagnosticToolNumber,
      item.checkType,
      item.directionCode,
      item.trackNumber,
      '',
      '',
      item.kilometer,
      item.meter,
      item.retreatName,
      item.retreatDegree,
      item.retreatAmplitude,
      item.retreatLength,
      '',
      item.retreatCount,
      item.passLimitSpeed ?? '-',
      item.freightLimitSpeed ?? '-',
      item.passSetSpeed ?? '-',
      item.freightSetSpeed ?? '-',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      item.insulatingGap,
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    );
    forXLSXAoA.push(secondRow);
    secondRow = [];
  });

  /* ---------- / Вторая строчка отчета --------------- */

  /* ---------- / Первая строчка отчета --------------- */

  return { forXLSXAoA };
};
