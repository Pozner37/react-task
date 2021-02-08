import {createSlice} from '@reduxjs/toolkit';
import eventReader from "./EventReader";

export const eventSlice = createSlice({
    name: 'events',
    initialState: {
        Events: eventReader.getEvents()
    },
    reducers: {
    },
});

export const selectEvents = (state: any) => state.events;

export default eventSlice.reducer;
