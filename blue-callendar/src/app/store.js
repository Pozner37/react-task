import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/event/taskSlice';
import eventReducer from '../features/event/eventSlice';

export default configureStore({
  reducer: {
    tasks: taskReducer,
    events: eventReducer,
  },
});
