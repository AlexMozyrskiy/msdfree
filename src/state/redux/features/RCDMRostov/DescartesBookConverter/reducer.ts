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
  TSetKilometers as TSetKilometersType,
  TSetKilometersSheet as TSetKilometersSheetType,
  TSetFourthDegrees as TSetFourthDegreesType,
  TSetThirdDegrees as TSetThirdDegreesType,
  TSetSecondDegrees as TSetSecondDegreesType,
  TSetRetreatsSheet as TSetRetreatsSheetType,
  TSetFileValidationErrors as TSetFileValidationErrorsType,
} from './actionTypes';

import { IKilometer, IRetreat, TFileValidationError } from './actionCreators';

import { TForXLSXAoA } from 'src/pages/user/RailWays/RCDMRostov/DescartesBookConverter/helpers/reportsCalculating/book';

interface IInitialState {
  dataFromUploadFile: {
    kilometers: IKilometer[];
    fourthDegrees: IRetreat[];
    thirdDegrees: IRetreat[];
    secondDegrees: IRetreat[];
  };
  reports: {
    book1: {
      kilometersSheet: {
        AoA: TForXLSXAoA;
        isCalculated: boolean;
      };
      retreatsSheet: {
        AoA: TForXLSXAoA;
        isCalculated: boolean;
      };
    };
  };
  fileValidationErrors: TFileValidationError[];
}

interface IAction extends IInitialState {
  type:
    | TSetKilometersType
    | TSetFileValidationErrorsType
    | TSetKilometersSheetType
    | TSetFourthDegreesType
    | TSetThirdDegreesType
    | TSetSecondDegreesType
    | TSetRetreatsSheetType;
}

const initialState: IInitialState = {
  dataFromUploadFile: {
    kilometers: [],
    fourthDegrees: [],
    thirdDegrees: [],
    secondDegrees: [],
  },
  reports: {
    book1: {
      kilometersSheet: {
        AoA: [[]],
        isCalculated: false,
      },
      retreatsSheet: {
        AoA: [[]],
        isCalculated: false,
      },
    },
  },
  fileValidationErrors: [],
};

const descartesBookConverterReducer = (state = initialState, action: IAction): IInitialState => {
  switch (action.type) {
    case SET_KILOMETERS_TYPE: {
      const superState = {
        ...state,
        dataFromUploadFile: {
          ...state.dataFromUploadFile,
          kilometers: action.dataFromUploadFile.kilometers.map((kilometer) => {
            return {
              ...kilometer,
            };
          }),
          fourthDegrees: state.dataFromUploadFile.fourthDegrees.map((item) => {
            return {
              ...item,
            };
          }),
          thirdDegrees: state.dataFromUploadFile.thirdDegrees.map((item) => {
            return {
              ...item,
            };
          }),
          secondDegrees: state.dataFromUploadFile.secondDegrees.map((item) => {
            return {
              ...item,
            };
          }),
        },

        reports: {
          book1: {
            kilometersSheet: {
              AoA: state.reports.book1.kilometersSheet.AoA,
              isCalculated: state.reports.book1.kilometersSheet.isCalculated,
            },
            retreatsSheet: {
              AoA: state.reports.book1.retreatsSheet.AoA,
              isCalculated: state.reports.book1.retreatsSheet.isCalculated,
            },
          },
        },

        fileValidationErrors: [...state.fileValidationErrors],
      };

      return superState;
    }

    case SET_KILOMETERS_SHEET_TYPE: {
      const superState = {
        ...state,
        reports: {
          book1: {
            kilometersSheet: {
              AoA: action.reports.book1.kilometersSheet.AoA,
              isCalculated: action.reports.book1.kilometersSheet.isCalculated,
            },
            retreatsSheet: {
              AoA: state.reports.book1.retreatsSheet.AoA.map((item) => {
                return item.map((row) => {
                  return row;
                });
              }),
              isCalculated: state.reports.book1.retreatsSheet.isCalculated,
            },
          },
        },

        dataFromUploadFile: {
          ...state.dataFromUploadFile,
          kilometers: state.dataFromUploadFile.kilometers.map((kilometer) => {
            return {
              ...kilometer,
            };
          }),
          fourthDegrees: state.dataFromUploadFile.fourthDegrees.map((item) => {
            return {
              ...item,
            };
          }),
          thirdDegrees: state.dataFromUploadFile.thirdDegrees.map((item) => {
            return {
              ...item,
            };
          }),
          secondDegrees: state.dataFromUploadFile.secondDegrees.map((item) => {
            return {
              ...item,
            };
          }),
        },

        fileValidationErrors: [...state.fileValidationErrors],
      };

      return superState;
    }

    case SET_FOURTH_DEGREES_TYPE: {
      const superState = {
        ...state,
        dataFromUploadFile: {
          ...state.dataFromUploadFile,
          kilometers: state.dataFromUploadFile.kilometers.map((kilometer) => {
            return {
              ...kilometer,
            };
          }),
          fourthDegrees: action.dataFromUploadFile.fourthDegrees.map((item) => {
            return {
              ...item,
            };
          }),
          thirdDegrees: state.dataFromUploadFile.thirdDegrees.map((item) => {
            return {
              ...item,
            };
          }),
          secondDegrees: state.dataFromUploadFile.secondDegrees.map((item) => {
            return {
              ...item,
            };
          }),
        },

        reports: {
          book1: {
            kilometersSheet: {
              AoA: state.reports.book1.kilometersSheet.AoA,
              isCalculated: state.reports.book1.kilometersSheet.isCalculated,
            },
            retreatsSheet: {
              AoA: state.reports.book1.retreatsSheet.AoA,
              isCalculated: state.reports.book1.retreatsSheet.isCalculated,
            },
          },
        },

        fileValidationErrors: [...state.fileValidationErrors],
      };

      return superState;
    }

    case SET_THIRD_DEGREES_TYPE: {
      const superState = {
        ...state,
        dataFromUploadFile: {
          ...state.dataFromUploadFile,
          kilometers: state.dataFromUploadFile.kilometers.map((kilometer) => {
            return {
              ...kilometer,
            };
          }),
          fourthDegrees: state.dataFromUploadFile.fourthDegrees.map((item) => {
            return {
              ...item,
            };
          }),
          thirdDegrees: action.dataFromUploadFile.thirdDegrees.map((item) => {
            return {
              ...item,
            };
          }),
          secondDegrees: state.dataFromUploadFile.secondDegrees.map((item) => {
            return {
              ...item,
            };
          }),
        },

        reports: {
          book1: {
            kilometersSheet: {
              AoA: state.reports.book1.kilometersSheet.AoA,
              isCalculated: state.reports.book1.kilometersSheet.isCalculated,
            },
            retreatsSheet: {
              AoA: state.reports.book1.retreatsSheet.AoA,
              isCalculated: state.reports.book1.retreatsSheet.isCalculated,
            },
          },
        },

        fileValidationErrors: [...state.fileValidationErrors],
      };

      return superState;
    }

    case SET_SECOND_DEGREES_TYPE: {
      const superState = {
        ...state,
        dataFromUploadFile: {
          ...state.dataFromUploadFile,
          kilometers: state.dataFromUploadFile.kilometers.map((kilometer) => {
            return {
              ...kilometer,
            };
          }),
          fourthDegrees: state.dataFromUploadFile.fourthDegrees.map((item) => {
            return {
              ...item,
            };
          }),
          thirdDegrees: state.dataFromUploadFile.thirdDegrees.map((item) => {
            return {
              ...item,
            };
          }),
          secondDegrees: action.dataFromUploadFile.secondDegrees.map((item) => {
            return {
              ...item,
            };
          }),
        },

        reports: {
          book1: {
            kilometersSheet: {
              AoA: state.reports.book1.kilometersSheet.AoA,
              isCalculated: state.reports.book1.kilometersSheet.isCalculated,
            },
            retreatsSheet: {
              AoA: state.reports.book1.retreatsSheet.AoA,
              isCalculated: state.reports.book1.retreatsSheet.isCalculated,
            },
          },
        },

        fileValidationErrors: [...state.fileValidationErrors],
      };

      return superState;
    }

    case SET_RETREATS_SHEET_TYPE: {
      const superState = {
        ...state,
        reports: {
          book1: {
            kilometersSheet: {
              AoA: state.reports.book1.kilometersSheet.AoA,
              isCalculated: state.reports.book1.kilometersSheet.isCalculated,
            },
            retreatsSheet: {
              AoA: action.reports.book1.retreatsSheet.AoA.map((item) => {
                return item.map((row) => {
                  return row;
                });
              }),
              isCalculated: action.reports.book1.retreatsSheet.isCalculated,
            },
          },
        },

        dataFromUploadFile: {
          ...state.dataFromUploadFile,
          kilometers: state.dataFromUploadFile.kilometers.map((kilometer) => {
            return {
              ...kilometer,
            };
          }),
          fourthDegrees: state.dataFromUploadFile.fourthDegrees.map((item) => {
            return {
              ...item,
            };
          }),
          thirdDegrees: state.dataFromUploadFile.thirdDegrees.map((item) => {
            return {
              ...item,
            };
          }),
          secondDegrees: state.dataFromUploadFile.secondDegrees.map((item) => {
            return {
              ...item,
            };
          }),
        },

        fileValidationErrors: [...state.fileValidationErrors],
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

export default descartesBookConverterReducer;
