import { dotInsteadComma } from 'src/library/helpers/numbers';
import { IRetreat, IData, ICheckedDistance, ICumulativeGap } from 'src/state/redux/features/video/actionCreators';

export const sheetRetreatsToObj = (xlsxData: any): IRetreat[] => {
  let returnedArr: IRetreat[] = [];

  returnedArr = xlsxData.map((item: any) => {
    /* Спарсим номер дистанции */
    let distanceNumber = null;

    if (String(item['ПЧ']).match(/ПЧ-/g)) {
      distanceNumber = item['ПЧ'].match(/\d+/g);
    } else if (String(item['ПЧ']).match(/ИЧ-/g)) {
      if (item['ПЧ'].match(/\d+/g)[0] === '2') {
        distanceNumber = ['2'];
      } else if (item['ПЧ'].match(/\d+/g)[0] === '1') {
        distanceNumber = ['20'];
      } else if (item['ПЧ'].match(/\d+/g)[0] === '3') {
        distanceNumber = ['28'];
      }
      /* Если просто вбит номер ПЧ например в ячейке стоит просто 3 */
    } else {
      distanceNumber = [`${item['ПЧ']}`];
    }

    return {
      id: item['Номер по порядку'],
      directionCode: item['Код направления'],
      stationOrLine: item['Перегон / Станция'],
      distanceNumber: +distanceNumber[0],
      trackNumber: item['Путь'],
      kilometer: item['КМ'],
      picket: item['ПК'],
      meter: item['М'],
      thread: item['Нить'],
      retreatSize: item['Величина'],
      pad: item['Накладка в стыке'],
      limitSpeed: item['Огр. скорости'],
      setSpeed: item['Уст. Скорость'],
      retreatCode: item['КОД Отступления (смотри в листе “Коды отступлений”)'],
      regionNumber: item['Рег'],
      checkType: item['Вид проверки (Рабочая, контрольная, дополнительная)'],
      curveRadius: item['Радиус кривой'],
      subrailBase: item['Подрельсовое основание дерево/бетон'],
      trackType: item['Тип пути (зв./ бп)'],
      warningNumber: item['№ предупреждения'],
    };
  });

  return returnedArr;
};

export const sheetDataToObj = (xlsxData: any): IData => {
  const data = xlsxData[0];
  let returnedObj = {
    checkDate: data['Дата проезда'],
    decryptionDate: data['Дата расшифровки'],
    inspectionArea:
      data['Участок проверки (например Кавказская – Ростов 1 главный путь, Ростов – Краснодар 2 главный путь)'],
    diagnosticToolCode: data['КОД диагностического средства (справку смотри во вкладке КОДЫ диагностических средств)'],
    diagnosticToolNumber: data['Номер диагностического средства'],
    checkedMainTracksKm: data['Проверено главных путей, км'],
    checkedSideTracksKm: data['Проверено станционных путей, км'],
    checkType: data['Вид проверки'],
  };

  return returnedObj;
};

export const sheetCumulativeGapsToObj = (
  xlsxData: any,
  cumulativeGapsFromStateTemplate: ICumulativeGap[]
): ICumulativeGap[] => {
  let returnedArr: ICumulativeGap[] = [];

  returnedArr = xlsxData.map((item: any, index: number) => {
    return {
      distanceName: cumulativeGapsFromStateTemplate[index].distanceName,
      distanceNumber: cumulativeGapsFromStateTemplate[index].distanceNumber,
      gapsCount: item['Выявлено, шт.'] ?? null,
      average: item['Средне-суточно, шт.'] ?? null,
      gapThenOf35: item['более 35 мм, шт.'] ?? null,
      gap3135: item['31-35 мм, шт.'] ?? null,
      gap2730: item['27-30 мм, шт.'] ?? null,
      gap2526: item['25-26 мм, шт.'] ?? null,
      repeat: item['Выявлено повторов, шт.'] ?? null,
    };
  });

  return returnedArr;
};

export const sheetCheckedDistances = (xlsxData: any): ICheckedDistance[] => {
  let returnedArr = [];

  returnedArr = xlsxData.map((item: any) => {
    return {
      distanceNumber: item['Перечень проверенных ПЧ '],
      kilometers: +dotInsteadComma(item['Проверено километров в каждом ПЧ (включая станционные)']),
    };
  });

  return returnedArr;
};
