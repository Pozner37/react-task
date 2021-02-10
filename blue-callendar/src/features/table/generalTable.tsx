import React from 'react';
import CalendarTable from "./calendarTable";
import {useSelector} from "react-redux";
import {selectEvents} from "../event/EventSlice";
import CalendarEvent from "../event/CalendarEvent";
import EventTableRow from "../event/eventTableRow";
import GeneralTableRow from "./generalTableRow";
import NotificationsIcon from "@material-ui/icons/Notifications";
import RemoveIcon from "@material-ui/icons/Remove";
import EventOther from "../event/eventOther";
import EventCollapseBody from "../event/eventCollapseBody";

function GeneralTable() {
    const head = ['Type', 'Priority', 'Title', 'Other', 'Actions'];
    const events = useSelector(selectEvents).Events;
    const eventRows = () => events.map((event: CalendarEvent) => (
        <GeneralTableRow key={event.getId()} item={event} typeIcon={<NotificationsIcon/>} priorityIcon={<RemoveIcon/>}
                         other={<EventOther event={event}/>}
                         collapseBody={<EventCollapseBody event={event}/>}></GeneralTableRow>));
    return (
        <CalendarTable head={head} body={eventRows()}></CalendarTable>
    );
}

export default GeneralTable;