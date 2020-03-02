import { MetalAction, MetalActionTypes } from "../actions/metals";

export type State = {
  readonly platinum: number;
  readonly gold: number;
  readonly silver: number;
  readonly copper: number;
};

export const initialState: State = {
  platinum: 10,
  gold: 20,
  silver: 30,
  copper: 40
};

export const reducer = (
  state: State = initialState,
  action: MetalAction
): State =>
  action.type === MetalActionTypes.SET_PLATINUM
    ? {
        ...state,
        platinum: action.payload.platinum
      }
    : state;
