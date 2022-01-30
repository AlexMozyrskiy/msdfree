import { TRootReducerState } from '../../../rootReducer';

import { IRetreat, IKilometer, ICargo, IFreightTension, TFileValidationError } from './actionCreators';

export const getRetreats = (state: TRootReducerState): IRetreat[] => {
  return state.freightTension.retreats;
};

export const getKilometers = (state: TRootReducerState): IKilometer[] => {
  return state.freightTension.kilometers;
};

export const getCargos = (state: TRootReducerState): ICargo[] => {
  return state.freightTension.cargos;
};

export const getFreightTension = (state: TRootReducerState): IFreightTension => {
  return state.freightTension.freightTension;
};

export const getFileValidationError = (state: TRootReducerState): TFileValidationError[] => {
  return state.freightTension.fileValidationErrors;
};
