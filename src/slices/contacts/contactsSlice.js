import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [{
    name: "Fulanito",
    mail: "fulanito@mail",
    phone: "92374813"
  },
  {
    name: "Menganita",
    mail: "fulanito@mail",
    phone: "92374813"
  },
  {
    name: "Pepito",
    mail: "fulanito@mail",
    phone: "92374813"
  },
  {
    name: "Margarita",
    mail: "fulanito@mail",
    phone: "92374813"
  }],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    getContacts: state => state.contacts,
    addContact: (state, action) => {
      state.contacts.push(action.payload)
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter( (contact, index) =>
        index !== action.payload
      )
    }
  },
});

export const { getcontacts, addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;