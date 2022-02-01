import { calculateMagnitudeN } from "src/library/helpers/numbers";
import { IRetreat, IKilometer, ICargo } from "src/state/redux/features/RCDMRostov/FreightTension/actionCreators";

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
export const freightTension = (retreats: IRetreat[], kilometers: IKilometer[], cargos: ICargo[]): IReturnedObj => {
  // возвращаемый объект, тут будет 1 массив и 1 объект:
  // 1 массив - массив массивов для формирования книги excel с помощью библиотеки XLSX;
  // 2 объект - объект для отрисовки таблицы на странице в браузере, состоит из 2 свойств:
  // 1 свойство - массив из элемнтов для создания header`а таблицы,
  // 2 свойство массив массивов с данными для создания тела таблицы.

  // массив массивов для формирования книги excel с помощью библиотеки XLSX;
  let forXLSXAoA: TForXLSXAoA = [[]];

  let calculatingData = [
    {
      distanceNumber: 1,
      distanceName: "ПЧ-1 Шахтинская",
      freight1Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight2Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight3Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
    },
    {
      distanceNumber: 2,
      distanceName: "ИЧ-2 Таганрогская",
      freight1Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight2Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight3Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
    },
    {
      distanceNumber: 3,
      distanceName: "ПЧ-3 Ростовская",
      freight1Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight2Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight3Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
    },
    {
      distanceNumber: 4,
      distanceName: "ПЧ-4 Батайская",
      freight1Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight2Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight3Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
    },
    {
      distanceNumber: 26,
      distanceName: "ПЧ-26 Сальская",
      freight1Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight2Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight3Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
    },
    {
      distanceNumber: 27,
      distanceName: "ПЧ-27 Куберлеевская",
      freight1Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight2Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight3Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
    },
    {
      distanceNumber: 33,
      distanceName: "ПЧ-33 Лиховская ",
      freight1Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight2Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight3Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
    },
    {
      distanceNumber: 35,
      distanceName: "ПЧ-35 Миллеровская",
      freight1Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight2Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight3Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
    },
    {
      distanceNumber: 6,
      distanceName: "ПЧ-6 Тихорецкая",
      freight1Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight2Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight3Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
    },
    {
      distanceNumber: 7,
      distanceName: "ПЧ-7 Кавказская",
      freight1Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight2Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight3Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
    },
    {
      distanceNumber: 21,
      distanceName: "ПЧ-21 Краснодарская",
      freight1Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight2Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight3Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
    },
    {
      distanceNumber: 22,
      distanceName: "ПЧ-22 Новороссийская",
      freight1Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight2Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight3Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
    },
    {
      distanceNumber: 23,
      distanceName: "ПЧ-23 Старотитаровская",
      freight1Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight2Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight3Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
    },
    {
      distanceNumber: 24,
      distanceName: "ПЧ-24 Тимашевская",
      freight1Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight2Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight3Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
    },
    {
      distanceNumber: 10,
      distanceName: "ПЧ-10 Минераловодская",
      freight1Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight2Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight3Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
    },
    {
      distanceNumber: 12,
      distanceName: "ПЧ-12 Прохладненская",
      freight1Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight2Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight3Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
    },
    {
      distanceNumber: 28,
      distanceName: "ИЧ-3 Ставропольская",
      freight1Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight2Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight3Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
    },
    {
      distanceNumber: 16,
      distanceName: "ПЧ-16 Махачкалинская",
      freight1Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight2Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight3Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
    },
    {
      distanceNumber: 30,
      distanceName: "ПЧ-30 Кизлярская",
      freight1Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight2Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight3Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
    },
    {
      distanceNumber: 15,
      distanceName: "ПЧ-15 Гудермесская",
      freight1Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight2Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight3Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
    },
    {
      distanceNumber: 8,
      distanceName: "ПЧ-8 Армавирская",
      freight1Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight2Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight3Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
    },
    {
      distanceNumber: 18,
      distanceName: "ПЧ-18 Белореченская",
      freight1Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight2Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight3Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
    },
    {
      distanceNumber: 19,
      distanceName: "ПЧ-19 Туапсинская",
      freight1Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight2Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight3Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
    },
    {
      distanceNumber: 20,
      distanceName: "ИЧ-1 Сочинская",
      freight1Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight2Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight3Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
    },
    {
      distanceNumber: 32,
      distanceName: "ПЧ-32 Горячеключевская",
      freight1Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight2Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
      freight3Degree: {
        length: 0,
        score: 0,
        otlKm: 0,
        xorKm: 0,
        udKm: 0,
        neudKm: 0,
        retreat4Degree: 0,
        retreat3Degree: 0,
      },
    },
  ];

  /* Потом для кирилла надо сделать не попавшие никуда килдометры */
  // let undefinedKilometers: IRetreat[] = [];

  /* Вычислим и сформируем данные из листа Отступления */
  retreats.forEach((retreat) => {
    /* отфильтруем информацию из листа Грузо с текущим ПЧ */
    const distanceData = cargos.filter((item) => item.distanceNumber === retreat.distanceNumber);

    /* отфильтруем информацию из листа Грузо с текущим ПЧ и текущим направлением */
    const directionData = distanceData.filter((item) => item.directionCode === retreat.directionCode);

    /* отфильтруем информацию из листа Грузо с текущим ПЧ, текущим направлением. Найдем строчку куда попадает неисправность по километру */
    const kilometersData = directionData.filter((item) => {
      return retreat.trackNumber === item.trackNumber && retreat.kilometer >= item.startKm && retreat.kilometer <= item.endKm;
    });

    /*
      Степень грузонапряжонности для неисправности. Если километр не попал ни
      в один интервал километров из листа Грузо тогда он буде относиться к грузонапряженности первой степени
    */
    const cargoDegree = kilometersData[0]?.cargoDegree ?? 1;

    /* Потом для кирилла надо сделать не попавшие никуда километры */
    // if (kilometersData[0] === undefined) undefinedKilometers.push(retreat);

    calculatingData = calculatingData.map((item) => {
      return {
        distanceNumber: item.distanceNumber,
        distanceName: item.distanceName,
        freight1Degree: {
          length: item.freight1Degree.length,
          score: item.freight1Degree.score,
          otlKm: item.freight1Degree.otlKm,
          xorKm: item.freight1Degree.xorKm,
          udKm: item.freight1Degree.udKm,
          neudKm: item.freight1Degree.neudKm,
          retreat4Degree: cargoDegree === 1 && retreat.retreatDegree === 4 && retreat.distanceNumber === item.distanceNumber ? item.freight1Degree.retreat4Degree + retreat.retreatCount : item.freight1Degree.retreat4Degree,
          retreat3Degree: cargoDegree === 1 && retreat.retreatDegree === 3 && retreat.distanceNumber === item.distanceNumber ? item.freight1Degree.retreat3Degree + retreat.retreatCount : item.freight1Degree.retreat3Degree,
        },
        freight2Degree: {
          length: item.freight2Degree.length,
          score: item.freight2Degree.score,
          otlKm: item.freight2Degree.otlKm,
          xorKm: item.freight2Degree.xorKm,
          udKm: item.freight2Degree.udKm,
          neudKm: item.freight2Degree.neudKm,
          retreat4Degree: cargoDegree === 2 && retreat.retreatDegree === 4 && retreat.distanceNumber === item.distanceNumber ? item.freight2Degree.retreat4Degree + retreat.retreatCount : item.freight2Degree.retreat4Degree,
          retreat3Degree: cargoDegree === 2 && retreat.retreatDegree === 3 && retreat.distanceNumber === item.distanceNumber ? item.freight2Degree.retreat3Degree + retreat.retreatCount : item.freight2Degree.retreat3Degree,
        },
        freight3Degree: {
          length: item.freight3Degree.length,
          score: item.freight3Degree.score,
          otlKm: item.freight3Degree.otlKm,
          xorKm: item.freight3Degree.xorKm,
          udKm: item.freight3Degree.udKm,
          neudKm: item.freight3Degree.neudKm,
          retreat4Degree: cargoDegree === 3 && retreat.retreatDegree === 4 && retreat.distanceNumber === item.distanceNumber ? item.freight3Degree.retreat4Degree + retreat.retreatCount : item.freight3Degree.retreat4Degree,
          retreat3Degree: cargoDegree === 3 && retreat.retreatDegree === 3 && retreat.distanceNumber === item.distanceNumber ? item.freight3Degree.retreat3Degree + retreat.retreatCount : item.freight3Degree.retreat3Degree,
        },
      };
    });
  });

  kilometers.forEach((kilometer) => {
    /* отфильтруем информацию из листа Грузо с текущим ПЧ */
    const distanceData = cargos.filter((item) => item.distanceNumber === kilometer.distanceNumber);

    /* отфильтруем информацию из листа Грузо с текущим ПЧ и текущим направлением */
    const directionData = distanceData.filter((item) => item.directionCode === kilometer.directionCode);

    /* отфильтруем информацию из листа Грузо с текущим ПЧ, текущим направлением. Найдем строчку куда попадает неисправность по километру */
    const kilometersData = directionData.filter((item) => {
      return kilometer.trackNumber === item.trackNumber && kilometer.kilometer >= item.startKm && kilometer.kilometer <= item.endKm;
    });

    /*
      Степень грузонапряжонности для неисправности. Если километр не попал ни
      в один интервал километров из листа Грузо тогда он буде относиться к грузонапряженности первой степени
    */
    const cargoDegree = kilometersData[0]?.cargoDegree ?? 1;

    calculatingData = calculatingData.map((item) => {
      return {
        distanceNumber: item.distanceNumber,
        distanceName: item.distanceName,
        freight1Degree: {
          length: cargoDegree === 1 && kilometer.distanceNumber === item.distanceNumber ? +(item.freight1Degree.length + kilometer.checked).toFixed(3) : item.freight1Degree.length,
          score: item.freight1Degree.score,
          otlKm: cargoDegree === 1 && kilometer.distanceNumber === item.distanceNumber && kilometer.grade === 5 ? +(item.freight1Degree.otlKm + kilometer.checked).toFixed(3) : item.freight1Degree.otlKm,
          xorKm: cargoDegree === 1 && kilometer.distanceNumber === item.distanceNumber && kilometer.grade === 4 ? +(item.freight1Degree.xorKm + kilometer.checked).toFixed(3) : item.freight1Degree.xorKm,
          udKm: cargoDegree === 1 && kilometer.distanceNumber === item.distanceNumber && kilometer.grade === 3 ? +(item.freight1Degree.udKm + kilometer.checked).toFixed(3) : item.freight1Degree.udKm,
          neudKm: cargoDegree === 1 && kilometer.distanceNumber === item.distanceNumber && kilometer.grade === 2 ? +(item.freight1Degree.neudKm + kilometer.checked).toFixed(3) : item.freight1Degree.neudKm,
          retreat4Degree: item.freight1Degree.retreat4Degree,
          retreat3Degree: item.freight1Degree.retreat3Degree,
        },
        freight2Degree: {
          length: cargoDegree === 2 && kilometer.distanceNumber === item.distanceNumber ? +(item.freight2Degree.length + kilometer.checked).toFixed(3) : item.freight2Degree.length,
          score: item.freight2Degree.score,
          otlKm: cargoDegree === 2 && kilometer.distanceNumber === item.distanceNumber && kilometer.grade === 5 ? +(item.freight2Degree.otlKm + kilometer.checked).toFixed(3) : item.freight2Degree.otlKm,
          xorKm: cargoDegree === 2 && kilometer.distanceNumber === item.distanceNumber && kilometer.grade === 4 ? +(item.freight2Degree.xorKm + kilometer.checked).toFixed(3) : item.freight2Degree.xorKm,
          udKm: cargoDegree === 2 && kilometer.distanceNumber === item.distanceNumber && kilometer.grade === 3 ? +(item.freight2Degree.udKm + kilometer.checked).toFixed(3) : item.freight2Degree.udKm,
          neudKm: cargoDegree === 2 && kilometer.distanceNumber === item.distanceNumber && kilometer.grade === 2 ? +(item.freight2Degree.neudKm + kilometer.checked).toFixed(3) : item.freight2Degree.neudKm,
          retreat4Degree: item.freight2Degree.retreat4Degree,
          retreat3Degree: item.freight2Degree.retreat3Degree,
        },
        freight3Degree: {
          length: cargoDegree === 3 && kilometer.distanceNumber === item.distanceNumber ? +(item.freight3Degree.length + kilometer.checked).toFixed(3) : item.freight3Degree.length,
          score: item.freight3Degree.score,
          otlKm: cargoDegree === 3 && kilometer.distanceNumber === item.distanceNumber && kilometer.grade === 5 ? +(item.freight3Degree.otlKm + kilometer.checked).toFixed(3) : item.freight3Degree.otlKm,
          xorKm: cargoDegree === 3 && kilometer.distanceNumber === item.distanceNumber && kilometer.grade === 4 ? +(item.freight3Degree.xorKm + kilometer.checked).toFixed(3) : item.freight3Degree.xorKm,
          udKm: cargoDegree === 3 && kilometer.distanceNumber === item.distanceNumber && kilometer.grade === 3 ? +(item.freight3Degree.udKm + kilometer.checked).toFixed(3) : item.freight3Degree.udKm,
          neudKm: cargoDegree === 3 && kilometer.distanceNumber === item.distanceNumber && kilometer.grade === 2 ? +(item.freight3Degree.neudKm + kilometer.checked).toFixed(3) : item.freight3Degree.neudKm,
          retreat4Degree: item.freight3Degree.retreat4Degree,
          retreat3Degree: item.freight3Degree.retreat3Degree,
        },
      };
    });
  });

  /* Посчитаем теперь балл */
  calculatingData = calculatingData.map((item) => {
    const freight1DegreeMagnitudeN = calculateMagnitudeN(item.freight1Degree.otlKm, item.freight1Degree.xorKm, item.freight1Degree.udKm, item.freight1Degree.neudKm);

    const freight2DegreeMagnitudeN = calculateMagnitudeN(item.freight2Degree.otlKm, item.freight2Degree.xorKm, item.freight2Degree.udKm, item.freight2Degree.neudKm);

    const freight3DegreeMagnitudeN = calculateMagnitudeN(item.freight3Degree.otlKm, item.freight3Degree.xorKm, item.freight3Degree.udKm, item.freight3Degree.neudKm);
    return {
      distanceNumber: item.distanceNumber,
      distanceName: item.distanceName,
      freight1Degree: {
        length: item.freight1Degree.length,
        score: freight1DegreeMagnitudeN,
        otlKm: item.freight1Degree.otlKm,
        xorKm: item.freight1Degree.xorKm,
        udKm: item.freight1Degree.udKm,
        neudKm: item.freight1Degree.neudKm,
        retreat4Degree: item.freight1Degree.retreat4Degree,
        retreat3Degree: item.freight1Degree.retreat3Degree,
      },
      freight2Degree: {
        length: item.freight2Degree.length,
        score: freight2DegreeMagnitudeN,
        otlKm: item.freight2Degree.otlKm,
        xorKm: item.freight2Degree.xorKm,
        udKm: item.freight2Degree.udKm,
        neudKm: item.freight2Degree.neudKm,
        retreat4Degree: item.freight2Degree.retreat4Degree,
        retreat3Degree: item.freight2Degree.retreat3Degree,
      },
      freight3Degree: {
        length: item.freight3Degree.length,
        score: freight3DegreeMagnitudeN,
        otlKm: item.freight3Degree.otlKm,
        xorKm: item.freight3Degree.xorKm,
        udKm: item.freight3Degree.udKm,
        neudKm: item.freight3Degree.neudKm,
        retreat4Degree: item.freight3Degree.retreat4Degree,
        retreat3Degree: item.freight3Degree.retreat3Degree,
      },
    };
  });

  console.log(calculatingData);
  const totalOtlKm1degree = calculatingData.reduce((prev, item) => {
    return prev + item.freight1Degree.otlKm;
  }, 0);
  const totalOtlKm2degree = calculatingData.reduce((prev, item) => {
    return prev + item.freight2Degree.otlKm;
  }, 0);
  const totalOtlKm3degree = calculatingData.reduce((prev, item) => {
    return prev + item.freight3Degree.otlKm;
  }, 0);
  const totalXorKm1degree = calculatingData.reduce((prev, item) => {
    return prev + item.freight1Degree.xorKm;
  }, 0);
  const totalXorKm2degree = calculatingData.reduce((prev, item) => {
    return prev + item.freight2Degree.xorKm;
  }, 0);
  const totalXorKm3degree = calculatingData.reduce((prev, item) => {
    return prev + item.freight3Degree.xorKm;
  }, 0);
  const totalUdKm1degree = calculatingData.reduce((prev, item) => {
    return prev + item.freight1Degree.udKm;
  }, 0);
  const totalUdKm2degree = calculatingData.reduce((prev, item) => {
    return prev + item.freight2Degree.udKm;
  }, 0);
  const totalUdKm3degree = calculatingData.reduce((prev, item) => {
    return prev + item.freight3Degree.udKm;
  }, 0);
  const totalNeudKm1degree = calculatingData.reduce((prev, item) => {
    return prev + item.freight1Degree.neudKm;
  }, 0);
  const totalNeudKm2degree = calculatingData.reduce((prev, item) => {
    return prev + item.freight2Degree.neudKm;
  }, 0);
  const totalNeudKm3degree = calculatingData.reduce((prev, item) => {
    return prev + item.freight3Degree.neudKm;
  }, 0);

  const totalOtlKm = totalOtlKm1degree + totalOtlKm2degree + totalOtlKm3degree;
  const totalXorKm = totalXorKm1degree + totalXorKm2degree + totalXorKm3degree;
  const totalUdKm = totalUdKm1degree + totalUdKm2degree + totalUdKm3degree;
  const totalNeudKm = totalNeudKm1degree + totalNeudKm2degree + totalNeudKm3degree;

  const magN1Degree = calculateMagnitudeN(totalOtlKm1degree, totalXorKm1degree, totalUdKm1degree, totalNeudKm1degree);
  const magN2Degree = calculateMagnitudeN(totalOtlKm2degree, totalXorKm2degree, totalUdKm2degree, totalNeudKm2degree);
  const magN3Degree = calculateMagnitudeN(totalOtlKm3degree, totalXorKm3degree, totalUdKm3degree, totalNeudKm3degree);
  const magNTotal = calculateMagnitudeN(totalOtlKm, totalXorKm, totalUdKm, totalNeudKm);

  /* Формируем forXLSXAoA */
  forXLSXAoA = calculatingData.map((item) => {
    let returnedArr: (string | number)[] = [];
    returnedArr.push(
      item.distanceName,
      item.freight1Degree.length,
      item.freight1Degree.score,
      item.freight1Degree.neudKm,
      "",
      item.freight1Degree.retreat4Degree,
      "",
      item.freight1Degree.retreat3Degree,
      "",
      item.freight2Degree.length,
      item.freight2Degree.score,
      item.freight2Degree.neudKm,
      "",
      item.freight2Degree.retreat4Degree,
      "",
      item.freight2Degree.retreat3Degree,
      "",
      item.freight3Degree.length,
      item.freight3Degree.score,
      item.freight3Degree.neudKm,
      "",
      item.freight3Degree.retreat4Degree,
      "",
      item.freight3Degree.retreat3Degree,
      ""
    );

    return returnedArr;
  });

  forXLSXAoA.push(["ИТОГО", "", magN1Degree, "", "", "", "", "", "", "", magN2Degree, "", "", "", "", "", "", "", magN3Degree, "", "", "", "", "", "", "", magNTotal]);

  return {
    forXLSXAoA,
  };
};
