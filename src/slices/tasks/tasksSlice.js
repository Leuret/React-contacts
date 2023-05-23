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
    addTodo: (state, action) => {
      state.tasks.push({ id: Date.now(), text: action.payload });
    },
    deleteTodo: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
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

export const { addTodo, deleteTodo } = tasksSlice.actions;

export default tasksSlice.reducer;