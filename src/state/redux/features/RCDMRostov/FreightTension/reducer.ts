import {
  SET_RETREATS as SET_RETREATS_TYPE,
  SET_KILOMETERS as SET_KILOMETERS_TYPE,
  SET_CARGOS as SET_CARGOS_TYPE,
  SET_FREIGHT_TENSION as SET_FREIGHT_TENSION_TYPE,
  SET_FILE_VALIDATION_ERRORS as SET_FILE_VALIDATION_ERRORS_TYPE,
} from './actionTypes';

import {
  TSetRetreats as TSetRetreatsType,
  TSetKilometers as TSetKilometersType,
  TSetCargos as TSetCargosType,
  TSetFreightTension as TSetFreightTensionType,
  TSetFileValidationErrors as TSetFileValidationErrorsType,
} from './actionTypes';

import { IRetreat, IKilometer, ICargo, IFreightTension, TFileValidationError } from './actionCreators';

interface IInitialState {
  retreats: IRetreat[];
  kilometers: IKilometer[];
  cargos: ICargo[];
  freightTension: IFreightTension;
  fileValidationErrors: TFileValidationError[];
}

interface IAction extends IInitialState {
  type: TSetRetreatsType | TSetKilometersType | TSetCargosType | TSetFileValidationErrorsType | TSetFreightTensionType;
}

const initialState: IInitialState = {
  retreats: [],
  kilometers: [],
  cargos: [],
  freightTension: { isCalculated: false, forXLSXAoA: [['']] },
  fileValidationErrors: [],
};

const freightTensionReducers = (state = initialState, action: IAction): IInitialState => {
  switch (action.type) {
    case SET_RETREATS_TYPE: {
      const superState = {
        ...state,
        retreats: state.retreats
          .map((retreat) => {
            return {
              ...retreat,
            };
          })
          .concat(
            action.retreats.map((retreat) => {
              return {
                ...retreat,
              };
            })
          ),
      };
      return superState;
    }

    case SET_KILOMETERS_TYPE: {
      const superState = {
        ...state,
        kilometers: action.kilometers.map((kilometer) => {
          return {
            ...kilometer,
          };
        }),
      };

      return superState;
    }

    case SET_CARGOS_TYPE: {
      const superState = {
        ...state,
        cargos: action.cargos.map((cargo) => {
          return {
            ...cargo,
          };
        }),
      };

      return superState;
    }

    case SET_FREIGHT_TENSION_TYPE: {
      const superState = {
        ...state,
        freightTension: { ...action.freightTension, isCalculated: true },
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

export default freightTensionReducers;
