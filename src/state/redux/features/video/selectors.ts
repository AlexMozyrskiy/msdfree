import { TRootReducerState } from '../../rootReducer';

import {
  IRetreat,
  IData,
  ICumulativeGap,
  IMainTelegramData,
  IGapOrders,
  IVSPretreats,
  TFileValidationError,
  IDistancesRetreats,
  IGapsControl,
  ICheckedDistance,
  IMovements,
} from './actionCreators';

export const getRetreats = (state: TRootReducerState): IRetreat[] => {
  return state.video.retreats;
};

export const getData = (state: TRootReducerState): IData => {
  return state.video.data;
};

export const getCumulativeGaps = (state: TRootReducerState): ICumulativeGap[] => {
  return state.video.cumulativeGaps;
};

export const getCheckedDistances = (state: TRootReducerState): ICheckedDistance[] => {
  return state.video.checkedDistances;
};

export const getMainTelegramData = (state: TRootReducerState): IMainTelegramData => {
  return state.video.mainTelegramData;
};

export const getGapOrders = (state: TRootReducerState): IGapOrders => {
  return state.video.gapOrders;
};

export const getVSPretreats = (state: TRootReducerState): IVSPretreats => {
  return state.video.VSPretreats;
};

export const getDistancesRetreats = (state: TRootReducerState): IDistancesRetreats => {
  return state.video.distancesRetreats;
};

export const getGapsControl = (state: TRootReducerState): IGapsControl => {
  return state.video.gapsControl;
};

export const getMovements = (state: TRootReducerState): IMovements => {
  return state.video.movements;
};

export const getFileValidationError = (state: TRootReducerState): TFileValidationError[] => {
  return state.video.fileValidationErrors;
};
