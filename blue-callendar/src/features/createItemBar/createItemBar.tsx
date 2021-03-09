import React, {FC} from 'react';
import {useSelector} from "react-redux";
import {selectEvents} from "../event/EventStore/EventSlice";
import CalendarEvent from "../event/CalendarEvent/CalendarEvent";
import CreateButton from "./createButton";
import {selectTasks} from "../task/TaskStore/TaskSlice";
import CalendarTask from "../task/CalendarTasks/CalendarTask";

const CreateItemBar: FC = () => {
    const events = useSelector(selectEvents);
    const tasks = useSelector(selectTasks);

    let id = '0';
    const time = (new Date()).toISOString();

    if (events.length > 0) {
        id = events[events.length - 1].getId() + 1;
    }
    if (tasks.length > 0) {
        id = tasks[tasks.length - 1].getId() + 1;
    }

    const emptyEvent = new CalendarEvent(id, '', '', time, time, 'BLUE', [], time);
    const emptyTask = new CalendarTask(id, '', '', '', '', '');

    return (
        <>
            <CreateButton item={emptyEvent} buttonTitle="Create Event"/>
            <CreateButton item={emptyTask} buttonTitle="Create Task"/>
        </>
    );
}

export default CreateItemBar;