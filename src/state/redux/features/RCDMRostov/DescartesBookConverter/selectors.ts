import { TRootReducerState } from '../../../rootReducer';

import { IKilometer, IRetreat, TFileValidationError } from './actionCreators';

import { TForXLSXAoA } from 'src/pages/user/RailWays/RCDMRostov/DescartesBookConverter/helpers/reportsCalculating/book';

export const getKilometers = (state: TRootReducerState): IKilometer[] => {
  return state.descartesBookConverter.dataFromUploadFile.kilometers;
};

export const getKilometersSheet = (state: TRootReducerState): TForXLSXAoA => {
  return state.descartesBookConverter.reports.book1.kilometersSheet.AoA;
};

export const getIsKilometersSheetCalculated = (state: TRootReducerState): boolean => {
  return state.descartesBookConverter.reports.book1.kilometersSheet.isCalculated;
};

export const getFourthDegrees = (state: TRootReducerState): IRetreat[] => {
  return state.descartesBookConverter.dataFromUploadFile.fourthDegrees;
};

export const getThirdDegrees = (state: TRootReducerState): IRetreat[] => {
  return state.descartesBookConverter.dataFromUploadFile.thirdDegrees;
};

export const getSecondDegrees = (state: TRootReducerState): IRetreat[] => {
  return state.descartesBookConverter.dataFromUploadFile.secondDegrees;
};

export const getRetreatsSheet = (state: TRootReducerState): TForXLSXAoA => {
  return state.descartesBookConverter.reports.book1.retreatsSheet.AoA;
};

export const getIsRetreatsSheetCalculated = (state: TRootReducerState): boolean => {
  return state.descartesBookConverter.reports.book1.retreatsSheet.isCalculated;
};

export const getFileValidationError = (state: TRootReducerState): TFileValidationError[] => {
  return state.descartesBookConverter.fileValidationErrors;
};
