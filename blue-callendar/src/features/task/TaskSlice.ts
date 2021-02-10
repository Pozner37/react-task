import {createSlice} from '@reduxjs/toolkit';
import taskReader from "./TaskReader";

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        Tasks: taskReader.getTasks()
    },
    reducers: {
    },
});

export const selectTasks = (state: any) => state.tasks;

export default taskSlice.reducer;
