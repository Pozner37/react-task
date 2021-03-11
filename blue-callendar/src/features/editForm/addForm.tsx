import React, {FC, useState} from "react";
import {Box, Fab, makeStyles, Tab, Tabs} from "@material-ui/core";
import CalendarEvent from "../event/CalendarEvent/CalendarEvent";
import CalendarTask from "../task/CalendarTasks/CalendarTask";
import {useSelector} from "react-redux";
import {selectEvents} from "../event/EventStore/EventSlice";
import {selectTasks} from "../task/TaskStore/TaskSlice";
import {Link} from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import TabPanel from "./tabPanel";
import EventFormBody from "./eventFormBody";
import TaskFormBody from "./taskFormBody";

interface AddFormProps {
}

const AddForm: FC<AddFormProps> = () => {
    const classes = useStyles();
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

    const eventForm = () => {
        return <EventFormBody item={emptyEvent} add={true}></EventFormBody>
    };
    const taskForm = () => {
        return <TaskFormBody item={emptyTask} add={true}></TaskFormBody>;
    };

    const [value, setValue] = useState(0);
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    }
    return (
            <Box>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Create Event">
                    </Tab>
                    <Tab label="Create Task">
                    </Tab>
                </Tabs>
                <TabPanel value={value} index={0}>
                    {eventForm()}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    {taskForm()}
                </TabPanel>
            </Box>
    );
};

const useStyles = makeStyles({
    fab: {
        left: "48%"
    },
    box: {
        padding: '10px'
    }
});

export default AddForm;
