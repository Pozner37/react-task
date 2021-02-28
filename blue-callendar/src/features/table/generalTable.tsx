import React from 'react';
import CalendarTable from "./calendarTable";
import {useSelector} from "react-redux";
import {selectEvents} from "../event/EventSlice";
import CalendarEvent from "../event/CalendarEvent";
import GeneralTableRow from "./generalTableRow";
import NotificationsIcon from "@material-ui/icons/Notifications";
import RemoveIcon from "@material-ui/icons/Remove";
import EventOther from "../event/eventOther";
import EventCollapseBody from "../event/eventCollapseBody";
import {selectTasks} from "../task/TaskSlice";
import CalendarTask from "../task/CalendarTask";
import getTaskTypeIcon from "../task/taskTypeIcon";
import getTaskPriorityIcon from "../task/taskPriorityIcon";
import TaskOther from "../task/taskOther";
import TaskCollapseBody from "../task/taskCollapseBody";

function GeneralTable(props: any) {
    const head = ['Type', 'Priority', 'Title', 'Other', 'Actions'];
    const events = useSelector(selectEvents).Events;
    const tasks = useSelector(selectTasks).Tasks;
    const taskFilter = props.taskFilter;
    const taskRows = () => tasks.map((task: CalendarTask) => (
        <GeneralTableRow key={task.getId()} item={task} typeIcon={getTaskTypeIcon(task)}
                         priorityIcon={getTaskPriorityIcon(task)}
                         other={<TaskOther task={task}/>}
                         collapseBody={<TaskCollapseBody task={task}/>}/>)
    );

    const eventRows = () => events.map((event: CalendarEvent) => (
        <GeneralTableRow key={event.getId()} item={event} typeIcon={<NotificationsIcon/>} priorityIcon={<RemoveIcon/>}
                         other={<EventOther event={event}/>}
                         collapseBody={<EventCollapseBody event={event}/>}/>));

    const rows = () => {
        if (props.filter === 'tasks-only') {
            return taskRows();
        } else if (props.filter === 'events-only') {
            return eventRows();
        } else {
            return (
                <>
                    {taskRows()}
                    {eventRows()}
                </>);
        }

    };

    return (
        <CalendarTable head={head} body={rows()}></CalendarTable>
    );
}

export default GeneralTable;