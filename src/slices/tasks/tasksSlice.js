import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  loading: false
};

export const getTasks = createAsyncThunk(
  //action type string
  'tasks/getTasks',
  // callback function
  async (thunkAPI) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos').then(
    (data) => data.json()
  )
  return res
})

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ id: Date.now(), text: action.payload });
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id)
         // return {userId: task.userId, id: task.id, title:action.payload.title, completed:action.payload.status}
         return {userId: task.userId, id: task.id, title: "New", completed: true}
        else
          return task
      })
    },
  },
  extraReducers: {
    [getTasks.pending]: (state) => {
      state.loading = true
    },
    [getTasks.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.tasks = payload
    },
    [getTasks.rejected]: (state) => {
      state.loading = false
    },
  },
});

export const { addTask, deleteTask, editTask } = tasksSlice.actions;

export default tasksSlice.reducer;