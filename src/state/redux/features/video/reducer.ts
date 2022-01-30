import {
  SET_RETREATS as SET_RETREATS_TYPE,
  SET_DATA as SET_DATA_TYPE,
  SET_CUMULATIVE_GAPS as SET_CUMULATIVE_GAPS_TYPE,
  SET_CHECKED_DISTANCES as SET_CHECKED_DISTANCES_TYPE,
  SET_MAIN_TELEGRAM_DATA as SET_MAIN_TELEGRAM_DATA_TYPE,
  SET_GAP_ORDERS as SET_GAP_ORDERS_TYPE,
  SET_VSP_RETREATS as SET_VSP_RETREATS_TYPE,
  SET_DISTANCES_RETREATS as SET_DISTANCES_RETREATS_TYPE,
  SET_GAPS_CONTROL as SET_GAPS_CONTROL_TYPE,
  SET_MOVEMENTS as SET_MOVEMENTS_TYPE,
  SET_FILE_VALIDATION_ERRORS as SET_FILE_VALIDATION_ERRORS_TYPE,
} from './actionTypes';

import {
  TSetRetreats as TSetRetreatsType,
  TSetData as TSetDataType,
  TSetCumulativeGaps as TSetCumulativeGapsType,
  TSetCheckedDistances as TSetCheckedDistancesType,
  TSetMainTelegramData as TSetMainTelegramDataType,
  TSetGapOrders as TSetGapOrdersType,
  TSetVSPretreats as TSetVSPretreatsType,
  TSetDistancesRetreats as TSetDistancesRetreatsType,
  TSetGapsControl as TSetGapsControlType,
  TSetMovements as TSetMovementsType,
  TSetFileValidationErrors as TSetFileValidationErrorsType,
} from './actionTypes';

import {
  IRetreat,
  IData,
  ICumulativeGap,
  ICheckedDistance,
  IMainTelegramData,
  IGapOrders,
  IVSPretreats,
  IDistancesRetreats,
  IGapsControl,
  IMovements,
  TFileValidationError,
} from './actionCreators';

interface IInitialState {
  retreats: IRetreat[];
  data: IData;
  cumulativeGaps: ICumulativeGap[];
  checkedDistances: ICheckedDistance[];
  mainTelegramData: IMainTelegramData;
  gapOrders: IGapOrders;
  VSPretreats: IVSPretreats;
  distancesRetreats: IDistancesRetreats;
  gapsControl: IGapsControl;
  movements: IMovements;
  fileValidationErrors: TFileValidationError[];
}

interface IAction extends IInitialState {
  type:
    | TSetRetreatsType
    | TSetDataType
    | TSetCheckedDistancesType
    | TSetMainTelegramDataType
    | TSetGapOrdersType
    | TSetVSPretreatsType
    | TSetDistancesRetreatsType
    | TSetFileValidationErrorsType
    | TSetGapsControlType
    | TSetCumulativeGapsType
    | TSetMovementsType;
}

const initialState: IInitialState = {
  retreats: [],
  data: {
    checkDate: null,
    decryptionDate: null,
    inspectionArea: null,
    diagnosticToolCode: null,
    diagnosticToolNumber: null,
    checkedMainTracksKm: null,
    checkedSideTracksKm: null,
    checkType: null,
  },
  cumulativeGaps: [
    {
      distanceName: 'ПЧ-1 Шахты',
      distanceNumber: 1,
      gapsCount: null,
      average: null,
      gapThenOf35: null,
      gap3135: null,
      gap2730: null,
      gap2526: null,
      repeat: null,
    },
    {
      distanceName: 'ПЧ-3 Ростов',
      distanceNumber: 3,
      gapsCount: null,
      average: null,
      gapThenOf35: null,
      gap3135: null,
      gap2730: null,
      gap2526: null,
      repeat: null,
    },
    {
      distanceName: 'ПЧ-4 Батайск',
      distanceNumber: 4,
      gapsCount: null,
      average: null,
      gapThenOf35: null,
      gap3135: null,
      gap2730: null,
      gap2526: null,
      repeat: null,
    },
    {
      distanceName: 'ПЧ-6 Тихорецкая',
      distanceNumber: 6,
      gapsCount: null,
      average: null,
      gapThenOf35: null,
      gap3135: null,
      gap2730: null,
      gap2526: null,
      repeat: null,
    },
    {
      distanceName: 'ПЧ-7 Кавказская',
      distanceNumber: 7,
      gapsCount: null,
      average: null,
      gapThenOf35: null,
      gap3135: null,
      gap2730: null,
      gap2526: null,
      repeat: null,
    },
    {
      distanceName: 'ПЧ-8 Армавир',
      distanceNumber: 8,
      gapsCount: null,
      average: null,
      gapThenOf35: null,
      gap3135: null,
      gap2730: null,
      gap2526: null,
      repeat: null,
    },
    {
      distanceName: 'ПЧ-10 Мин. Воды',
      distanceNumber: 10,
      gapsCount: null,
      average: null,
      gapThenOf35: null,
      gap3135: null,
      gap2730: null,
      gap2526: null,
      repeat: null,
    },
    {
      distanceName: 'ПЧ-12 Прохладная',
      distanceNumber: 12,
      gapsCount: null,
      average: null,
      gapThenOf35: null,
      gap3135: null,
      gap2730: null,
      gap2526: null,
      repeat: null,
    },
    {
      distanceName: 'ПЧ-15 Гудермесс',
      distanceNumber: 15,
      gapsCount: null,
      average: null,
      gapThenOf35: null,
      gap3135: null,
      gap2730: null,
      gap2526: null,
      repeat: null,
    },
    {
      distanceName: 'ПЧ-16 Махачкала',
      distanceNumber: 16,
      gapsCount: null,
      average: null,
      gapThenOf35: null,
      gap3135: null,
      gap2730: null,
      gap2526: null,
      repeat: null,
    },
    {
      distanceName: 'ПЧ-18 Белореченск',
      distanceNumber: 18,
      gapsCount: null,
      average: null,
      gapThenOf35: null,
      gap3135: null,
      gap2730: null,
      gap2526: null,
      repeat: null,
    },
    {
      distanceName: 'ПЧ-19 Туапсе',
      distanceNumber: 19,
      gapsCount: null,
      average: null,
      gapThenOf35: null,
      gap3135: null,
      gap2730: null,
      gap2526: null,
      repeat: null,
    },
    {
      distanceName: 'ПЧ-21 Краснодар',
      distanceNumber: 21,
      gapsCount: null,
      average: null,
      gapThenOf35: null,
      gap3135: null,
      gap2730: null,
      gap2526: null,
      repeat: null,
    },
    {
      distanceName: 'ПЧ-22 Новороссийск',
      distanceNumber: 22,
      gapsCount: null,
      average: null,
      gapThenOf35: null,
      gap3135: null,
      gap2730: null,
      gap2526: null,
      repeat: null,
    },
    {
      distanceName: 'ПЧ-23 Старотитаровка',
      distanceNumber: 23,
      gapsCount: null,
      average: null,
      gapThenOf35: null,
      gap3135: null,
      gap2730: null,
      gap2526: null,
      repeat: null,
    },
    {
      distanceName: 'ПЧ-24 Тимашевск',
      distanceNumber: 24,
      gapsCount: null,
      average: null,
      gapThenOf35: null,
      gap3135: null,
      gap2730: null,
      gap2526: null,
      repeat: null,
    },
    {
      distanceName: 'ПЧ-26 Сальск',
      distanceNumber: 26,
      gapsCount: null,
      average: null,
      gapThenOf35: null,
      gap3135: null,
      gap2730: null,
      gap2526: null,
      repeat: null,
    },
    {
      distanceName: 'ПЧ-27 Куберле',
      distanceNumber: 27,
      gapsCount: null,
      average: null,
      gapThenOf35: null,
      gap3135: null,
      gap2730: null,
      gap2526: null,
      repeat: null,
    },
    {
      distanceName: 'ПЧ-30 Кизляр',
      distanceNumber: 30,
      gapsCount: null,
      average: null,
      gapThenOf35: null,
      gap3135: null,
      gap2730: null,
      gap2526: null,
      repeat: null,
    },
    {
      distanceName: 'ПЧ-32 Горячий Ключ',
      distanceNumber: 32,
      gapsCount: null,
      average: null,
      gapThenOf35: null,
      gap3135: null,
      gap2730: null,
      gap2526: null,
      repeat: null,
    },
    {
      distanceName: 'ПЧ-33 Лихая',
      distanceNumber: 33,
      gapsCount: null,
      average: null,
      gapThenOf35: null,
      gap3135: null,
      gap2730: null,
      gap2526: null,
      repeat: null,
    },
    {
      distanceName: 'ПЧ-35 Миллерово',
      distanceNumber: 35,
      gapsCount: null,
      average: null,
      gapThenOf35: null,
      gap3135: null,
      gap2730: null,
      gap2526: null,
      repeat: null,
    },
    {
      distanceName: 'ИЧ-1 Сочи',
      distanceNumber: 20,
      gapsCount: null,
      average: null,
      gapThenOf35: null,
      gap3135: null,
      gap2730: null,
      gap2526: null,
      repeat: null,
    },
    {
      distanceName: 'ИЧ-2 Таганрог',
      distanceNumber: 2,
      gapsCount: null,
      average: null,
      gapThenOf35: null,
      gap3135: null,
      gap2730: null,
      gap2526: null,
      repeat: null,
    },
    {
      distanceName: 'ИЧ-3 Ставрополь',
      distanceNumber: 28,
      gapsCount: null,
      average: null,
      gapThenOf35: null,
      gap3135: null,
      gap2730: null,
      gap2526: null,
      repeat: null,
    },
  ],

  checkedDistances: [],
  mainTelegramData: {
    isCalculated: false,
    forXLSXAoA: [['']],
    forBrowserPageRenderObj: {
      header: [''],
      body: [''],
    },
  },
  gapOrders: {
    isCalculated: false,
    forXLSXAoA: [['']],
  },
  VSPretreats: {
    isCalculated: false,
    forXLSXAoA: [['']],
  },
  distancesRetreats: {
    isCalculated: false,
    forXLSXAoA: [['']],
  },
  gapsControl: {
    isCalculated: false,
    forXLSXAoA: [['']],
  },
  movements: {
    isCalculated: false,
    forXLSXAoA: [['']],
  },
  fileValidationErrors: [],
};

const userReducers = (state = initialState, action: IAction): IInitialState => {
  switch (action.type) {
    case SET_RETREATS_TYPE: {
      const superState = {
        ...state,
        retreats: action.retreats.map((retreat) => {
          return {
            ...retreat,
            limitSpeed: retreat.limitSpeed === 'установленная' ? null : retreat.limitSpeed,
          };
        }),
      };
      return superState;
    }

    case SET_DATA_TYPE: {
      const superState = {
        ...state,
        data: { ...action.data },
      };
      return superState;
    }

    case SET_CUMULATIVE_GAPS_TYPE: {
      const superState = {
        ...state,
        cumulativeGaps: action.cumulativeGaps.map((gap) => {
          return {
            ...gap,
          };
        }),
      };
      return superState;
    }

    case SET_CHECKED_DISTANCES_TYPE: {
      const superState = {
        ...state,
        checkedDistances: action.checkedDistances.map((item) => {
          return {
            ...item,
          };
        }),
      };
      return superState;
    }

    case SET_MAIN_TELEGRAM_DATA_TYPE: {
      const superState = {
        ...state,
        mainTelegramData: { ...action.mainTelegramData, isCalculated: true },
      };
      return superState;
    }

    case SET_GAP_ORDERS_TYPE: {
      const superState = {
        ...state,
        gapOrders: { ...action.gapOrders, isCalculated: true },
      };
      return superState;
    }

    case SET_VSP_RETREATS_TYPE: {
      const superState = {
        ...state,
        VSPretreats: { ...action.VSPretreats, isCalculated: true },
      };
      return superState;
    }

    case SET_DISTANCES_RETREATS_TYPE: {
      const superState = {
        ...state,
        distancesRetreats: { ...action.distancesRetreats, isCalculated: true },
      };
      return superState;
    }

    case SET_GAPS_CONTROL_TYPE: {
      const superState = {
        ...state,
        gapsControl: { ...action.gapsControl, isCalculated: true },
      };
      return superState;
    }

    case SET_MOVEMENTS_TYPE: {
      const superState = {
        ...state,
        movements: { ...action.movements, isCalculated: true },
      };
      return superState;
    }

    case SET_FILE_VALIDATION_ERRORS_TYPE: {
      const superState = {
        ...state,
        fileValidationErrors: [...action.fileValidationErrors],
      };
      return superState;
    }

    default:
      return state;
  }
};

export default userReducers;
