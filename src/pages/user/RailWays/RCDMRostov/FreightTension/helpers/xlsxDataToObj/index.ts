import { definePicketByMeter, anyToNumber } from 'src/library/helpers/numbers';
import { IRetreat, IKilometer, ICargo } from 'src/state/redux/features/RCDMRostov/FreightTension/actionCreators';

export const sheetRetreatsToObj = (xlsxData: any): IRetreat[] => {
  let returnedArr: IRetreat[] = [];
  let id = 0;

  xlsxData.forEach((item: any) => {
    if (
      item['КОДНАПРВ'] < 99999 &&
      (item['?'] === 0 || item['?'] === undefined) &&
      (item['СТРЕЛКА'] === 0 || item['СТРЕЛКА'] === undefined) &&
      (item['EXCLUDE'] === 0 || item['СТРЕЛКА'] === undefined)
    ) {
      returnedArr.push({
        id: ++id,
        distanceNumber: anyToNumber(+item['ПЧ']),
        year: anyToNumber(+item['ГОД']),
        month: anyToNumber(+item['МЕСЯЦ']),
        day: anyToNumber(+item['ДЕНЬ']),
        diagnosticToolNumber: anyToNumber(+item['ПС']),
        checkType: anyToNumber(+item['ВИД']),
        directionCode: anyToNumber(+item['КОДНАПРВ']),
        trackNumber: item['ПУТЬ'],
        kilometer: anyToNumber(+item['KM']),
        picket: anyToNumber(definePicketByMeter(item['М']) ?? 0),
        meter: anyToNumber(+item['М']),
        retreatName: item['ОТСТУПЛЕНИЕ'],
        retreatDegree: anyToNumber(+item['СТЕПЕНЬ']),
        retreatAmplitude: item['АМПЛИТУДА'],
        retreatLength: item['ДЛИНА'],
        retreatScore: anyToNumber(+item['БАЛЛ'] ?? 0),
        retreatCount: anyToNumber(+item['КОЛИЧЕСТВО']),
        passLimitSpeed: item['СК_ОГР_ПАСС'] !== '-' || item['СК_ОГР_ПАСС'] !== undefined ? item['СК_ОГР_ПАСС'] : null,
        freightLimitSpeed:
          item['СК_ОГР_ГРУЗ'] !== '-' || item['СК_ОГР_ГРУЗ'] !== undefined ? item['СК_ОГР_ГРУЗ'] : null,
        passSetSpeed: item['СК_УСТ_ПАСС'] !== '-' || item['СК_УСТ_ПАСС'] !== undefined ? item['СК_УСТ_ПАСС'] : null,
        reightSetSpeed: item['СК_УСТ_ГРУЗ'] !== '-' || item['СК_УСТ_ГРУЗ'] !== undefined ? item['СК_УСТ_ГРУЗ'] : null,
        norm: anyToNumber(+item['HOPMA']),
        subgrade: anyToNumber(+item['ДЗ']),
        insulatingGap: anyToNumber(+item['ИС']),
        bridge: anyToNumber(+item['МОСТ']),
        prPredupr: anyToNumber(+item['PR_PREDUPR']),
      });
    }
  });

  return returnedArr;
};

export const sheetKilometersToObj = (xlsxData: any): IKilometer[] => {
  let returnedArr: IKilometer[] = [];
  let id = 0;

  xlsxData.forEach((item: any) => {
    if (item['КОДНАПР'] < 99999) {
      returnedArr.push({
        id: ++id,
        distanceNumber: item['ПЧ'],
        year: item['ГОД'],
        month: item['МЕСЯЦ'],
        day: item['ДЕНЬ'],
        diagnosticToolNumber: item['ПС'],
        checkType: item['ВИД'],
        directionCode: item['КОДНАПР'],
        trackNumber: item['ПУТЬ'],
        kilometer: item['KM'],
        // picket: definePicketByMeter(item['M']) ?? 0,
        // meter: item['M'],
        grade: item['ОЦЕНКА'],
        score: item['БАЛЛ'],
        checked: item['ПРОВЕРЕНО'],
        passLimitSpeed: item['СК_ОГР_ПАСС'] !== '-' ? item['СК_ОГР_ПАСС'] : null,
        freightLimitSpeed: item['СК_ОГР_ГРУЗ'] !== '-' ? item['СК_ОГР_ГРУЗ'] : null,
        passSetSpeed: item['СК_УСТ_ПАСС'] !== '-' ? item['СК_УСТ_ПАСС'] : null,
        reightSetSpeed: item['СК_УСТ_ГРУЗ'] !== '-' ? item['СК_УСТ_ГРУЗ'] : null,
      });
    }
  });

  return returnedArr;
};

export const sheetCargosToObj = (xlsxData: any): ICargo[] => {
  function getDistanceNumber(distanceStr: string) {
    const distanceSubStr = distanceStr.substr(0, 5);

    if (distanceSubStr.substr(0, 2) === 'ИЧ') {
      if (+distanceSubStr.substr(3, 1) === 1) {
        return 20;
      } else if (+distanceSubStr.substr(3, 1) === 2) {
        return 2;
      } else if (+distanceSubStr.substr(3, 1) === 3) {
        return 28;
      }
    }

    if (distanceSubStr.substr(0, 2) === 'ПЧ') {
      return +distanceSubStr.substr(3, 2);
    }

    return 0;
  }

  let returnedArr: ICargo[] = [];
  let id = 0;

  xlsxData.forEach((item: any) => {
    returnedArr.push({
      id: ++id,
      distanceNumber: getDistanceNumber(item['Предприятие']),
      directionCode: item['Направление'],
      trackNumber: item['путь'],
      cargoDegree: item['Степень грузонапряженности'],
      startKm: item['Км начала'],
      startMeter: item['Метр начала'],
      endKm: item['Км конца'],
      endMeter: item['Метр конца'],
    });
  });

  return returnedArr;
};
