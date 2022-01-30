// Название, номера дистанций, названия номера регионов по каждому ПЧ
export interface IRetreatVideoCodes {
  retreatCode: number;
  shortRetreatTitle: string;
  fullRetreatTitle: string;
}

export const retreatVideoCodes: IRetreatVideoCodes[] = [
  {
    retreatCode: 1,
    shortRetreatTitle: 'зазор правый',
    fullRetreatTitle: 'превышение конструктивной величины зазора по правой рельсовой нити',
  },
  {
    retreatCode: 2,
    shortRetreatTitle: 'зазор левый',
    fullRetreatTitle: 'превышение конструктивной величины зазора по левой рельсовой нити',
  },
  {
    retreatCode: 3,
    shortRetreatTitle: 'зазор правый',
    fullRetreatTitle: 'превышение конструктивной величины зазора по правой рельсовой нити',
  },
  {
    retreatCode: 4,
    shortRetreatTitle: 'зазор левый',
    fullRetreatTitle: 'превышение конструктивной величины зазора по левой рельсовой нити',
  },
  {
    retreatCode: 5,
    shortRetreatTitle: 'нулевой зазор',
    fullRetreatTitle: 'нулевой зазор',
  },
  {
    retreatCode: 6,
    shortRetreatTitle: 'отсутствует один стыковой болт с одной стороны рельса в четырех дырной накладке',
    fullRetreatTitle: 'отсутствует один стыковой болт с одной стороны рельса в четырех дырной накладке',
  },
  {
    retreatCode: 7,
    shortRetreatTitle: 'отсутствуют два стыковых болта с одной стороны рельса в четырех дырной накладке',
    fullRetreatTitle: 'отсутствуют два стыковых болта с одной стороны рельса в четырех дырной накладке',
  },
  {
    retreatCode: 8,
    shortRetreatTitle: 'отсутствуют по одному стыковому болту с двух сторон рельса в четырех дырной накладке',
    fullRetreatTitle: 'отсутствуют по одному стыковому болту с двух сторон рельса в четырех дырной накладке',
  },
  {
    retreatCode: 9,
    shortRetreatTitle: 'отсутствуют два стыковых болта с двух сторон рельса в четырех дырной накладке',
    fullRetreatTitle: 'отсутствуют два стыковых болта с двух сторон рельса в четырех дырной накладке',
  },
  {
    retreatCode: 10,
    shortRetreatTitle: 'отсутствует один стыковой болт с одной стороны рельса в шести дырной накладке',
    fullRetreatTitle: 'отсутствует один стыковой болт с одной стороны рельса в шести дырной накладке',
  },
  {
    retreatCode: 11,
    shortRetreatTitle: 'отсутствуют по одному стыковому болту с двух сторон рельса в шести дырной накладке',
    fullRetreatTitle: 'отсутствуют по одному стыковому болту с двух сторон рельса в шести дырной накладке',
  },
  {
    retreatCode: 12,
    shortRetreatTitle: 'отсутствуют два стыковых болта с одной стороны рельса в шести дырной накладке',
    fullRetreatTitle: 'отсутствуют два стыковых болта с одной стороны рельса в шести дырной накладке',
  },
  {
    retreatCode: 13,
    shortRetreatTitle: 'отсутствуют по два стыковых болта с каждой стороны рельса в шести дырной накладке',
    fullRetreatTitle: 'отсутствуют по два стыковых болта с каждой стороны рельса в шести дырной накладке',
  },
  {
    retreatCode: 14,
    shortRetreatTitle: 'отсутствуют три стыковых болта с одной стороны рельса в шести дырной накладке',
    fullRetreatTitle: 'отсутствуют три стыковых болта с одной стороны рельса в шести дырной накладке',
  },
  {
    retreatCode: 15,
    shortRetreatTitle: 'трещина одной стыковой накладке',
    fullRetreatTitle: 'трещина одной стыковой накладке',
  },
  {
    retreatCode: 16,
    shortRetreatTitle: 'излом одной стыковой накладки',
    fullRetreatTitle: 'излом одной стыковой накладки',
  },
  {
    retreatCode: 17,
    shortRetreatTitle: 'трещина двух стыковых накладок',
    fullRetreatTitle: 'трещина двух стыковых накладок',
  },
  {
    retreatCode: 18,
    shortRetreatTitle: 'излом двух стыковых накладок',
    fullRetreatTitle: 'излом двух стыковых накладок',
  },
  {
    retreatCode: 19,
    shortRetreatTitle: 'cмещение контрольных сечений относительно «маячных» шпал',
    fullRetreatTitle: 'смещение контрольных сечений относительно «маячных» шпал',
  },
  {
    retreatCode: 20,
    shortRetreatTitle: 'не обновлена маркировка «маячных» шпал',
    fullRetreatTitle: 'не обновлена маркировка «маячных» шпал',
  },
  {
    retreatCode: 21,
    shortRetreatTitle: 'отсутствует разметка контрольных сечений рельсовой плети',
    fullRetreatTitle: 'отсутствует разметка контрольных сечений рельсовой плети',
  },
  {
    retreatCode: 22,
    shortRetreatTitle: 'нарушения крепления маячной шпалы',
    fullRetreatTitle: 'нарушения крепления маячной шпалы',
  },
  {
    retreatCode: 23,
    shortRetreatTitle: 'выход подошвы рельса из реборд подкладок',
    fullRetreatTitle: 'выход подошвы рельса из реборд подкладок',
  },
  {
    retreatCode: 24,
    shortRetreatTitle: 'дефектные клеммы',
    fullRetreatTitle: 'дефектные клеммы',
  },
  { retreatCode: 25, shortRetreatTitle: 'отсутствуют клеммы', fullRetreatTitle: 'отсутствуют клеммы' },
  {
    retreatCode: 26,
    shortRetreatTitle: 'дефектные подкладки',
    fullRetreatTitle: 'дефектные подкладки',
  },
  {
    retreatCode: 27,
    shortRetreatTitle: 'отсутствуют подкладки',
    fullRetreatTitle: 'отсутствуют подкладки',
  },
  {
    retreatCode: 28,
    shortRetreatTitle: 'клемма под подошвой рельса',
    fullRetreatTitle: 'клемма под подошвой рельса',
  },
  {
    retreatCode: 29,
    shortRetreatTitle: 'надернутые костыли',
    fullRetreatTitle: 'надернутые костыли',
  },
  {
    retreatCode: 30,
    shortRetreatTitle: 'отсутствуют костыли',
    fullRetreatTitle: 'отсутствуют костыли',
  },
  {
    retreatCode: 31,
    shortRetreatTitle: 'наслоение подрельсовых прокладок',
    fullRetreatTitle: 'наслоение подрельсовых прокладок',
  },
  {
    retreatCode: 32,
    shortRetreatTitle: 'наслоение пучинных карточек',
    fullRetreatTitle: 'наслоение пучинных карточек',
  },
  {
    retreatCode: 33,
    shortRetreatTitle: 'отсутствует скрепление',
    fullRetreatTitle: 'отсутствует скрепление',
  },
  {
    retreatCode: 34,
    shortRetreatTitle: 'отсутствуют противоугоны',
    fullRetreatTitle: 'отсутствуют противоугоны',
  },
  {
    retreatCode: 35,
    shortRetreatTitle: 'дефектный анкер скрепления АРС',
    fullRetreatTitle: 'дефектный анкер скрепления АРС',
  },
  {
    retreatCode: 36,
    shortRetreatTitle: 'дефектные шурупы',
    fullRetreatTitle: 'дефектные шурупы',
  },
  {
    retreatCode: 37,
    shortRetreatTitle: 'недостаточное количество шурупов',
    fullRetreatTitle: 'недостаточное количество шурупов',
  },
  {
    retreatCode: 38,
    shortRetreatTitle: 'вертикальная ступенька в стыке при температуре выше 25 градусов',
    fullRetreatTitle: 'вертикальная ступенька в стыке при температуре выше 25 градусов',
  },
  {
    retreatCode: 39,
    shortRetreatTitle: 'горизогатльная ступенька в стыке при температуре выше 25 градусов',
    fullRetreatTitle: 'горизогатльная ступенька в стыке при температуре выше 25 градусов',
  },
  {
    retreatCode: 40,
    shortRetreatTitle: 'вертикальная ступенька в стыке при температуре ниже 25 градусов',
    fullRetreatTitle: 'вертикальная ступенька в стыке при температуре ниже 25 градусов',
  },
  {
    retreatCode: 41,
    shortRetreatTitle: 'горизогатльная ступенька в стыке при температуре ниже 25 градусов',
    fullRetreatTitle: 'горизогатльная ступенька в стыке при температуре ниже 25 градусов',
  },
  {
    retreatCode: 42,
    shortRetreatTitle: 'металлическая пластина между головкой рельса и стыковой накладкой',
    fullRetreatTitle: 'металлическая пластина между головкой рельса и стыковой накладкой',
  },
  {
    retreatCode: 43,
    shortRetreatTitle: 'нетиповые предметы в стыке',
    fullRetreatTitle: 'нетиповые предметы в стыке',
  },
  {
    retreatCode: 44,
    shortRetreatTitle: 'посторонние предметы в стыке',
    fullRetreatTitle: 'посторонние предметы в стыке',
  },
  {
    retreatCode: 45,
    shortRetreatTitle: 'отсутствующие элементы изолирующего стыка',
    fullRetreatTitle: 'отсутствующие элементы изолирующего стыка',
  },
  {
    retreatCode: 46,
    shortRetreatTitle: 'неисправные элементы изолирующего стыка',
    fullRetreatTitle: 'неисправные элементы изолирующего стыка',
  },
  {
    retreatCode: 47,
    shortRetreatTitle: 'дефектная торцевая изоляция',
    fullRetreatTitle: 'дефектная торцевая изоляция',
  },
  {
    retreatCode: 48,
    shortRetreatTitle: 'дефектный приварной рельсовый соединитель',
    fullRetreatTitle: 'дефектный приварной рельсовый соединитель',
  },
  {
    retreatCode: 49,
    shortRetreatTitle: 'торцы рельсов в изолирующем стыке с накатом',
    fullRetreatTitle: 'торцы рельсов в изолирующем стыке с накатом',
  },
  {
    retreatCode: 50,
    shortRetreatTitle: 'наличие изолирующих деталей стыка не типовых форм и размеров',
    fullRetreatTitle: 'наличие изолирующих деталей стыка не типовых форм и размеров',
  },
  {
    retreatCode: 51,
    shortRetreatTitle: 'наличие изолирующих деталей стыка не соответствующих типу рельса',
    fullRetreatTitle: 'наличие изолирующих деталей стыка не соответствующих типу рельса',
  },
  {
    retreatCode: 52,
    shortRetreatTitle: 'изолирующие стыки не располагаются над серединой шпального ящика',
    fullRetreatTitle: 'изолирующие стыки не располагаются над серединой шпального ящика',
  },
  {
    retreatCode: 53,
    shortRetreatTitle: 'поверхностный дефект рельса',
    fullRetreatTitle: 'поверхностный дефект рельса',
  },
  {
    retreatCode: 54,
    shortRetreatTitle: 'поперечные трещины головки рельса',
    fullRetreatTitle: 'поперечные трещины головки рельса',
  },
  {
    retreatCode: 55,
    shortRetreatTitle: 'продольные трещины головки рельса',
    fullRetreatTitle: 'продольные трещины головки рельса',
  },
  {
    retreatCode: 56,
    shortRetreatTitle: 'выколы головки рельса',
    fullRetreatTitle: 'выколы головки рельса',
  },
  {
    retreatCode: 57,
    shortRetreatTitle: 'дефекты и повреждения подошвы рельса',
    fullRetreatTitle: 'дефекты и повреждения подошвы рельса',
  },
  {
    retreatCode: 58,
    shortRetreatTitle: 'излом рельса',
    fullRetreatTitle: 'излом рельса',
  },
  {
    retreatCode: 59,
    shortRetreatTitle: 'негодная деревянная шпала',
    fullRetreatTitle: 'негодная деревянная шпала',
  },
  {
    retreatCode: 60,
    shortRetreatTitle: 'дефектная деревянная шпала',
    fullRetreatTitle: 'дефектная деревянная шпала',
  },
  {
    retreatCode: 61,
    shortRetreatTitle: 'отклонение от эпюрных значений укладки деревянных шпал',
    fullRetreatTitle: 'отклонение от эпюрных значений укладки деревянных шпал',
  },
  {
    retreatCode: 62,
    shortRetreatTitle: 'нарушение расположения деревянных шпал относительно оси пути',
    fullRetreatTitle: 'нарушение расположения деревянных шпал относительно оси пути',
  },
  {
    retreatCode: 63,
    shortRetreatTitle: 'нарушение расположения деревянных шпал относительно своей оси',
    fullRetreatTitle: 'нарушение расположения деревянных шпал относительно своей оси',
  },
  {
    retreatCode: 64,
    shortRetreatTitle: 'негодная железобетонная шпала',
    fullRetreatTitle: 'негодная железобетонная шпала',
  },
  {
    retreatCode: 65,
    shortRetreatTitle: 'дефектная железобетонная шпала',
    fullRetreatTitle: 'дефектная железобетонная шпала',
  },
  {
    retreatCode: 66,
    shortRetreatTitle: 'отклонение от эпюрных значений укладки железобетонных шпал',
    fullRetreatTitle: 'отклонение от эпюрных значений укладки железобетонных шпал',
  },
  {
    retreatCode: 67,
    shortRetreatTitle: 'нарушение расположения железобетонных шпал относительно оси пути',
    fullRetreatTitle: 'нарушение расположения железобетонных шпал относительно оси пути',
  },
  {
    retreatCode: 68,
    shortRetreatTitle: 'нарушение расположения железобетонных шпал относительно своей оси',
    fullRetreatTitle: 'нарушение расположения железобетонных шпал относительно своей оси',
  },
  {
    retreatCode: 69,
    shortRetreatTitle: 'недостаточное количество балласта в шпальном ящике',
    fullRetreatTitle: 'недостаточное количество балласта в шпальном ящике',
  },
  {
    retreatCode: 70,
    shortRetreatTitle: 'отсутствие подрезки балласта',
    fullRetreatTitle: 'отсутствие подрезки балласта',
  },
  {
    retreatCode: 71,
    shortRetreatTitle: 'выплеск балласта в зоне рельсового стыка',
    fullRetreatTitle: 'выплеск балласта в зоне рельсового стыка',
  },
  {
    retreatCode: 72,
    shortRetreatTitle: 'выплеск балласта в плети',
    fullRetreatTitle: 'выплеск балласта в плети',
  },
  {
    retreatCode: 73,
    shortRetreatTitle: 'наличие растительности на поверхности балластной призмы',
    fullRetreatTitle: 'наличие растительности на поверхности балластной призмы',
  },
  {
    retreatCode: 74,
    shortRetreatTitle: 'отсутствует приварной рельсовый соединитель',
    fullRetreatTitle: 'отсутствует приварной рельсовый соединитель',
  },
  {
    retreatCode: 75,
    shortRetreatTitle: 'дефектный приварной рельсовый соединитель',
    fullRetreatTitle: 'дефектный приварной рельсовый соединитель',
  },
  {
    retreatCode: 76,
    shortRetreatTitle: 'отсутствует стыковой основной рельсовый соединитель',
    fullRetreatTitle: 'отсутствует стыковой основной рельсовый соединитель',
  },
  {
    retreatCode: 77,
    shortRetreatTitle: 'неисправен стыковой основной рельсовый соединитель',
    fullRetreatTitle: 'неисправен стыковой основной рельсовый соединитель',
  },
  {
    retreatCode: 78,
    shortRetreatTitle: 'дефектный штепсельный рельсовый соединитель',
    fullRetreatTitle: 'дефектный штепсельный рельсовый соединитель',
  },
  {
    retreatCode: 79,
    shortRetreatTitle: 'отсутствует штепсельный рельсовый соединитель',
    fullRetreatTitle: 'отсутствует штепсельный рельсовый соединитель',
  },
  {
    retreatCode: 80,
    shortRetreatTitle: 'отсутствуют гайки в штепселе',
    fullRetreatTitle: 'отсутствуют гайки в штепселе',
  },
  {
    retreatCode: 81,
    shortRetreatTitle: 'отсутствует дублирующий соединитель',
    fullRetreatTitle: 'отсутствует дублирующий соединитель',
  },
  {
    retreatCode: 82,
    shortRetreatTitle: 'дефектный дублирующий соединитель',
    fullRetreatTitle: 'дефектный дублирующий соединитель',
  },
  {
    retreatCode: 83,
    shortRetreatTitle: 'отсутствует отверстие под содинители',
    fullRetreatTitle: 'отсутствует отверстие под содинители',
  },
  {
    retreatCode: 84,
    shortRetreatTitle: 'засыпан соединитель',
    fullRetreatTitle: 'засыпан соединитель',
  },
  {
    retreatCode: 85,
    shortRetreatTitle: 'отсутстыуют гайки на штепселе перемычки',
    fullRetreatTitle: 'отсутстыуют гайки на штепселе перемычки',
  },
  {
    retreatCode: 86,
    shortRetreatTitle: 'недостаточное крепление дроссельных перемычек',
    fullRetreatTitle: 'недостаточное крепление дроссельных перемычек',
  },
  {
    retreatCode: 87,
    shortRetreatTitle: 'неисправность дроссельной перемычки',
    fullRetreatTitle: 'неисправность дроссельной перемычки',
  },
  {
    retreatCode: 88,
    shortRetreatTitle: 'дефектные дроссельные перемычки',
    fullRetreatTitle: 'дефектные дроссельные перемычки',
  },
  {
    retreatCode: 89,
    shortRetreatTitle: 'не соответствие расстояния от первой точки подключения шлейфа до изолирующего стыка',
    fullRetreatTitle: 'не соответствие расстояния от первой точки подключения шлейфа до изолирующего стыка',
  },
  {
    retreatCode: 90,
    shortRetreatTitle: 'не соответствие нормы укладки перемычек',
    fullRetreatTitle: 'не соответствие нормы укладки перемычек',
  },
  {
    retreatCode: 91,
    shortRetreatTitle: 'неудовлетворительное состояние планки УКСПС',
    fullRetreatTitle: 'неудовлетворительное состояние планки УКСПС',
  },
  {
    retreatCode: 92,
    shortRetreatTitle: 'расстояние между датчиками УКСПС не по эпюре',
    fullRetreatTitle: 'расстояние между датчиками УКСПС не по эпюре',
  },
  {
    retreatCode: 93,
    shortRetreatTitle: 'не выверена информация по технической оснащенности (ошибки БПД)',
    fullRetreatTitle: 'не выверена информация по технической оснащенности (ошибки БПД)',
  },
  {
    retreatCode: 94,
    shortRetreatTitle: 'отсутствует закладной болт',
    fullRetreatTitle: 'отсутствует закладной болт',
  },
  {
    retreatCode: 95,
    shortRetreatTitle: 'не протянут закладной болт',
    fullRetreatTitle: 'не протянут закладной болт',
  },
  {
    retreatCode: 96,
    shortRetreatTitle: 'отсутствует клеммный болт',
    fullRetreatTitle: 'отсутствует клеммный болт',
  },
  {
    retreatCode: 97,
    shortRetreatTitle: 'не протянут клеммный болт',
    fullRetreatTitle: 'не протянут клеммный болт',
  },
  {
    retreatCode: 98,
    shortRetreatTitle: 'отсутствует гайка на закладном болте',
    fullRetreatTitle: 'отсутствует гайка на закладном болте',
  },
  {
    retreatCode: 99,
    shortRetreatTitle: 'отсутствует гайка на клеммном болте',
    fullRetreatTitle: 'отсутствует гайка на клеммном болте',
  },
  {
    retreatCode: 100,
    shortRetreatTitle: 'отсутствует прокладка упругая скрепления ЖБР',
    fullRetreatTitle: 'отсутствует прокладка упругая скрепления ЖБР',
  },
  {
    retreatCode: 101,
    shortRetreatTitle: 'отсутствует скоба упорная скрепления ЖБР',
    fullRetreatTitle: 'отсутствует скоба упорная скрепления ЖБР',
  },

  {
    retreatCode: 102,
    shortRetreatTitle: 'прочее',
    fullRetreatTitle: 'прочее',
  },

  /*
  {
    retreatCode: 1,
    retreatForReportTamlesTitle: 'зазор правый',
    retreatFullTitle: 'Превышение конструктивной величины зазора по правой рельсовой нити',
  },
  {
    retreatCode: 2,
    retreatForReportTamlesTitle: 'зазор левый',
    retreatFullTitle: 'Превышение конструктивной величины зазора по левой рельсовой нити',
  },
  {
    retreatCode: 3,
    retreatForReportTamlesTitle: 'зазор правый',
    retreatFullTitle: 'Превышение конструктивной величины зазора по правой рельсовой нити',
  },
  {
    retreatCode: 4,
    retreatForReportTamlesTitle: 'зазор левый',
    retreatFullTitle: 'Превышение конструктивной величины зазора по левой рельсовой нити',
  },
  {
    retreatCode: 5,
    retreatForReportTamlesTitle: 'отсутствует закладной болт',
    retreatFullTitle: 'Отсутствует закладной болт',
  },
  {
    retreatCode: 6,
    retreatForReportTamlesTitle: 'отсутствует клеммный болт',
    retreatFullTitle: 'Отсутствует клеммный болт',
  },
  {
    retreatCode: 7,
    retreatForReportTamlesTitle: 'cмещение контрольных сечений относительно «маячных» шпал',
    retreatFullTitle: 'Смещение контрольных сечений относительно «маячных» шпал',
  },
  { retreatCode: 8, retreatForReportTamlesTitle: 'отсутствует клемма', retreatFullTitle: 'Отсутствует клемма' },
  { retreatCode: 9, retreatForReportTamlesTitle: 'дефектные клеммы', retreatFullTitle: 'Дефектные клеммы' },
  { retreatCode: 10, retreatForReportTamlesTitle: 'выплеск', retreatFullTitle: 'Выплеск балласта' },
  { retreatCode: 11, retreatForReportTamlesTitle: 'отсутствуюут костыли', retreatFullTitle: 'Отсутствуюут костыли' },
  {
    retreatCode: 12,
    retreatForReportTamlesTitle: 'отсутствует скрепление',
    retreatFullTitle: 'Отсутствует скрепление',
  },
  {
    retreatCode: 13,
    retreatForReportTamlesTitle: 'отсутствует скоба упорная скрепления ЖБР',
    retreatFullTitle: 'Отсутствует скоба упорная скрепления ЖБР',
  },
  {
    retreatCode: 14,
    retreatForReportTamlesTitle: 'отсутствует прокладка упругая скрепления ЖБР',
    retreatFullTitle: 'Отсутствует прокладка упругая скрепления ЖБР',
  },
  {
    retreatCode: 15,
    retreatForReportTamlesTitle: 'клемма под подошвой рельса',
    retreatFullTitle: 'Клемма под подошвой рельса',
  },
  {
    retreatCode: 16,
    retreatForReportTamlesTitle: 'отсутствует один стыковой болт с одной стороны рельса в четырех дырной накладке',
    retreatFullTitle: 'Отсутствует один стыковой болт с одной сторонырельса в четырех дырной накладке',
  },
  {
    retreatCode: 17,
    retreatForReportTamlesTitle: 'отсутствуют два стыковых болта с одной стороны рельса в четырех дырной накладке',
    retreatFullTitle: 'Отсутствуют два стыковых болта с одной стороны рельса в четырех дырной накладке',
  },
  {
    retreatCode: 18,
    retreatForReportTamlesTitle: 'отсутствуют по одному стыковому болту с двух сторон рельса в четырех дырной накладке',
    retreatFullTitle: 'Отсутствуют по одному стыковому болту с двух сторон рельса в четырех дырной накладке',
  },
  {
    retreatCode: 19,
    retreatForReportTamlesTitle: 'отсутствуют два стыковых болта с двух сторон рельса в четырех дырной накладке',
    retreatFullTitle: 'Отсутствуют два стыковых болта с двух сторон рельса в четырех дырной накладке',
  },
  {
    retreatCode: 20,
    retreatForReportTamlesTitle: 'отсутствует один стыковой болт с одной стороны рельса в шести дырной накладке',
    retreatFullTitle: 'Отсутствует один стыковой болт с одной стороны рельса в шести дырной накладке',
  },
  {
    retreatCode: 21,
    retreatForReportTamlesTitle: 'отсутствуют по одному стыковому болту с двух сторон рельса в шести дырной накладке',
    retreatFullTitle: 'Отсутствуют по одному стыковому болту с двух сторон рельса в шести дырной накладке',
  },
  {
    retreatCode: 22,
    retreatForReportTamlesTitle: 'отсутствуют два стыковых болта с одной стороны рельса в шести дырной накладке',
    retreatFullTitle: 'Отсутствуют два стыковых болта с одной стороны рельса в шести дырной накладке',
  },
  {
    retreatCode: 23,
    retreatForReportTamlesTitle: 'отсутствуют по два стыковых болта с каждой стороны рельса в шести дырной накладке',
    retreatFullTitle: 'Отсутствуют по два стыковых болта с каждой стороны рельса в шести дырной накладке',
  },
  {
    retreatCode: 24,
    retreatForReportTamlesTitle: 'отсутствуют три стыковых болта с одной стороны рельса в шести дырной накладке',
    retreatFullTitle: 'Отсутствуют три стыковых болта с одной стороны рельса в шести дырной накладке',
  },
  {
    retreatCode: 25,
    retreatForReportTamlesTitle: 'трещина в стыковой накладке',
    retreatFullTitle: 'Трещина в стыковой накладке',
  },
  {
    retreatCode: 26,
    retreatForReportTamlesTitle: 'излом стыковой накладки',
    retreatFullTitle: 'Излом стыковой накладки',
  },
  {
    retreatCode: 27,
    retreatForReportTamlesTitle: 'вертикальная  ступенька',
    retreatFullTitle: 'Вертикальная  ступенька',
  },
  {
    retreatCode: 28,
    retreatForReportTamlesTitle: 'дефектная деревянная шпала',
    retreatFullTitle: 'Дефектная деревянная шпала',
  },
  {
    retreatCode: 29,
    retreatForReportTamlesTitle: 'негодная деревянная шпала',
    retreatFullTitle: 'Негодная деревянная шпала',
  },
  {
    retreatCode: 30,
    retreatForReportTamlesTitle: 'дефектная железобетонная шпала',
    retreatFullTitle: 'Дефектная железобетонная шпала',
  },
  {
    retreatCode: 31,
    retreatForReportTamlesTitle: 'негодная железобетонная шпала',
    retreatFullTitle: 'Негодная железобетонная шпала',
  },
  {
    retreatCode: 32,
    retreatForReportTamlesTitle: 'отклонение от эпюрных значений укладки шпал',
    retreatFullTitle: 'Отклонение от эпюрных значений укладки шпал',
  },
  { retreatCode: 33, retreatForReportTamlesTitle: 'дефектный рельс', retreatFullTitle: 'Дефектный рельс' },
  { retreatCode: 34, retreatForReportTamlesTitle: 'излом рельса', retreatFullTitle: 'Излом рельса' },
  {
    retreatCode: 35,
    retreatForReportTamlesTitle: 'поперечные или продольные трещины,изломы головки рельса',
    retreatFullTitle: 'Поперечные или продольные трещины,изломы головки рельса',
  },
  {
    retreatCode: 36,
    retreatForReportTamlesTitle: 'недостаточное количество балласта в шпальном ящике',
    retreatFullTitle: 'Недостаточное количество балласта в шпальном ящике',
  },
  {
    retreatCode: 37,
    retreatForReportTamlesTitle: 'не обновлена маркировка «маячных» шпал',
    retreatFullTitle: 'Не обновлена маркировка «маячных» шпал',
  },
  {
    retreatCode: 38,
    retreatForReportTamlesTitle: 'отсутствует разметка контрольных сечений рельсовой плети',
    retreatFullTitle: 'Отсутствует разметка контрольных сечений рельсовой плети',
  },
  {
    retreatCode: 39,
    retreatForReportTamlesTitle: 'эксплуатация четырехдырных накладок на мосту',
    retreatFullTitle: 'Эксплуатация четырехдырных накладок на мосту',
  },
  {
    retreatCode: 40,
    retreatForReportTamlesTitle: 'металлическая пластина между головкой рельса и стыковой накладкой',
    retreatFullTitle: 'Металлическая пластина между головкой рельса и стыковой накладкой',
  },
  {
    retreatCode: 41,
    retreatForReportTamlesTitle: 'нетиповые и посторонние предметы в стыке',
    retreatFullTitle: 'Нетиповые и посторонние предметы в стыке',
  },
  {
    retreatCode: 42,
    retreatForReportTamlesTitle: 'отсутствие гаек на закладных болтах',
    retreatFullTitle: 'Отсутствие гаек на закладных болтах',
  },
  {
    retreatCode: 43,
    retreatForReportTamlesTitle: 'недостаточное количество шурупов',
    retreatFullTitle: 'Недостаточное количество шурупов',
  },
  {
    retreatCode: 44,
    retreatForReportTamlesTitle: 'дефектные подкладки',
    retreatFullTitle: 'Дефектные подкладки',
  },
  {
    retreatCode: 45,
    retreatForReportTamlesTitle: 'отсутствующие  подкладки',
    retreatFullTitle: 'Отсутствующие  подкладки',
  },
  {
    retreatCode: 46,
    retreatForReportTamlesTitle: 'выход подошвы рельса из реборд подкладок',
    retreatFullTitle: 'Выход подошвы рельса из реборд подкладок',
  },
  {
    retreatCode: 47,
    retreatForReportTamlesTitle: 'дефектная стыковая накладка',
    retreatFullTitle: 'Дефектная стыковая накладка',
  },
  {
    retreatCode: 48,
    retreatForReportTamlesTitle: 'горизонтальная  ступенька',
    retreatFullTitle: 'Горизонтальная  ступенька',
  },
  {
    retreatCode: 49,
    retreatForReportTamlesTitle: 'выколы головки рельса',
    retreatFullTitle: 'Выколы головки рельса',
  },
  {
    retreatCode: 50,
    retreatForReportTamlesTitle: 'дефекты и повреждения подошвы рельса',
    retreatFullTitle: 'Дефекты и повреждения подошвы рельса',
  },
  {
    retreatCode: 51,
    retreatForReportTamlesTitle: 'изолирующие стыки не располагаются над серединой шпального ящика',
    retreatFullTitle: 'Изолирующие стыки не располагаются над серединой шпального ящика',
  },
  {
    retreatCode: 52,
    retreatForReportTamlesTitle: 'нарушение расположения железобетонных шпал относительно оси пути',
    retreatFullTitle: 'Нарушение расположения железобетонных шпал относительно оси пути',
  },
  { retreatCode: 53, retreatForReportTamlesTitle: 'прочие', retreatFullTitle: 'Прочие' },
   */
];
