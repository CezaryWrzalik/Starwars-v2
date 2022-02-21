import { ActionType } from "../actions-types";

interface SAVE_DATA {
  type: ActionType.SAVE_DATA;
  payload: {
    category: string;
    data: {}[];
  };
}

export type DataAction = SAVE_DATA;

interface UPDATE_FILTERS {
  type: ActionType.UPDATE_FILTERS;
  payload: {
    filters: {};
  };
}

export type FiltersAction = UPDATE_FILTERS;

interface TOGGLE_THEME {
  type: ActionType.TOGGLE_THEME;
  payload: {
    theme: string;
  };
}

export type ThemeAction = TOGGLE_THEME;

interface UPDATE_RESPONSE {
  type: ActionType.UPDATE_STATUS;
  payload: {
    title: string;
    status: string;
    message: string;
  };
}

export type ResponseAction = UPDATE_RESPONSE;
