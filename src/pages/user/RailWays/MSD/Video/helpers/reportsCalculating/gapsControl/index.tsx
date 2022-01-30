import { IRetreat, ICumulativeGap } from 'src/state/redux/features/video/actionCreators';

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
export const gapsControl = (retreats: IRetreat[], cumulativeGaps: ICumulativeGap[]): IReturnedObj => {
  // возвращаемый объект, тут будет 1 массив и 1 объект:
  // 1 массив - массив массивов для формирования книги excel с помощью библиотеки XLSX;
  // 2 объект - объект для отрисовки таблицы на странице в браузере, состоит из 2 свойств:
  // 1 свойство - массив из элемнтов для создания header`а таблицы,
  // 2 свойство массив массивов с данными для создания тела таблицы.

  // массив массивов для формирования книги excel с помощью библиотеки XLSX;
  let forXLSXAoA: TForXLSXAoA = [[]];

  /* ---------- Первая строчка отчета ----------------- */
  const firstRow: (string | number)[] = [
    'ДИ',
    'Всего выявлено, За сутки',
    'более 35 мм, шт.',
    '31-35 мм, шт.',
    '27-30 мм, шт.',
    '25-26 мм, шт.',
    'всего повторов',
    'более 35 мм, шт.',
    '31-35 мм, шт.',
    'Выявлено, Нарастающий',
    'Средне-суточно, шт.',
    'более 35 мм, шт.',
    '31-35 мм, шт.',
    '27-30 мм, шт.',
    '25-26 мм, шт.',
    'Выявлено повторов, шт.',
  ];

  /* Шапка таблицы */
  forXLSXAoA.push(firstRow);
  /* ---------- / Первая строчка отчета --------------- */

  /* ---------- Вторая строчка отчета ----------------- */
  let secondRow: (string | number)[] = [];

  /* за день */
  let gapMoreThen35: number = 0;
  let gap3135: number = 0;
  let gap2730: number = 0;
  let gap2526: number = 0;
  let gapsCount: number = 0;

  /* за месяц */

  cumulativeGaps.forEach((cumulativeGap) => {
    secondRow.push(cumulativeGap.distanceName);

    retreats.forEach((retreat) => {
      if (cumulativeGap.distanceNumber === retreat.distanceNumber) {
        if (
          retreat.retreatCode === 1 ||
          retreat.retreatCode === 2 ||
          retreat.retreatCode === 3 ||
          retreat.retreatCode === 4
        ) {
          gapsCount++; // за день

          const retreatSizeArr = retreat.retreatSize.match(/\d+/g);
          const retreatSize = retreatSizeArr ? +retreatSizeArr[0] : 0;

          if (retreatSize > 35) {
            gapMoreThen35++;
          } else if (retreatSize >= 31 && retreatSize <= 35) {
            gap3135++;
          } else if (retreatSize >= 27 && retreatSize <= 30) {
            gap2730++;
          } else if (retreatSize >= 25 && retreatSize <= 26) {
            gap2526++;
          }
        }
      }
    });

    const cumulativeGapsCount = cumulativeGap.gapsCount ?? 0;
    const newCumulativeGapsCount = cumulativeGapsCount + gapsCount;

    const cumulativeGapsMoreThen35 = cumulativeGap.gapThenOf35 ?? 0;
    const newCumulativeGapsMoreThen35 = cumulativeGapsMoreThen35 + gapMoreThen35;

    const cumulativeGaps3135 = cumulativeGap.gap3135 ?? 0;
    const newCumulativeGaps3135 = cumulativeGaps3135 + gap3135;

    const cumulativeGaps2730 = cumulativeGap.gap2730 ?? 0;
    const newCumulativeGaps2730 = cumulativeGaps2730 + gap2730;

    const cumulativeGaps2526 = cumulativeGap.gap2526 ?? 0;
    const newCumulativeGaps2526 = cumulativeGaps2526 + gap2526;

    secondRow.push(gapsCount ? gapsCount : '');
    secondRow.push(gapMoreThen35 ? gapMoreThen35 : '');
    secondRow.push(gap3135 ? gap3135 : '');
    secondRow.push(gap2730 ? gap2730 : '');
    secondRow.push(gap2526 ? gap2526 : '');
    secondRow.push(''); // повторы за день
    secondRow.push(''); // повторы за день
    secondRow.push(''); // повторы за день
    secondRow.push(newCumulativeGapsCount ? newCumulativeGapsCount : '');
    secondRow.push(newCumulativeGapsCount ? newCumulativeGapsCount : '');
    secondRow.push(newCumulativeGapsMoreThen35 ? newCumulativeGapsMoreThen35 : '');
    secondRow.push(newCumulativeGaps3135 ? newCumulativeGaps3135 : '');
    secondRow.push(newCumulativeGaps2730 ? newCumulativeGaps2730 : '');
    secondRow.push(newCumulativeGaps2526 ? newCumulativeGaps2526 : '');
    secondRow.push(''); //повторы нарастающие

    gapMoreThen35 = 0;
    gap3135 = 0;
    gap2730 = 0;
    gap2526 = 0;
    gapsCount = 0;

    forXLSXAoA.push(secondRow);
    secondRow = [];
  });
  /* ---------- / Вторая строчка отчета --------------- */

  return {
    forXLSXAoA,
  };
};
