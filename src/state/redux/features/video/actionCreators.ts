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
  TSetRetreats,
  TSetData,
  TSetCumulativeGaps,
  TSetCheckedDistances,
  TSetMainTelegramData,
  TSetGapOrders,
  TSetVSPretreats,
  TSetDistancesRetreats,
  TSetGapsControl,
  TSetMovements,
  TSetFileValidationErrors,
} from './actionTypes';

import { IReturnedObj as IReturnedObjMainTelegram } from 'src/pages/user/RailWays/MSD/Video/helpers/reportsCalculating/mainTelegram';
import { IReturnedObj as IReturnedObjGapOrders } from 'src/pages/user/RailWays/MSD/Video/helpers/reportsCalculating/gapOrders';
import { IReturnedObj as IReturnedObjVSPretreats } from 'src/pages/user/RailWays/MSD/Video/helpers/reportsCalculating/VSPretreats';
import { IReturnedObj as IReturnedObjDistancesRetreats } from 'src/pages/user/RailWays/MSD/Video/helpers/reportsCalculating/distancesRetreats';
import { IReturnedObj as IReturnedObjGapsControl } from 'src/pages/user/RailWays/MSD/Video/helpers/reportsCalculating/gapsControl';
import { IReturnedObj as IReturnedObjMovements } from 'src/pages/user/RailWays/MSD/Video/helpers/reportsCalculating/movements';

export interface IRetreat {
  id: number;
  directionCode: number;
  stationOrLine: string;
  distanceNumber: number;
  trackNumber: string;
  kilometer: number;
  picket: number;
  meter: number;
  thread: string;
  retreatSize: string;
  pad: string;
  limitSpeed: string | null;
  setSpeed: string;
  retreatCode: number;
  regionNumber: number;
  checkType: string;
  curveRadius: string | number;
  subrailBase: string;
  trackType: string;
  warningNumber: string;
}

export interface IData {
  checkDate: string | null;
  decryptionDate: string | null;
  inspectionArea: string | null;
  diagnosticToolCode: number | null;
  diagnosticToolNumber: string | null;
  checkedMainTracksKm: string | null;
  checkedSideTracksKm: string | null;
  checkType: string | null;
}

export interface ICumulativeGap {
  distanceName: string;
  distanceNumber: number;
  gapsCount: number | null;
  average: number | null;
  gapThenOf35: number | null;
  gap3135: number | null;
  gap2730: number | null;
  gap2526: number | null;
  repeat: number | null;
}

export interface ICheckedDistance {
  distanceNumber: number | null;
  kilometers: number | null;
}

export interface IMainTelegramData extends IReturnedObjMainTelegram {
  isCalculated: boolean;
}

export interface IGapOrders extends IReturnedObjGapOrders {
  isCalculated: boolean;
}

export interface IVSPretreats extends IReturnedObjVSPretreats {
  isCalculated: boolean;
}

export interface IDistancesRetreats extends IReturnedObjDistancesRetreats {
  isCalculated: boolean;
}

export interface IGapsControl extends IReturnedObjGapsControl {
  isCalculated: boolean;
}

export interface IMovements extends IReturnedObjMovements {
  isCalculated: boolean;
}

export type TFileValidationError = string;

interface ISetRetreatsReturn {
  type: TSetRetreats;
  retreats: IRetreat[];
}

interface ISetDataReturn {
  type: TSetData;
  data: IData;
}

interface ISetCumulativeGapsReturn {
  type: TSetCumulativeGaps;
  cumulativeGaps: ICumulativeGap[];
}

interface ISetCheckedDistancesReturn {
  type: TSetCheckedDistances;
  checkedDistances: ICheckedDistance[];
}

interface ISetMainTelegramDataReturn {
  type: TSetMainTelegramData;
  mainTelegramData: IMainTelegramData;
}

interface IGapOrdersReturn {
  type: TSetGapOrders;
  gapOrders: IGapOrders;
}

interface IVSPretreatsReturn {
  type: TSetVSPretreats;
  VSPretreats: IVSPretreats;
}

interface IDistancesRetreatsReturn {
  type: TSetDistancesRetreats;
  distancesRetreats: IDistancesRetreats;
}

interface IGapsControlReturn {
  type: TSetGapsControl;
  gapsControl: IGapsControl;
}

interface IMovementsReturn {
  type: TSetMovements;
  movements: IMovements;
}

interface ISetFileValidationErrorsReturn {
  type: TSetFileValidationErrors;
  fileValidationErrors: TFileValidationError[];
}

export const setRetreats = (retreats: IRetreat[]): ISetRetreatsReturn => {
  return {
    type: SET_RETREATS_TYPE,
    retreats,
  };
};

export const setData = (data: IData): ISetDataReturn => {
  return {
    type: SET_DATA_TYPE,
    data,
  };
};

export const setCumulativeGaps = (cumulativeGaps: ICumulativeGap[]): ISetCumulativeGapsReturn => {
  return {
    type: SET_CUMULATIVE_GAPS_TYPE,
    cumulativeGaps,
  };
};

export const setCheckedDistances = (checkedDistances: ICheckedDistance[]): ISetCheckedDistancesReturn => {
  return {
    type: SET_CHECKED_DISTANCES_TYPE,
    checkedDistances,
  };
};

export const setMainTelegramData = (mainTelegramData: IMainTelegramData): ISetMainTelegramDataReturn => {
  return {
    type: SET_MAIN_TELEGRAM_DATA_TYPE,
    mainTelegramData,
  };
};

export const setGapOrders = (gapOrders: IGapOrders): IGapOrdersReturn => {
  return {
    type: SET_GAP_ORDERS_TYPE,
    gapOrders,
  };
};

export const setVSPretreats = (VSPretreats: IVSPretreats): IVSPretreatsReturn => {
  return {
    type: SET_VSP_RETREATS_TYPE,
    VSPretreats,
  };
};

export const setDistancesRetreats = (distancesRetreats: IDistancesRetreats): IDistancesRetreatsReturn => {
  return {
    type: SET_DISTANCES_RETREATS_TYPE,
    distancesRetreats,
  };
};

export const setGapsControl = (gapsControl: IGapsControl): IGapsControlReturn => {
  return {
    type: SET_GAPS_CONTROL_TYPE,
    gapsControl,
  };
};

export const setMovements = (movements: IMovements): IMovementsReturn => {
  return {
    type: SET_MOVEMENTS_TYPE,
    movements,
  };
};

export const setFileValidationErrors = (
  fileValidationErrors: TFileValidationError[]
): ISetFileValidationErrorsReturn => {
  return {
    type: SET_FILE_VALIDATION_ERRORS_TYPE,
    fileValidationErrors,
  };
};
