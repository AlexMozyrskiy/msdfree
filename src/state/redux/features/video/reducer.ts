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
      distanceName: '????-1 ??????????',
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
      distanceName: '????-3 ????????????',
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
      distanceName: '????-4 ??????????????',
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
      distanceName: '????-6 ????????????????????',
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
      distanceName: '????-7 ????????????????????',
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
      distanceName: '????-8 ??????????????',
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
      distanceName: '????-10 ??????. ????????',
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
      distanceName: '????-12 ????????????????????',
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
      distanceName: '????-15 ??????????????????',
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
      distanceName: '????-16 ??????????????????',
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
      distanceName: '????-18 ??????????????????????',
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
      distanceName: '????-19 ????????????',
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
      distanceName: '????-21 ??????????????????',
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
      distanceName: '????-22 ????????????????????????',
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
      distanceName: '????-23 ????????????????????????????',
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
      distanceName: '????-24 ??????????????????',
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
      distanceName: '????-26 ????????????',
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
      distanceName: '????-27 ??????????????',
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
      distanceName: '????-30 ????????????',
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
      distanceName: '????-32 ?????????????? ????????',
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
      distanceName: '????-33 ??????????',
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
      distanceName: '????-35 ??????????????????',
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
      distanceName: '????-1 ????????',
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
      distanceName: '????-2 ????????????????',
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
      distanceName: '????-3 ????????????????????',
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
            limitSpeed: retreat.limitSpeed === '??????????????????????????' ? null : retreat.limitSpeed,
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
