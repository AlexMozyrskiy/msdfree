import { myMatchAll } from '../regexp';

class Validate {
  isEmpty(value: string | number): boolean {
    if (!value) {
      return true;
    }

    return false;
  }

  isEmail(value: string): boolean {
    const dogInclude = value.includes('@');
    const dotInclude = value.includes('.');

    if (!dogInclude || !dotInclude) {
      return false;
    }

    return true;
  }

  isFieldsEqual(value1: string | number, value2: string | number) {
    if (value1 === value2) {
      return true;
    } else {
      return false;
    }
  }

  test(value: string) {
    const regexp = /[^A-Z^a-z^0-9^\S^!@#$%^&*]/;

    return regexp.test(value);
  }

  isLatinLetters(value: string) {
    let regexp = /[\p{L}]/gu; // ищем все буквы на любых языках

    const result = myMatchAll(value, regexp);

    regexp = /[^A-Za-z]/;

    let isTrue: boolean = true;

    result.forEach((item) => {
      const test = regexp.test(item[0]);

      if (test) {
        isTrue = false;
      }
    });

    return isTrue;
  }

  minLength(str: string, value: number) {
    if (str.length < value) {
      return false;
    } else {
      return true;
    }
  }

  isCapitalLetterExist(str: string) {
    let regexp = /[A-Z]/;

    const exist = regexp.test(str);

    if (exist) {
      return true;
    } else {
      return false;
    }
  }

  isSmallLetterExist(str: string) {
    let regexp = /[a-z]/;

    const exist = regexp.test(str);

    if (exist) {
      return true;
    } else {
      return false;
    }
  }

  isNumberExist(str: string) {
    let regexp = /\d/;

    const exist = regexp.test(str);

    if (exist) {
      return true;
    } else {
      return false;
    }
  }
}

export default Validate;
