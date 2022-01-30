/* Функция принимает метр и определяет на каком он пикете */

/**
 *
 * @param {number} meter - метр
 * @returns
 */
export function definePicketByMeter(meter: number) {
  let pk; // пикет, будем возвращать из функции

  if (!Number.isFinite(meter)) {
    // если передано не число
    meter = +meter; // приведем его к числу
  }

  if (Number.isNaN(meter)) {
    // если передано (или после первого приведения к числу) NaN
    alert('в функцию определяющую пикет по метру передано не число'); // сообщение об ошибке
  }

  const meterStr = String(meter);

  if (meterStr.length === 1 || meterStr.length === 2) {
    // если количество цифр в метре 1 или 2, то пикет будет 1
    pk = 1;
  } else if (meterStr.length === 3) {
    // если количество цифр в метре равно три, например 321
    const meterFirstNumberStr = meterStr.substr(0, 1); // получим первую цифру
    const meterFirstNumberNum = Number(meterFirstNumberStr); // приведем ее к числу
    pk = meterFirstNumberNum + 1; // прибавим 1 чтобы получит пикет
  } else if (meterStr.length > 3) {
    // если количество цифр в метре более трех, например 1022
    const meterFirstNumberStr = meterStr.substr(0, 2); // получим первые 2 цифры
    const meterFirstNumberNum = Number(meterFirstNumberStr); // приведем их к числу
    pk = meterFirstNumberNum + 1; // прибавим 1 чтобы получит пикет
  }

  return pk;
}

/**
 * Определим полный метр по пикету и короткому метру. Без нулей в начале, то есть есть 1 ПК 1 метр вернет 1
 * Напрример 8 пикет 32 метр. Функция вернет 932 метр
 *
 * @param pk
 * @param meter
 * @returns
 */
export function defineFullMeterByPicketAndShortMeterWithoutNulls(pk: number, meter: number): string {
  let fullMeter = ''; // полный метр, будем возвращать из функции

  if (pk === 1) {
    fullMeter = `${meter}`;
  } else if (pk > 1) {
    if (meter < 10) {
      fullMeter = `${pk - 1}0${meter}`;
    } else {
      fullMeter = `${pk - 1}${meter}`;
    }
  }

  return fullMeter;
}

/**
 * Определим полный метр по пикету и короткому метру. С нулями в начале, то есть есть 1 ПК 1 метр вернет 001
 * Напрример 8 пикет 32 метр. Функция вернет 932 метр
 *
 * @param pk
 * @param meter
 * @returns
 */
export function defineFullMeterByPicketAndShortMeterWithNulls(pk: number, meter: number): string {
  let fullMeter = ''; // полный метр, будем возвращать из функции

  if (meter < 10) {
    fullMeter = `${pk - 1}0${meter}`;
  } else {
    fullMeter = `${pk - 1}${meter}`;
  }

  return fullMeter;
}

/**
 * Возвращает массив уникальных значений из принятого массива
 *
 * @param {any[]} arr - массив
 * @returns {any[]}
 */
export function getUniqueValuesFromArr(arr: any[]) {
  // принимает массив, возвращает массив уникальных значений
  let result: any[] = [];

  arr.forEach((element) => {
    // для каждого элемента массива
    if (!result.includes(element)) {
      // и в массиве уникальных значений еще нет такого значения
      result.push(element); // запушим его туда
    }
  });

  return result;
}

/**
 * Заменяет запятые на точки. дробное число с запятой преобразует в число с точкой
 *
 * @param value
 * @returns
 */
export const dotInsteadComma = (value: number | string): string => {
  value = String(value);

  const splitedValue = value.split(',');

  return splitedValue.join('.');
};

/**
 * Заменяет запятые на точки. дробное число с запятой преобразует в число с точкой
 *
 * @param value
 * @returns
 */
export const commaInsteadDot = (value: number | string): string => {
  value = String(value);

  const splitedValue = value.split('.');

  return splitedValue.join(',');
};

/**
 * Ищет в строке число (в том числе отрицательное)
 *
 * @param {string} value
 * @returns {number}
 */
export const getNumberFromString = (value: string = '') => {
  /* Если значение отрицательное обеспечим попадание минуса и в отчет */
  let retreatSize: string;

  const retreatSizeRegexp = value.match(/\d+/);

  if (retreatSizeRegexp?.index === 0) {
    retreatSize = retreatSizeRegexp ? retreatSizeRegexp[0] : '0';
  } else {
    const retreatSizeSplited = value.split('');
    if (
      retreatSizeRegexp !== undefined &&
      retreatSizeRegexp !== null &&
      retreatSizeSplited[Number(retreatSizeRegexp.index) - 1] === '-'
    ) {
      retreatSize = retreatSizeRegexp ? `-${retreatSizeRegexp[0]}` : '0';
    } else {
      retreatSize = retreatSizeRegexp ? retreatSizeRegexp[0] : '0';
    }
  }

  return Number(retreatSize);
};

/* Функция возвращает величину Nуч */

export function calculateMagnitudeN(otl: number, xor: number, ud: number, neUd: number) {
  function sum() {
    return otl + xor + ud + neUd;
  }

  if (sum() === 0) {
    // если пришли нулевые значения километров вернем оценку 0, чтобы не делить на 0 потом
    return 0;
  }

  const specSum = +(5 * otl + 4 * xor + 3 * ud - 5 * neUd).toFixed(3);
  const kilometersSum = +sum().toFixed(3);
  const result = (specSum / kilometersSum).toFixed(1);
  return +result;
}

/**
 *  Если значение число вернем значение, если нет вернем 0
 *
 * @param value any
 * @returns
 */
export const anyToNumber = (value: any): number => {
  if (isNaN(value)) return 0;

  return value;
};
