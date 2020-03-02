import { initialState, reducer, State } from "../features/platinum/reducers";
import { AppAction } from "../features/platinum/actions/index";
import { Store, createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "../features/platinum/epics";

const epicMiddleware = createEpicMiddleware();
const store: Store<State, AppAction> = createStore<State, AppAction, {}, {}>(
  reducer,
  initialState,
  applyMiddleware(epicMiddleware)
);
export const rootEpicRun = epicMiddleware.run(rootEpic);

export default store;
