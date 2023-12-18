import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    toggleDone: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
    editTask: (state, action) => {
      const { id, description } = action.payload;
      const task = state.find(task => task.id === id);
      if (task) {
        task.description = description;
      }
    },
  },
});

export const { addTask, toggleDone, editTask } = taskSlice.actions;

export default taskSlice.reducer;