import { Dispatch } from "redux";
import {
  DataAction,
  FiltersAction,
  ResponseAction,
  ThemeAction,
} from "../actions";
import { ActionType } from "../actions-types";

export const updateFilters = (filters: object) => {
  return (dispatch: Dispatch<FiltersAction>) => {
    dispatch({
      type: ActionType.UPDATE_FILTERS,
      payload: {
        filters,
      },
    });
  };
};

export const saveData = (category: string, data: {}[]) => {
  return (dispatch: Dispatch<DataAction>) => {
    dispatch({
      type: ActionType.SAVE_DATA,
      payload: {
        category,
        data,
      },
    });
  };
};

export const toggleTheme = (theme: string) => {
  return (dispatch: Dispatch<ThemeAction>) => {
    dispatch({
      type: ActionType.TOGGLE_THEME,
      payload: {
        theme,
      },
    });
  };
};

export const updateResponse = (
  status: string,
  message: string,
  title: string
) => {
  return (dispatch: Dispatch<ResponseAction>) => {
    dispatch({
      type: ActionType.UPDATE_STATUS,
      payload: {
        title,
        status,
        message,
      },
    });
  };
};
