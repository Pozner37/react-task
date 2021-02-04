import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/task/TaskSlice';
import eventReducer from '../features/event/EventSlice';

export default configureStore({
  reducer: {
    tasks: taskReducer,
    events: eventReducer,
  },
});
