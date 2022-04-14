import { SET_RETREATS_FROM_UPLOAD as SET_RETREATS_FROM_UPLOAD_TYPE, SET_RETREATS_FOR_REPORT as SET_RETREATS_FOR_REPORT_TYPE, SET_FILE_VALIDATION_ERRORS as SET_FILE_VALIDATION_ERRORS_TYPE } from "./actionTypes";

import { TSetRetreatsFromUpload as TSetRetreatsFromUploadActionType, TSetRetreatsForReport as TSetRetreatsForReportActionType, TSetFileValidationErrors as TSetFileValidationErrorsActionType } from "./actionTypes";

import { IRetreat, TFileValidationError } from "./actionCreators";

// import { TForXLSXAoA } from "src/pages/user/RailWays/RCDMRostov/DescartesBookConverter/helpers/reportsCalculating/book";

type TForXLSXAoA = (string | number)[][];

interface IInitialState {
  dataFromUploadFile: {
    retreats: IRetreat[];
  };
  reports: {
    book1: {
      retreatsSheet: {
        AoA: TForXLSXAoA;
        isCalculated: boolean;
      };
    };
  };
  fileValidationErrors: TFileValidationError[];
}

interface IAction extends IInitialState {
  type: TSetRetreatsFromUploadActionType | TSetRetreatsForReportActionType | TSetFileValidationErrorsActionType;
}

const initialState: IInitialState = {
  dataFromUploadFile: {
    retreats: [] as IRetreat[],
  },
  reports: {
    book1: {
      retreatsSheet: {
        AoA: [[]] as TForXLSXAoA,
        isCalculated: false,
      },
    },
  },
  fileValidationErrors: [],
};

const slopingReducer = (state = initialState, action: IAction): IInitialState => {
  switch (action.type) {
    case SET_RETREATS_FROM_UPLOAD_TYPE: {
      const superState = {
        ...state,
        dataFromUploadFile: {
          retreats: [...action.dataFromUploadFile.retreats],
        },
      };

      return superState;
    }

    case SET_RETREATS_FOR_REPORT_TYPE: {
      const superState = {
        ...state,
        reports: {
          book1: {
            retreatsSheet: {
              AoA: [...action.reports.book1.retreatsSheet.AoA],
              isCalculated: action.reports.book1.retreatsSheet.isCalculated,
            },
          },
        },
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

export default slopingReducer;
