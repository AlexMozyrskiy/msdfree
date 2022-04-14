import { SET_RETREATS_FROM_UPLOAD as SET_RETREATS_FROM_UPLOAD_TYPE, SET_RETREATS_FOR_REPORT as SET_RETREATS_FOR_REPORT_TYPE, SET_FILE_VALIDATION_ERRORS as SET_FILE_VALIDATION_ERRORS_TYPE } from "./actionTypes";

import { TSetRetreatsFromUpload, TSetRetreatsForReport, TSetFileValidationErrors } from "./actionTypes";

// import { IReturnedObj as IReturnedObjBookSheetKilometers } from 'src/pages/user/RailWays/RCDMRostov/DescartesBookConverter/helpers/reportsCalculating/book';
// import { TForXLSXAoA } from "src/pages/user/RailWays/RCDMRostov/Sloping/helpers/reportsCalculating/book";

type TForXLSXAoA = (string | number)[][];

export interface IRetreat {
  id: number;
  psName: string;
  date: string;
  trackNumber: string;
  distanceNumber: number;
  directionCode: number;
  kilometer: number;
  picket: number;
  meter: number;
  retreatLength: string;
  thred: string;
  retreatAmplitude1: string;
  retreatAmplitude2: string;
}

export type TFileValidationError = string;

interface ISetRetreatsFromUploadReturn {
  type: TSetRetreatsFromUpload;
  dataFromUploadFile: {
    retreats: IRetreat[];
  };
}

interface ISetRetreatsForReportReturn {
  type: TSetRetreatsForReport;
  reports: {
    book: {
      retreatsSheet: {
        AoA: TForXLSXAoA;
        isCalculated: boolean;
      };
    };
  };
}

interface ISetFileValidationErrorsReturn {
  type: TSetFileValidationErrors;
  fileValidationErrors: TFileValidationError[];
}

export const setSetRetreatsFromUpload = (retreats: IRetreat[]): ISetRetreatsFromUploadReturn => {
  return {
    type: SET_RETREATS_FROM_UPLOAD_TYPE,
    dataFromUploadFile: {
      retreats,
    },
  };
};

export const setRetreatsForReport = (AoA: TForXLSXAoA): ISetRetreatsForReportReturn => {
  return {
    type: SET_RETREATS_FOR_REPORT_TYPE,
    reports: {
      book: {
        retreatsSheet: {
          AoA,
          isCalculated: true,
        },
      },
    },
  };
};

export const setFileValidationErrors = (fileValidationErrors: TFileValidationError[]): ISetFileValidationErrorsReturn => {
  return {
    type: SET_FILE_VALIDATION_ERRORS_TYPE,
    fileValidationErrors,
  };
};
