import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from './slices/contacts/contactsSlice'
import tasksReducer from './slices/tasks/tasksSlice'

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    tasks: tasksReducer
    // More reducers FROM slice
  },
  devTools: true
})

export default store