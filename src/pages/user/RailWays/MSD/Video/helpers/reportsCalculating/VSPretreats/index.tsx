import { distancesAndRegions as distancesAndRegionsDB } from 'src/library/DB/distancesAndRegionsData';
import { retreatVideoCodes as retreatVideoCodesDB } from 'src/library/DB/retreatVideoCodes';

import { getDistanceOfInfrastructureNameByDistanceNumber, getFullRetreatNameByCode } from 'src/library/helpers/DB';
import { defineFullMeterByPicketAndShortMeterWithNulls } from 'src/library/helpers/numbers';

import { IData, IRetreat } from 'src/state/redux/features/video/actionCreators';

export type TForXLSXAoA = (string | number)[][];

export interface IReturnedObj {
  forXLSXAoA: TForXLSXAoA;
}

export const VSPretreats = (data: IData, retreats: IRetreat[]): IReturnedObj => {
  // возвращаемый объект, тут будет 1 массив и 1 объект:
  // 1 массив - массив массивов для формирования книги excel с помощью библиотеки XLSX;
  // 2 объект - объект для отрисовки таблицы на странице в браузере, состоит из 2 свойств:
  // 1 свойство - массив из элемнтов для создания header`а таблицы,
  // 2 свойство массив массивов с данными для создания тела таблицы.

  // массив массивов для формирования книги excel с помощью библиотеки XLSX;
  let forXLSXAoA: TForXLSXAoA = [[]];

  /* ---------- Первая строчка отчета ----------------- */
  const firstRow: (string | number)[] = [
    '№ п.п.',
    'Номер вагона',
    'Дата проезда',
    'Дата расшифровки',
    'Перегон',
    'путь',
    'ПЧ, ИЧ',
    'км',
    'ПК/м',
    'Нить',
    'Замечание',
    '№ предупреждения',
    'Ограничение скорости',
  ];

  /* Шапка таблицы */
  forXLSXAoA.push(firstRow);
  /* ---------- / Первая строчка отчета --------------- */

  /* ---------- Вторая строчка отчета ----------------- */
  let secondRow: (string | number)[] = [];
  let orderNumber: number = 0;

  retreats.forEach((retreat) => {
    ++orderNumber;
    /* Если это ИЧ вернет ИЧ, если нет вернет назад переданный номер ПЧ */
    const distanceNumber = getDistanceOfInfrastructureNameByDistanceNumber(
      distancesAndRegionsDB,
      retreat.distanceNumber
    );
    let retreatName = getFullRetreatNameByCode(retreatVideoCodesDB, retreat.retreatCode);
    if (retreat.retreatSize) {
      retreatName = retreatName + ', ' + retreat.retreatSize;
    }
    const fullMeter = defineFullMeterByPicketAndShortMeterWithNulls(retreat.picket, retreat.meter);
    secondRow.push(orderNumber);
    secondRow.push(data.diagnosticToolNumber ?? '');
    secondRow.push(data.checkDate ?? '');
    secondRow.push(data.decryptionDate ?? '');
    secondRow.push(retreat.stationOrLine);
    secondRow.push(retreat.trackNumber);
    secondRow.push(distanceNumber);
    secondRow.push(retreat.kilometer);
    secondRow.push(retreat.picket + '/' + fullMeter);
    secondRow.push(retreat.thread);
    secondRow.push(retreatName);
    secondRow.push(retreat.warningNumber ?? '');
    secondRow.push(retreat.limitSpeed ?? '');

    forXLSXAoA.push(secondRow);
    secondRow = [];
  });

  /* ---------- / Вторая строчка отчета --------------- */

  return {
    forXLSXAoA,
  };
};
