import * as metalReducers from "./metals";
import { combineReducers } from "redux";
import { createSelector } from "reselect";

export type State = {
  readonly metals: metalReducers.State;
};

export const initialState: State = {
  metals: metalReducers.initialState
};

export const reducer = combineReducers<State>({
  metals: metalReducers.reducer
});

export const selectMetalsState = createSelector(
  (state: State) => state.metals,
  state => state
);

export const selectMetalsStatePlatinum = createSelector(
  selectMetalsState,
  state => state.platinum
);

export const selectMetalStateGold = createSelector(
  selectMetalsState,
  state => state.gold
);

export const selectMetalStateSilverNonMemo = (state: State): number =>
  state.metals.silver;
export const selectMetalStateCopperNonMemo = (state: State): number =>
  state.metals.copper;
