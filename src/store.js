import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from './slices/contacts/contactsSlice'

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    // More reducers FROM slice
  },
  devTools: true
})

export default store