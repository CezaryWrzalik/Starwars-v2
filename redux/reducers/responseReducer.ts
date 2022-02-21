import { ResponseAction } from "../actions";
import { ActionType } from "../actions-types";

type State = {
  status: string;
  message: string;
  title: string;
};

const initialState: State = {
  status: "",
  message: "",
  title: "",
};

const responseReducer = (
  state: State = initialState,
  action: ResponseAction
) => {
  switch (action.type) {
    case ActionType.UPDATE_STATUS:
      return {
        status: action.payload.status,
        message: action.payload.message,
        title: action.payload.title,
      };

    default:
      return state;
  }
};

export default responseReducer;
