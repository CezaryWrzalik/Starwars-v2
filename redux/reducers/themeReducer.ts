import { ThemeAction } from "../actions";
import { ActionType } from "../actions-types";

type State = {
  theme: string;
};

const initialState: State = {
  theme: "light",
};

const filterReducer = (state: State = initialState, action: ThemeAction) => {
  switch (action.type) {
    case ActionType.TOGGLE_THEME:
      return {
        theme: action.payload.theme
      };

    default:
      return state;
  }
};

export default filterReducer;
