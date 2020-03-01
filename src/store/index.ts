import { initialState, reducer, State } from "./../reducers";
import { AppAction } from "./../actions/index";
import { Store, createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "../epics";

const epicMiddleware = createEpicMiddleware();
const store: Store<State, AppAction> = createStore<State, AppAction, {}, {}>(
  reducer,
  initialState,
  applyMiddleware(epicMiddleware)
);
export const rootEpicRun = epicMiddleware.run(rootEpic);

export default store;
