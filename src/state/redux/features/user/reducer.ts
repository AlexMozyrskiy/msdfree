import { SET_USER as SET_USER_TYPE, SET_IS_COOKIE_ACCEPTED as SET_IS_COOKIE_ACCEPTED_TYPE, SET_COINS as SET_COINS_TYPE } from "./actionTypes";

import { TSetUser as TSetUserType, TSetIsCookieAccepted as TSetIsCookieAcceptedType, TSetCoins as TSetCoinsType } from "./actionTypes";
import { IUser, TRole } from "./actionCreators";
import { TAffiliation } from "src/core/CONSTS";

interface IInitialState {
  id: string | null;
  email: string | null;
  login: string | null;
  affiliation: TAffiliation | null;
  isActivated: boolean | null;
  coins: number | null;
  isCookieAccepted: boolean;
  role: TRole[];
}

interface IAction {
  type: TSetUserType | TSetIsCookieAcceptedType | TSetCoinsType;
  user: IUser;
  isCookieAccepted: boolean;
  coins: number;
}

const initialState: IInitialState = {
  id: "1a",
  email: "free@gmail.com",
  login: "free",
  affiliation: "ЖД",
  isActivated: true,
  isCookieAccepted: true,
  coins: 500,
  role: ["user"],
};

const userReducers = (state = initialState, action: IAction): IInitialState => {
  switch (action.type) {
    case SET_USER_TYPE: {
      const superState = {
        ...state,
        id: action.user.id,
        email: action.user.email,
        login: action.user.login,
        affiliation: action.user.affiliation,
        isActivated: action.user.isActivated,
        coins: action.user.coins,
        role: action.user.role,
      };
      return superState;
    }

    case SET_IS_COOKIE_ACCEPTED_TYPE: {
      const superState = {
        ...state,
        isCookieAccepted: action.isCookieAccepted,
      };
      return superState;
    }

    case SET_COINS_TYPE: {
      const superState = {
        ...state,
        coins: action.coins,
      };
      return superState;
    }

    default:
      return state;
  }
};

export default userReducers;
