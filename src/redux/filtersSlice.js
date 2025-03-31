import { createAction } from "@reduxjs/toolkit";

const changeNameFilterActionType = "filters/changeName";

export const filterByName = createAction(changeNameFilterActionType);

const initialState = {
  name: "",
};

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case changeNameFilterActionType:
      if (state.name === action.payload) return state;

      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
};
