import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk";
import { compose } from "redux";

import { isProduction } from "src/core/CONSTS";

import userReducers from "../features/user/reducer";
import videoReducers from "../features/video/reducer";
import freightTensionReducers from "../features/RCDMRostov/FreightTension/reducer";
import descartesBookConverterReducer from "../features/RCDMRostov/DescartesBookConverter/reducer";

let rootReducer = combineReducers({
  user: userReducers,
  video: videoReducers,
  freightTension: freightTensionReducers,
  descartesBookConverter: descartesBookConverterReducer,
});

type TRootReducer = typeof rootReducer; // тут будет (state: GlobslState) => GlobalState, typeof после отработки опрелдеит такой тип: (state: GlobslState) => GlobalState для функции rootStore
export type TRootReducerState = ReturnType<TRootReducer>; // тут мы вытащили тип GlobslState (то есть то что функуия возвращает) из типа редюсера

// @ts-ignore
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // это для использования extension'а redux dev tools в Google Chrome

if (isProduction) {
  composeEnhancers = compose;
}

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleWare)));

export default store;
