import { Observable } from "rxjs";
import { mapTo, tap } from "rxjs/operators";
import {
  SetPlatinumAction,
  SetPlatinumOkAction,
  MetalActionTypes,
  setPlatinumOk
} from "../actions/metals";
import { ActionsObservable, ofType, combineEpics } from "redux-observable";

export const setPlatinumEpic = (
  action$: ActionsObservable<Pick<SetPlatinumAction, "type">>
): Observable<SetPlatinumOkAction> =>
  action$.pipe(
    ofType<Pick<SetPlatinumAction, "type">, SetPlatinumAction>(
      MetalActionTypes.SET_PLATINUM
    ),
    tap(x => console.warn("platinum", x.payload.platinum)),
    mapTo(setPlatinumOk())
  );

export default combineEpics(setPlatinumEpic);
