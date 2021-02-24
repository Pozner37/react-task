import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TextField,
    Typography
} from "@material-ui/core";
import CalendarUrgentTask from "../task/CalendarUrgentTask";
import CalendarCompletedTask from "../task/CalendarCompletedTask";

function TaskModalBody(props: any) {
    const dispatch = useDispatch();
    const task = props.task;
    const [title, setTitle] = useState(task.getTitle());
    const [description, setDescription] = useState(task.getDescription());
    const [estimatedTime, setEstimatedTime] = useState(task.getEstimatedTime());
    const [status, setStatus] = useState(task.getStatus());
    const [priority, setPriority] = useState(task.getPriority());

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

    const submitForm = () => {
        // const updatedTask = new CalendarTask(task.getId(),title,description);
        // dispatch(updateEvent(updatedEvent));
    };

    const [untilDate, setUntilDate] = useState(task.getUntilDate());
    const updateUntilDate = (event: any) => {
        setUntilDate(event.target.value);
    };

    const urgentTask = () => {
        if (task instanceof CalendarUrgentTask) {
            return (
                <TableRow>
                    <TableCell><Typography>Until Date:</Typography></TableCell>
                    <TableCell>
                        <TextField defaultValue={task.getUntilDate()} onChange={updateUntilDate} multiline/>
                    </TableCell>
                </TableRow>);
        }
    };
    const completedTask = () => {
        if (task instanceof CalendarCompletedTask) {
            return (
                <TableRow>
                    <TableCell><Typography>Until Date:</Typography></TableCell>
                    <TableCell>
                        <TextField defaultValue={task.getEstimatedTime()} onChange={updateDescription} multiline/>
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
                            {urgentTask()}
                            {completedTask()}
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