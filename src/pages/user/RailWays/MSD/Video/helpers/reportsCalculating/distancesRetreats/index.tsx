import { distancesAndRegions as distancesAndRegionsDB } from 'src/library/DB/distancesAndRegionsData';

import { getDistanceOfInfrastructureNameByDistanceNumber } from 'src/library/helpers/DB';
import { getUniqueValuesFromArr } from 'src/library/helpers/numbers';

import { IData, IRetreat, ICheckedDistance } from 'src/state/redux/features/video/actionCreators';

export type TForXLSXAoA = (string | number)[][];

export interface IReturnedObj {
  forXLSXAoA: TForXLSXAoA;
}

export const distancesRetreats = (
  data: IData,
  retreats: IRetreat[],
  checkedDistances: ICheckedDistance[]
): IReturnedObj => {
  // возвращаемый объект, тут будет 1 массив и 1 объект:
  // 1 массив - массив массивов для формирования книги excel с помощью библиотеки XLSX;
  // 2 объект - объект для отрисовки таблицы на странице в браузере, состоит из 2 свойств:
  // 1 свойство - массив из элемнтов для создания header`а таблицы,
  // 2 свойство массив массивов с данными для создания тела таблицы.

  // массив массивов для формирования книги excel с помощью библиотеки XLSX;
  let forXLSXAoA: TForXLSXAoA = [[]];

  const distancesList = retreats.map((item) => item.distanceNumber);
  const uniqueDistanceNumbersArr = getUniqueValuesFromArr(distancesList);

  /* ---------- Первая строчка отчета ----------------- */
  const firstRow: (string | number)[] = [
    'Дата',
    '№ ПС, СВД, ДК',
    'Дистанция пути',
    'Проверенно, км',
    'Расшифровано километров по видеоконтролю',
    'Отсутствующие или непротянутые                              клеммные или закладные болты',
    'Отсутствие гаек на закладных и                    клеммных болтах',
    'Отсутствующие или дефектные  клеммы',
    'Отсутствующие или наддернутые                  рабочие костыли',
    'Недостаточное количество шурупов',
    'Дефектные и отсутствующие  подкладки',
    'Выход подошвы рельса из реборд                  подкладок',
    'Отсутствует прокладка упругая   скрепления ЖБР',
    'Отсутствует скоба упорная скрепления ЖБР',
    'Отсутствует скрепление ЖБР',
    'Клемма под подошвой рельса',
    'Наличие чрезмерно растянутых, слитых зазоров ',
    'Недостаточное количество стыковых            болтов',
    'Дефектная стыковая накладка',
    'Горизонтальные, вертикальные  ступеньки',
    'Дефектная деревянная шпала',
    'Негодная деревянная шпала',
    ' Дефектная железобетонная шпала',
    'Негодная железобетонная шпала',
    'Отклонение от эпюрных значений                               укладки шпал',
    'Дефектный рельс',
    'Излом рельса',
    '          Выколы головки рельса',
    'Поперечные или продольные                        трещины, изломы головки рельса',
    'Дефекты и повреждения                            подошвы рельса',
    ' Выплеск',
    'Недостаточное количество балласта в шпальном ящике',
    'Прочее',
    'Ненормативные подвижки бесстыкового пути',
    'Итого отступлений',
    'Всего выданных ограничений скорости, шт',
  ];

  /* Шапка таблицы */
  forXLSXAoA.push(firstRow);
  /* ---------- / Первая строчка отчета --------------- */

  /* ---------- Вторая строчка отчета ----------------- */
  let secondRow: (string | number)[] = [];

  secondRow = firstRow.map((item, index) => index + 1);

  forXLSXAoA.push(secondRow);
  /* ---------- / Вторая строчка отчета --------------- */

  /* ---------- Третья строчка отчета ----------------- */
  let thirdRow: (string | number)[] = [];

  /* каждая переменная соответствует колонке в книге excel */
  let countColumn6: number = 0;
  let countColumn7: number = 0;
  let countColumn8: number = 0;
  let countColumn9: number = 0;
  let countColumn10: number = 0;
  let countColumn11: number = 0;
  let countColumn12: number = 0;
  let countColumn13: number = 0;
  let countColumn14: number = 0;
  let countColumn15: number = 0;
  let countColumn16: number = 0;
  let countColumn17: number = 0;
  let countColumn18: number = 0;
  let countColumn19: number = 0;
  let countColumn20: number = 0;
  let countColumn21: number = 0;
  let countColumn22: number = 0;
  let countColumn23: number = 0;
  let countColumn24: number = 0;
  let countColumn25: number = 0;
  let countColumn26: number = 0;
  let countColumn27: number = 0;
  let countColumn28: number = 0;
  let countColumn29: number = 0;
  let countColumn30: number = 0;
  let countColumn31: number = 0;
  let countColumn32: number = 0;
  let countColumn33: number = 0;
  let countColumn34: number = 0;
  let totalCount: number = 0;

  uniqueDistanceNumbersArr.forEach((distanceNumber, index) => {
    if (index === 0) {
      thirdRow.push(String(data.checkDate));
      thirdRow.push(String(data.diagnosticToolNumber));
    } else {
      thirdRow.push('');
      thirdRow.push('');
    }

    const distance = getDistanceOfInfrastructureNameByDistanceNumber(distancesAndRegionsDB, distanceNumber);
    thirdRow.push(distance);

    /* ---------------- Сумма километров ------------------ */
    const checkedKm = checkedDistances.find((item) => item.distanceNumber === distanceNumber)?.kilometers;

    thirdRow.push(checkedKm ?? 0);

    thirdRow.push(checkedKm ?? 0);
    /* ---------------- / Сумма километров ---------------- */

    retreats.forEach((retreat) => {
      if (retreat.distanceNumber === distanceNumber) {
        if (
          retreat.retreatCode === 94 ||
          retreat.retreatCode === 95 ||
          retreat.retreatCode === 96 ||
          retreat.retreatCode === 97
        ) {
          countColumn6++;
          totalCount++;
        } else if (retreat.retreatCode === 98 || retreat.retreatCode === 99) {
          countColumn7++;
          totalCount++;
        } else if (retreat.retreatCode === 24 || retreat.retreatCode === 25) {
          countColumn8++;
          totalCount++;
        } else if (retreat.retreatCode === 29 || retreat.retreatCode === 30) {
          countColumn9++;
          totalCount++;
        } else if (retreat.retreatCode === 37) {
          // тут остановился
          countColumn10++;
          totalCount++;
        } else if (retreat.retreatCode === 26 || retreat.retreatCode === 27) {
          countColumn11++;
          totalCount++;
        } else if (retreat.retreatCode === 23) {
          countColumn12++;
          totalCount++;
        } else if (retreat.retreatCode === 100) {
          countColumn13++;
          totalCount++;
        } else if (retreat.retreatCode === 101) {
          countColumn14++;
          totalCount++;
        } else if (retreat.retreatCode === 33) {
          countColumn15++;
          totalCount++;
        } else if (retreat.retreatCode === 28) {
          countColumn16++;
          totalCount++;
        } else if (
          retreat.retreatCode === 1 ||
          retreat.retreatCode === 2 ||
          retreat.retreatCode === 3 ||
          retreat.retreatCode === 4 ||
          retreat.retreatCode === 5
        ) {
          countColumn17++;
          totalCount++;
        } else if (
          retreat.retreatCode === 6 ||
          retreat.retreatCode === 7 ||
          retreat.retreatCode === 8 ||
          retreat.retreatCode === 9 ||
          retreat.retreatCode === 10 ||
          retreat.retreatCode === 11 ||
          retreat.retreatCode === 12 ||
          retreat.retreatCode === 13 ||
          retreat.retreatCode === 14
        ) {
          countColumn18++;
          totalCount++;
        } else if (
          retreat.retreatCode === 15 ||
          retreat.retreatCode === 16 ||
          retreat.retreatCode === 17 ||
          retreat.retreatCode === 18
        ) {
          countColumn19++;
          totalCount++;
        } else if (
          retreat.retreatCode === 38 ||
          retreat.retreatCode === 39 ||
          retreat.retreatCode === 40 ||
          retreat.retreatCode === 41
        ) {
          countColumn20++;
          totalCount++;
        } else if (retreat.retreatCode === 60) {
          countColumn21++;
          totalCount++;
        } else if (retreat.retreatCode === 59) {
          countColumn22++;
          totalCount++;
        } else if (retreat.retreatCode === 65) {
          countColumn23++;
          totalCount++;
        } else if (retreat.retreatCode === 64) {
          countColumn24++;
          totalCount++;
        } else if (retreat.retreatCode === 61 || retreat.retreatCode === 66) {
          countColumn25++;
          totalCount++;
        } else if (retreat.retreatCode === 53 || retreat.retreatCode === 57) {
          countColumn26++;
          totalCount++;
        } else if (retreat.retreatCode === 58) {
          countColumn27++;
          totalCount++;
        } else if (retreat.retreatCode === 56) {
          countColumn28++;
          totalCount++;
        } else if (retreat.retreatCode === 54 || retreat.retreatCode === 55) {
          countColumn29++;
          totalCount++;
        } else if (retreat.retreatCode === 57) {
          countColumn30++;
          totalCount++;
        } else if (retreat.retreatCode === 71 || retreat.retreatCode === 72) {
          countColumn31++;
          totalCount++;
        } else if (retreat.retreatCode === 69) {
          countColumn32++;
          totalCount++;
        } else if (retreat.retreatCode === 19) {
          countColumn34++;
          totalCount++;
        } else {
          countColumn33++;
          totalCount++;
        }
      }
    });

    thirdRow.push(countColumn6 === 0 ? '' : countColumn6);
    thirdRow.push(countColumn7 === 0 ? '' : countColumn7);
    thirdRow.push(countColumn8 === 0 ? '' : countColumn8);
    thirdRow.push(countColumn9 === 0 ? '' : countColumn9);
    thirdRow.push(countColumn10 === 0 ? '' : countColumn10);
    thirdRow.push(countColumn11 === 0 ? '' : countColumn11);
    thirdRow.push(countColumn12 === 0 ? '' : countColumn12);
    thirdRow.push(countColumn13 === 0 ? '' : countColumn13);
    thirdRow.push(countColumn14 === 0 ? '' : countColumn14);
    thirdRow.push(countColumn15 === 0 ? '' : countColumn15);
    thirdRow.push(countColumn16 === 0 ? '' : countColumn16);
    thirdRow.push(countColumn17 === 0 ? '' : countColumn17);
    thirdRow.push(countColumn18 === 0 ? '' : countColumn18);
    thirdRow.push(countColumn19 === 0 ? '' : countColumn19);
    thirdRow.push(countColumn20 === 0 ? '' : countColumn20);
    thirdRow.push(countColumn21 === 0 ? '' : countColumn21);
    thirdRow.push(countColumn22 === 0 ? '' : countColumn22);
    thirdRow.push(countColumn23 === 0 ? '' : countColumn23);
    thirdRow.push(countColumn24 === 0 ? '' : countColumn24);
    thirdRow.push(countColumn25 === 0 ? '' : countColumn25);
    thirdRow.push(countColumn26 === 0 ? '' : countColumn26);
    thirdRow.push(countColumn27 === 0 ? '' : countColumn27);
    thirdRow.push(countColumn28 === 0 ? '' : countColumn28);
    thirdRow.push(countColumn29 === 0 ? '' : countColumn29);
    thirdRow.push(countColumn30 === 0 ? '' : countColumn30);
    thirdRow.push(countColumn31 === 0 ? '' : countColumn31);
    thirdRow.push(countColumn32 === 0 ? '' : countColumn32);
    thirdRow.push(countColumn33 === 0 ? '' : countColumn33);
    thirdRow.push(countColumn34 === 0 ? '' : countColumn34);
    thirdRow.push(totalCount);

    const limitSpeedCount = retreats.filter(
      (retreat) => retreat.distanceNumber === distanceNumber && retreat.limitSpeed
    ).length;

    thirdRow.push(limitSpeedCount ? limitSpeedCount : '');

    countColumn6 = 0;
    countColumn7 = 0;
    countColumn8 = 0;
    countColumn9 = 0;
    countColumn10 = 0;
    countColumn11 = 0;
    countColumn12 = 0;
    countColumn13 = 0;
    countColumn14 = 0;
    countColumn15 = 0;
    countColumn16 = 0;
    countColumn17 = 0;
    countColumn18 = 0;
    countColumn19 = 0;
    countColumn20 = 0;
    countColumn21 = 0;
    countColumn22 = 0;
    countColumn23 = 0;
    countColumn24 = 0;
    countColumn25 = 0;
    countColumn26 = 0;
    countColumn27 = 0;
    countColumn28 = 0;
    countColumn29 = 0;
    countColumn30 = 0;
    countColumn31 = 0;
    countColumn32 = 0;
    countColumn33 = 0;
    countColumn34 = 0;
    totalCount = 0;

    forXLSXAoA.push(thirdRow);
    thirdRow = [];
  });

  /* ---------- / Третья строчка отчета --------------- */

  return {
    forXLSXAoA,
  };
};
