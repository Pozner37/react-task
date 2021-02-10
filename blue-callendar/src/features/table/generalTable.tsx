import React from 'react';
import CalendarTable from "./calendarTable";
import {useSelector} from "react-redux";
import {selectEvents} from "../event/EventSlice";
import CalendarEvent from "../event/CalendarEvent";
import EventTableRow from "../event/eventTableRow";

function GeneralTable() {
    const head = ['Type', 'Priority', 'Title', 'Other', 'Actions'];
    const events = useSelector(selectEvents).Events;
    const eventRows = (eventsArr: any) => events.map((event: CalendarEvent) => (<EventTableRow key={event.getId()} event={event}></EventTableRow>));
    return (
        <CalendarTable head={head} body={eventRows({events})}></CalendarTable>
    );
}

export default GeneralTable;