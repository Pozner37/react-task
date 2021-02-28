import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import taskReader from "./TaskReader";
import CalendarTask from "./CalendarTask";
import CalendarEvent from "../event/CalendarEvent";

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        Tasks: taskReader.getTasks()
    },
    reducers: {
        removeTask(state, action: PayloadAction<CalendarTask>) {
            state.Tasks = state.Tasks.filter((task) => task !== action.payload);
        },
        addTask(state, action:PayloadAction<CalendarTask>) {
            state.Tasks.push(action.payload);
        },
        updateTask(state, action: PayloadAction<CalendarTask>) {
            let newTaskList: CalendarTask[] = state.Tasks;
            newTaskList = newTaskList.map(task => {
                if (task.getId() === action.payload.getId()) {
                    return action.payload;
                }
                return task
            });
            return {Tasks: newTaskList};
        }
    },
});

export const selectTasks = (state: any) => state.tasks;

export const { removeTask, addTask, updateTask} = taskSlice.actions

export default taskSlice.reducer;
