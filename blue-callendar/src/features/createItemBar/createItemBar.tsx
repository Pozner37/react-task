import React from 'react';
import {useSelector} from "react-redux";
import {selectEvents} from "../event/EventSlice";
import CalendarEvent from "../event/CalendarEvent";
import CreateButton from "./createButton";
import {selectTasks} from "../task/TaskSlice";
import CalendarTask from "../task/CalendarTask";
import EventModalBody from "../editModal/eventModalBody";
import TaskModalBody from "../editModal/taskModalBody";

function CreateItemBar () {
    const events = useSelector(selectEvents).Events;
    const tasks = useSelector(selectTasks).Tasks;

    let id = '0';
    const time = (new Date()).toISOString();

    if(events.length > 0) {
        id = events[events.length-1].getId() + 1;
    }
    if(tasks.length > 0) {
        id = tasks[tasks.length-1].getId() + 1;
    }

    const emptyEvent = new CalendarEvent(id,'','',time,time,'BLUE',[''],time);
    const emptyTask = new CalendarTask(id,'','','','','');

    const eventBody = () => <EventModalBody item={emptyEvent} add={true}/>
    const taskBody = () => <TaskModalBody item={emptyTask} add={true}/>
    return (
        <>
            <CreateButton body={eventBody()} buttonTitle="Create Event"/>
            <CreateButton body={taskBody()} buttonTitle="Create Task"/>
        </>
    );
}

export default CreateItemBar;