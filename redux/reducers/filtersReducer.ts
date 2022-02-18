import { FiltersAction } from "../actions";
import { ActionType } from "../actions-types";

type State = {};

const initialState: State = {};

const filterReducer = (state: State = initialState, action: FiltersAction) => {
  switch (action.type) {
    case ActionType.UPDATE_FILTERS:
      return {
        state: action.payload.filters,
      };

    default:
      return state;
  }
};

export default filterReducer;
