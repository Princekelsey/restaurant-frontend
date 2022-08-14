import { Reducer } from "react";

import { State, Action } from "./types";

const reducer: Reducer<State, Action> = (state, action) => {
  if (action === undefined) {
    return state;
  }

  return action;
};

export default reducer;
