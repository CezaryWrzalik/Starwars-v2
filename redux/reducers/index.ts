import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import filterReducer from "./filtersReducer";
import responseReducer from "./responseReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  data: dataReducer,
  filter: filterReducer,
  theme: themeReducer,
  response: responseReducer,
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;
