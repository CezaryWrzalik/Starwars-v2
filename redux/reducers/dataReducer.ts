import { DataAction } from "../actions";
import { ActionType } from "../actions-types";

type State = {
  data: {
    films: Array<Object>;
    people: Array<Object>;
    planets: Array<Object>;
    species: Array<Object>;
    starships: Array<Object>;
    vehicles: Array<Object>;
  };
};

const initialState: State = {
  data: {
    films: [],
    people: [],
    planets: [],
    species: [],
    starships: [],
    vehicles: [],
  },
};

const reducer = (state: State = initialState, action: DataAction) => {
  switch (action.type) {
    case ActionType.SAVE_DATA:
      return {
        data: {
          ...state.data,
          [action.payload.category]: [...action.payload.data],
        },
      };
    default:
      return state;
  }
};

export default reducer;
