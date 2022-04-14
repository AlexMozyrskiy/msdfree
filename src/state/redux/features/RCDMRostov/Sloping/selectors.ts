import { TRootReducerState } from "../../../rootReducer";

import { IRetreat, TFileValidationError } from "./actionCreators";

// import { TForXLSXAoA } from 'src/pages/user/RailWays/RCDMRostov/DescartesBookConverter/helpers/reportsCalculating/book';

type TForXLSXAoA = (string | number)[][];

export const getRetreatsFromUpload = (state: TRootReducerState): IRetreat[] => {
  return state.sloping.dataFromUploadFile.retreats;
};

export const getRetreatsForReport = (state: TRootReducerState): TForXLSXAoA => {
  return state.sloping.reports.book1.retreatsSheet.AoA;
};

export const getIsRetreatsForReportCalculated = (state: TRootReducerState): boolean => {
  return state.sloping.reports.book1.retreatsSheet.isCalculated;
};

export const getFileValidationError = (state: TRootReducerState): TFileValidationError[] => {
  return state.sloping.fileValidationErrors;
};
