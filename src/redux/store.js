import { configureStore, createAction } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  },
  filters: {
    name: "",
  },
};

const addContactActionType = "contacts/add";
const deleteContactActionType = "contacts/delete";
const changeNameFilterActionType = "filters/changeName";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case addContactActionType:
      console.log(`${addContactActionType} is called with payload:`);
      console.log(action.payload);
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items, action.payload],
        },
      };

    case deleteContactActionType:
      console.log(
        `${deleteContactActionType} is called with payload (${action.payload})`
      );
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: state.contacts.items.filter(
            (contact) => contact.id !== action.payload
          ),
        },
      };

    case changeNameFilterActionType:
      return {
        ...state,
        filters: {
          ...state.filters,
          name: action.payload,
        },
      };

    default:
      return state;
  }
};

export const store = configureStore({
  reducer: rootReducer,
});

// Actions
export const addContact = createAction(addContactActionType);
export const deleteContact = createAction(deleteContactActionType);
export const filterByName = createAction(changeNameFilterActionType);
