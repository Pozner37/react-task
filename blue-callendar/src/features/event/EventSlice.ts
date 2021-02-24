import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import eventReader from "./EventReader";
import CalendarEvent from "./CalendarEvent";

export const eventSlice = createSlice({
    name: 'events',
    initialState: {
        Events: eventReader.getEvents()
    },
    reducers: {
        removeEvent(state, action: PayloadAction<CalendarEvent>) {
            // const newEventList: CalendarEvent[] = state.Events.filter((event) => event !== action.payload);
            // return {Events: newEventList};
            state.Events = state.Events.filter((event) => event !== action.payload);
        },
        addEvent(state, action: PayloadAction<CalendarEvent>) {
            state.Events.push(action.payload);
        },
        updateEvent(state, action: PayloadAction<CalendarEvent>) {
            let newEventList: CalendarEvent[] = state.Events;
            newEventList = newEventList.map(event => {
                if (event.getId() === action.payload.getId()) {
                    return action.payload;
                }
                return event
            });
            return {Events: newEventList};
        }
    },
});

export const selectEvents = (state: any) => state.events;

export const {removeEvent, addEvent, updateEvent} = eventSlice.actions

export default eventSlice.reducer;
