import {
  SET_KILOMETERS as SET_KILOMETERS_TYPE,
  SET_KILOMETERS_SHEET as SET_KILOMETERS_SHEET_TYPE,
  SET_FOURTH_DEGREES as SET_FOURTH_DEGREES_TYPE,
  SET_THIRD_DEGREES as SET_THIRD_DEGREES_TYPE,
  SET_SECOND_DEGREES as SET_SECOND_DEGREES_TYPE,
  SET_RETREATS_SHEET as SET_RETREATS_SHEET_TYPE,
  SET_FILE_VALIDATION_ERRORS as SET_FILE_VALIDATION_ERRORS_TYPE,
} from './actionTypes';

import {
  TSetKilometers,
  TSetKilometersSheet,
  TSetFourthDegrees,
  TSetThirdDegrees,
  TSetSecondDegrees,
  TSetRetreatsSheet,
  TSetFileValidationErrors,
} from './actionTypes';

// import { IReturnedObj as IReturnedObjBookSheetKilometers } from 'src/pages/user/RailWays/RCDMRostov/DescartesBookConverter/helpers/reportsCalculating/book';
import { TForXLSXAoA } from 'src/pages/user/RailWays/RCDMRostov/DescartesBookConverter/helpers/reportsCalculating/book';

/* Для листа "Оценка Км" */
export interface IKilometer {
  id: number;
  distanceNumber: number;
  year: number;
  month: number;
  day: number;
  diagnosticToolNumber: number;
  checkType: number;
  directionCode: number;
  trackNumber: string;
  kilometer: number;
  grade: number;
  score: number;
  checked: number;
  passLimitSpeed: number | null;
  freightLimitSpeed: number | null;
  passSetSpeed: number | null;
  reightSetSpeed: number | null;
  note: string;
}

/* Для листа "Отступления" */
export interface IRetreat {
  id: number;
  distanceNumber: number;
  year: number;
  month: number;
  day: number;
  diagnosticToolNumber: number;
  checkType: number;
  directionCode: number;
  trackNumber: string;
  kilometer: number;
  picket: number;
  meter: number;
  retreatName: string;
  retreatDegree: number;
  retreatAmplitude: string;
  retreatLength: string;
  retreatScore: number;
  retreatCount: number;
  passLimitSpeed: number | null;
  freightLimitSpeed: number | null;
  passSetSpeed: number | null;
  freightSetSpeed: number | null;
  norm: number;
  subgrade: number;
  insulatingGap: number;
  bridge: number;
  prPredupr: number;
  note: string;
}

export type TFileValidationError = string;

interface ISetKilometersReturn {
  type: TSetKilometers;
  dataFromUploadFile: {
    kilometers: IKilometer[];
  };
}

interface ISetKilometersSheetReturn {
  type: TSetKilometersSheet;
  reports: {
    book1: {
      kilometersSheet: {
        AoA: TForXLSXAoA;
        isCalculated: boolean;
      };
    };
  };
}

interface ISetFourthDegreesReturn {
  type: TSetFourthDegrees;
  dataFromUploadFile: {
    fourthDegrees: IRetreat[];
  };
}

interface ISetThirdDegreesReturn {
  type: TSetThirdDegrees;
  dataFromUploadFile: {
    thirdDegrees: IRetreat[];
  };
}

interface ISetSecondDegreesReturn {
  type: TSetSecondDegrees;
  dataFromUploadFile: {
    secondDegrees: IRetreat[];
  };
}

interface ISetRetreatsSheetReturn {
  type: TSetRetreatsSheet;
  reports: {
    book1: {
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

export const setFourthDegrees = (retreats: IRetreat[]): ISetFourthDegreesReturn => {
  return {
    type: SET_FOURTH_DEGREES_TYPE,
    dataFromUploadFile: {
      fourthDegrees: retreats,
    },
  };
};

export const setThirdDegrees = (retreats: IRetreat[]): ISetThirdDegreesReturn => {
  return {
    type: SET_THIRD_DEGREES_TYPE,
    dataFromUploadFile: {
      thirdDegrees: retreats,
    },
  };
};

export const setSecondDegrees = (retreats: IRetreat[]): ISetSecondDegreesReturn => {
  return {
    type: SET_SECOND_DEGREES_TYPE,
    dataFromUploadFile: {
      secondDegrees: retreats,
    },
  };
};

export const setRetreatsSheet = (AoA: TForXLSXAoA): ISetRetreatsSheetReturn => {
  return {
    type: SET_RETREATS_SHEET_TYPE,
    reports: {
      book1: {
        retreatsSheet: {
          AoA,
          isCalculated: true,
        },
      },
    },
  };
};

export const setKilometersSheet = (AoA: TForXLSXAoA): ISetKilometersSheetReturn => {
  return {
    type: SET_KILOMETERS_SHEET_TYPE,
    reports: {
      book1: {
        kilometersSheet: {
          AoA,
          isCalculated: true,
        },
      },
    },
  };
};

export const setKilometers = (kilometers: IKilometer[]): ISetKilometersReturn => {
  return {
    type: SET_KILOMETERS_TYPE,
    dataFromUploadFile: {
      kilometers,
    },
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
