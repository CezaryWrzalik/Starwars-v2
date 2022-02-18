import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import filterReducer from "./filtersReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  data: dataReducer,
  filter: filterReducer,
  theme: themeReducer,
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;
