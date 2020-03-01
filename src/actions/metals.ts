export enum MetalActionTypes {
  SET_PLATINUM = "SET_PLATINUM",
  SET_PLATINUM_OK = "SET_PLATINUM_OK"
}

export type SetPlatinumAction = {
  readonly type: MetalActionTypes.SET_PLATINUM;
  readonly payload: {
    readonly platinum: number;
  };
};

export type SetPlatinumOkAction = {
  readonly type: MetalActionTypes.SET_PLATINUM_OK;
};

export function setPlatinum(platinum: number): SetPlatinumAction {
  return {
    type: MetalActionTypes.SET_PLATINUM,
    payload: { platinum }
  };
}

export function setPlatinumOk(options?: {}): SetPlatinumOkAction {
  return {
    type: MetalActionTypes.SET_PLATINUM_OK
  };
}

export type MetalAction = SetPlatinumAction | SetPlatinumOkAction