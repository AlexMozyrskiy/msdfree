/**
 * Заменяет matchAll но для всех браузеров. ОБЯЗАТЕЛЬНО regexp передаваемый сюда должен содержать флаг g
 *
 * @param {string} str
 * @param {RegExp} regexp - ОБЯЗАТЕЛЬНО regexp передаваемый сюда должен содержать флаг g
 * @returns {RegExpExecArray[]}
 */
export function myMatchAll(str: string, regexp: RegExp) {
  let result: RegExpExecArray[] = [];

  let currentResult = null;

  while ((currentResult = regexp.exec(str))) {
    result = [...result, currentResult];
  }

  return result;
}
