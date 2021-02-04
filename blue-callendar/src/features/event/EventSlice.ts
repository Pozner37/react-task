import {createSlice} from '@reduxjs/toolkit';
import eventReader from "./EventReader";
import CalendarEvent from "./CalendarEvent";

export const eventSlice = createSlice({
    name: 'events',
    initialState: {
        Events: eventReader.getEvents()
    },
    reducers: {
        // decrement: state => {
        //     state.value -= 1;
        // },
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload;
        // },
    },
});

export const {} = eventSlice.actions;

export const selectEvents = (state: any) => state.events;

export default eventSlice.reducer;
