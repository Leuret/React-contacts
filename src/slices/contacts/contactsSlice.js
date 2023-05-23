import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (thunkAPI) => {
    const response = await fetch ('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    return data
  }
)

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
  extraReducers: builder => {
    builder
    .addCase(fetchContacts.pending, (state, action) => {
      //Loading
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state = action.payload
    })
    .addCase(fetchContacts.rejected, (state, action) => {
      //Error. Como el try catch
    })
  }
});

export const { getcontacts, addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;