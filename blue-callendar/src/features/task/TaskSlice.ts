import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import taskReader from "./TaskReader";
import CalendarTask from "./CalendarTask";

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        Tasks: taskReader.getTasks()
    },
    reducers: {
        removeTask(state, action: PayloadAction<CalendarTask>) {
            const newTaskList:CalendarTask[] = state.Tasks.filter((task) => task!==action.payload);
            return {Tasks: newTaskList};
        },
        addTask(state, action:PayloadAction<CalendarTask>) {
            state.Tasks.push(action.payload);
        }
    },
});

export const selectTasks = (state: any) => state.tasks;

export const { removeTask, addTask } = taskSlice.actions

export default taskSlice.reducer;
