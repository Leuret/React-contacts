import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    getcontacts: state => state.contacts,
    addcontacts: (state, action) => {
      state.contacts.push(action.payload)
    }
  },
});

export const { getcontacts, addcontacts } = contactsSlice.actions;

export default contactsSlice.reducer;