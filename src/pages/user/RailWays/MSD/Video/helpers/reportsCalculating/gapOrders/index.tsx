import { distancesAndRegions as distancesAndRegionsDB } from 'src/library/DB/distancesAndRegionsData';
import { directions as directionsDB } from 'src/library/DB/directions';
import { retreatVideoCodes as retreatVideoCodesDB } from 'src/library/DB/retreatVideoCodes';

import {
  getDirectionNameByCode,
  getRetreatNameByCode,
  getDistanceOfInfrastructureNameByDistanceNumber,
} from 'src/library/helpers/DB';
import { defineFullMeterByPicketAndShortMeterWithNulls } from 'src/library/helpers/numbers';

import { IData, IRetreat } from 'src/state/redux/features/video/actionCreators';

export type TForXLSXAoA = (string | number)[][];

export interface IReturnedObj {
  forXLSXAoA: TForXLSXAoA;
}

export const gapOrders = (data: IData, retreats: IRetreat[]): IReturnedObj => {
  // возвращаемый объект, тут будет 1 массив и 1 объект:
  // 1 массив - массив массивов для формирования книги excel с помощью библиотеки XLSX;
  // 2 объект - объект для отрисовки таблицы на странице в браузере, состоит из 2 свойств:
  // 1 свойство - массив из элемнтов для создания header`а таблицы,
  // 2 свойство массив массивов с данными для создания тела таблицы.

  // массив массивов для формирования книги excel с помощью библиотеки XLSX;
  let forXLSXAoA: TForXLSXAoA = [[]];

  /* ---------- Первая строчка отчета ----------------- */
  const firstRow: (string | number)[] = [
    ' №     п/п',
    'ДИ',
    '№ ПС, ДКИ, СВД',
    'Направление',
    'Перегон',
    'Рег.',
    'ПЧ',
    'Путь',
    'км',
    'пк/м',
    'Вид отступления, амплитуда/ протяженность, мм',
    'Величина, мм',
    'Устан. Скорость',
    'Радиус кривой',
    'Тип шпал',
    'звено,плеть',
    'Наличие повтора',
    'Вид проверки',
  ];

  // Шапка таблицы
  forXLSXAoA.push(firstRow);
  /* ---------- / Первая строчка отчета --------------- */

  /* ---------- Вторая строчка отчета ----------------- */
  let secondRow: (string | number)[] = [];
  // let secondRow: (string | number)[] = [];
  let orderNumber: number = 0;

  retreats.forEach((retreat) => {
    if (retreat.retreatCode === 3 || retreat.retreatCode === 4) {
      ++orderNumber;
      /* Если это ИЧ вернет ИЧ, если нет вернет назад переданный номер ПЧ */
      const distanceNumber = getDistanceOfInfrastructureNameByDistanceNumber(
        distancesAndRegionsDB,
        retreat.distanceNumber
      );
      const retreatName = getRetreatNameByCode(retreatVideoCodesDB, retreat.retreatCode);

      const fullMeter = defineFullMeterByPicketAndShortMeterWithNulls(retreat.picket, retreat.meter);

      const retreatSizeRegexp = retreat.retreatSize.match(/\d+/g);
      const retreatSize = retreatSizeRegexp ? +retreatSizeRegexp[0] : 0;

      secondRow.push(orderNumber);
      secondRow.push('СКДИ');
      secondRow.push(data.diagnosticToolNumber ?? '');
      secondRow.push(getDirectionNameByCode(directionsDB, retreat.directionCode));
      secondRow.push(retreat.stationOrLine);
      secondRow.push(retreat.regionNumber);
      secondRow.push(distanceNumber);
      secondRow.push(retreat.trackNumber);
      secondRow.push(retreat.kilometer);
      secondRow.push(retreat.picket + '/' + fullMeter);
      secondRow.push(retreatName);
      secondRow.push(retreatSize);
      secondRow.push(retreat.setSpeed);
      secondRow.push(retreat.curveRadius);
      secondRow.push(retreat.subrailBase);
      secondRow.push(retreat.trackType);
      secondRow.push(''); // тут наличие повтора
      secondRow.push(retreat.checkType);

      forXLSXAoA.push(secondRow);
      secondRow = [];
    }
  });
  /* ---------- / Вторая строчка отчета --------------- */

  forXLSXAoA.push(['']);

  /* ---------- Третья строчка отчета ----------------- */
  let thirdRow: (string | number)[] = [];

  thirdRow.push('');
  thirdRow.push('');
  thirdRow.push('');
  thirdRow.push('Выдано предписаний -');
  thirdRow.push(orderNumber);

  forXLSXAoA.push(thirdRow);
  thirdRow = [];

  /* ---------- / Третья строчка отчета --------------- */

  forXLSXAoA.push(['']);

  /* ---------- Четвертая строчка отчета ----------------- */
  let fourthRow: (string | number)[] = [];
  let count2526: number = 0;
  let count2730: number = 0;
  let count3135: number = 0;

  retreats.forEach((retreat) => {
    if (retreat.retreatCode === 3 || retreat.retreatCode === 4) {
      const sizeReg = retreat.retreatSize.match(/\d+/g); // найдем число
      const size = sizeReg ? +sizeReg[0] : 0;
      if (size >= 25 && size <= 26) {
        count2526++;
      } else if (size >= 27 && size <= 30) {
        count2730++;
      } else if (size >= 31 && size <= 35) {
        count3135++;
      }
    }
  });

  fourthRow.push('');
  fourthRow.push('');
  fourthRow.push('');
  fourthRow.push('Величина зазора');
  fourthRow.push('Кол-во, за сутки');

  forXLSXAoA.push(fourthRow);
  fourthRow = [];

  fourthRow.push('');
  fourthRow.push('');
  fourthRow.push('');
  fourthRow.push('25-26');
  fourthRow.push(count2526);

  forXLSXAoA.push(fourthRow);
  fourthRow = [];

  fourthRow.push('');
  fourthRow.push('');
  fourthRow.push('');
  fourthRow.push('27-30');
  fourthRow.push(count2730);

  forXLSXAoA.push(fourthRow);
  fourthRow = [];

  fourthRow.push('');
  fourthRow.push('');
  fourthRow.push('');
  fourthRow.push('31-35');
  fourthRow.push(count3135);

  forXLSXAoA.push(fourthRow);
  fourthRow = [];
  /* ---------- / Четвертая строчка отчета --------------- */

  return {
    forXLSXAoA,
  };
};
