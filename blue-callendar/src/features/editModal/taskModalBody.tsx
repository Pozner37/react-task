import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {
    Button,
    Card,
    CardActions,
    CardContent, MenuItem, Select,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TextField,
    Typography
} from "@material-ui/core";
import CalendarUrgentTask from "../task/CalendarUrgentTask";
import CalendarCompletedTask from "../task/CalendarCompletedTask";
import CalendarTask from "../task/CalendarTask";
import {addTask, updateTask} from '../task/TaskSlice';
import {getISOTime} from "../../assets/SimpleDate";


function TaskModalBody(props: any) {
    const dispatch = useDispatch();
    const task = props.item;
    const [title, setTitle] = useState(task.getTitle());
    const [description, setDescription] = useState(task.getDescription());
    const [estimatedTime, setEstimatedTime] = useState(task.getEstimatedTime());
    const [status, setStatus] = useState(task.getStatus());
    const [priority, setPriority] = useState(task.getPriority());
    const [untilDate, setUntilDate] = useState(new Date());
    const [review, setReview] = useState("");
    const [timeSpent, setTimeSpent] = useState("");


    const updateTitle = (event: any) => {
        setTitle(event.target.value);
    };
    const updateDescription = (event: any) => {
        setDescription(event.target.value);
    };
    const updateEstimatedTime = (event: any) => {
        setEstimatedTime(event.target.value);
    };
    const updateStatus = (event: any) => {
        setStatus(event.target.value);
    };
    const updatePriority = (event: any) => {
        setPriority(event.target.value);
    };
    const updateUntilDate = (event: any) => {
        setUntilDate(event.target.value);
    };
    const updateReview = (event: any) => {
        setReview(event.target.value);
    };
    const updateTimeSpent = (event: any) => {
        setTimeSpent(event.target.value);
    };

    const initTask = () => {
        if (status === 'Close') {
            return new CalendarCompletedTask(task.getId(), title, description, estimatedTime, priority, review, timeSpent, untilDate.toISOString());
        } else if (priority === 'High') {
            return new CalendarUrgentTask(task.getId(), title, description, estimatedTime, status, untilDate.toISOString());
        } else {
            return new CalendarTask(task.getId(), title, description, estimatedTime, status, priority);
        }
    };

    const submitForm = () => {
        const updatedTask = initTask();
        if (props.add) {
            dispatch(addTask(updatedTask));
        } else {
            dispatch(updateTask(updatedTask));
        }
    };

    const toggleUntilDateInput = () => {
        const untilDate = () => {
            if (task instanceof CalendarCompletedTask || task instanceof CalendarUrgentTask) {
                return <TextField
                    id="datetime-local"
                    type="datetime-local"
                    defaultValue={getISOTime(task.getUntilDate())}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={updateUntilDate}
                />
            } else return <TextField
                id="datetime-local"
                type="datetime-local"
                defaultValue={(new Date()).toISOString()}
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={updateUntilDate}
            />
        }
        if (priority === 'High' || status === 'Close') {
            return (<TableRow>
                <TableCell><Typography>Until Date:</Typography></TableCell>
                <TableCell>
                    {untilDate()}
                </TableCell>
            </TableRow>);
        }
    };

    const toggleReview = () => {
        const review = () => {
            if (task instanceof CalendarCompletedTask) {
                return <TextField defaultValue={task.getReview()} onChange={updateReview} multiline/>
            } else return <TextField defaultValue={''} onChange={updateReview} multiline/>
        }
        if (status === 'Close') {
            return (
                <TableRow>
                    <TableCell><Typography>Review:</Typography></TableCell>
                    <TableCell>
                        {review()}
                    </TableCell>
                </TableRow>);
        }
    };

    const toggleTimeSpent = () => {
        const timeSpent = () => {
            if (task instanceof CalendarCompletedTask) {
                return <TextField defaultValue={task.getTimeSpent()} onChange={updateTimeSpent} multiline/>
            } else return <TextField defaultValue={''} onChange={updateTimeSpent} multiline/>
        };
        if (status === 'Close') {
            return (
                <TableRow>
                    <TableCell><Typography>Time Spent:</Typography></TableCell>
                    <TableCell>
                        {timeSpent()}
                    </TableCell>
                </TableRow>);
        }
    };
    return (
        <>
            <Card>
                <CardContent>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell><Typography>Title:</Typography></TableCell>
                                <TableCell>
                                    <TextField defaultValue={task.getTitle()} onChange={updateTitle} multiline/>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Typography>Description:</Typography></TableCell>
                                <TableCell>
                                    <TextField defaultValue={task.getDescription()} onChange={updateDescription}
                                               multiline/>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Typography>Estimated Time:</Typography></TableCell>
                                <TableCell>
                                    <TextField defaultValue={task.getEstimatedTime()} onChange={updateEstimatedTime}
                                               multiline/>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Typography>Status:</Typography></TableCell>
                                <TableCell>
                                    <Select defaultValue={task.getStatus()} onChange={updateStatus}>
                                        <MenuItem value={"Open"}>Open</MenuItem>
                                        <MenuItem value={"In Progress"}>In Progress</MenuItem>
                                        <MenuItem value={"Close"}>Close</MenuItem>
                                    </Select>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Typography>Priority:</Typography></TableCell>
                                <TableCell>
                                    <Select defaultValue={task.getPriority()} onChange={updatePriority}>
                                        <MenuItem value={"Low"}>Low</MenuItem>
                                        <MenuItem value={"Medium"}>Medium</MenuItem>
                                        <MenuItem value={"High"}>High</MenuItem>
                                    </Select>
                                </TableCell>
                            </TableRow>
                            {toggleUntilDateInput()}
                            {toggleReview()}
                            {toggleTimeSpent()}
                        </TableBody>
                    </Table>
                </CardContent>
                <CardActions>
                    <Button onClick={submitForm}>Save</Button>
                </CardActions>
            </Card>
        </>
    );
}

export default TaskModalBody;