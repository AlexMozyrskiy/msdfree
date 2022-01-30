import { getDistanceOfInfrastructureNameByDistanceNumber } from 'src/library/helpers/DB';
import { defineFullMeterByPicketAndShortMeterWithNulls, getNumberFromString } from 'src/library/helpers/numbers';

import { distancesAndRegions as distancesAndRegionsDB } from 'src/library/DB/distancesAndRegionsData';

import { IRetreat, IData } from 'src/state/redux/features/video/actionCreators';

export type TForXLSXAoA = (string | number)[][];

export interface IReturnedObj {
  forXLSXAoA: TForXLSXAoA;
}

/**
 *
 * @param data
 * @param retreats
 * @param distances -  накопительные данные по зазорам за месяц
 * @returns
 */
export const movements = (data: IData, retreats: IRetreat[]): IReturnedObj => {
  // возвращаемый объект, тут будет 1 массив и 1 объект:
  // 1 массив - массив массивов для формирования книги excel с помощью библиотеки XLSX;
  // 2 объект - объект для отрисовки таблицы на странице в браузере, состоит из 2 свойств:
  // 1 свойство - массив из элемнтов для создания header`а таблицы,
  // 2 свойство массив массивов с данными для создания тела таблицы.

  // массив массивов для формирования книги excel с помощью библиотеки XLSX;
  let forXLSXAoA: TForXLSXAoA = [[]];

  /* ---------- Первая строчка отчета ----------------- */
  const firstRow: (string | number)[] = [
    '№ п/п за отчетные сутки',
    'Дата проверки',
    'Номер вагона',
    'Дата расшифровки',
    'ПЧ',
    'Перегон, Станция',
    '№ пути',
    'Км',
    'ПК',
    'подвижка левая',
    'подвижка правая',
    'нечитаемая правая',
    'нечитаемая левая',
    'Примечания',
  ];

  /* Шапка таблицы */
  forXLSXAoA.push(firstRow);
  /* ---------- / Первая строчка отчета --------------- */

  /* ---------- Вторая строчка отчета ----------------- */
  let secondRow: (string | number)[] = [];

  let orderNumber: number = 0;

  let retreatSize: number = 0;

  retreats.forEach((retreat) => {
    if (retreat.retreatCode === 19 || retreat.retreatCode === 20 || retreat.retreatCode === 21) {
      const distanceNumber = getDistanceOfInfrastructureNameByDistanceNumber(
        distancesAndRegionsDB,
        retreat.distanceNumber
      );

      const fullMeter = defineFullMeterByPicketAndShortMeterWithNulls(retreat.picket, retreat.meter);

      secondRow.push(++orderNumber);
      secondRow.push(data.checkDate ?? '');
      secondRow.push(data.diagnosticToolNumber ?? '');
      secondRow.push(data.decryptionDate ?? '');
      secondRow.push(distanceNumber);
      secondRow.push(retreat.stationOrLine);
      secondRow.push(retreat.trackNumber);
      secondRow.push(retreat.kilometer);
      secondRow.push(retreat.picket + '/' + fullMeter);

      retreatSize = getNumberFromString(retreat.retreatSize);

      if (retreat.retreatCode === 19) {
        /* Если значение отрицательное обеспечим попадание минуса и в отчет */

        retreatSize = retreat.retreatSize ? getNumberFromString(retreat.retreatSize) : 0;

        if (retreat.thread === 'левая') {
          secondRow.push(retreatSize);
          secondRow.push('');
        } else if (retreat.thread === 'правая') {
          secondRow.push('');
          secondRow.push(retreatSize);
        }

        secondRow.push('');
        secondRow.push('');
      }

      if (retreat.retreatCode === 20 || retreat.retreatCode === 21) {
        secondRow.push('');
        secondRow.push('');

        if (retreat.thread === 'левая') {
          secondRow.push('');
          secondRow.push(1);
        } else if (retreat.thread === 'правая') {
          secondRow.push(1);
          secondRow.push('');
        }
      }

      forXLSXAoA.push(secondRow);
      secondRow = [];
    }
  });

  /* ---------- / Вторая строчка отчета --------------- */

  return {
    forXLSXAoA,
  };
};
