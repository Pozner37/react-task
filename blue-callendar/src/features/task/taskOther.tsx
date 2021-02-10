import React from 'react';
import {TableBody, TableCell, TableRow, Typography} from "@material-ui/core";
import useStyles from "../../assets/classes";
import CalendarCompletedTask from "./CalendarCompletedTask";
import CalendarUrgentTask from "./CalendarUrgentTask";
import CalendarTask from "./CalendarTask";

function TaskOther(props: any){
    const task = props.task;
    const classes = useStyles();

    const extraField = (task: CalendarTask) => {
        if(task instanceof CalendarCompletedTask) {
            return (
                    <Typography>Time Spent:&nbsp;{task.getTimeSpent()}</Typography>
            );
        } else if(task instanceof CalendarUrgentTask) {
            return (

                    <Typography>Until Date:&nbsp;{task.getSimpleUntilDate()}</Typography>
            );
        }
    }

    return (
        <TableBody>
            <TableRow>
                <TableCell align="center" className={classes.borderlessTableCell}>
                    <Typography>Status:&nbsp;{task.getStatus()}</Typography>
                </TableCell>
                <TableCell align="center" className={classes.borderlessTableCell}>
                    <Typography>Estimated Time:&nbsp;{task.getEstimatedTime()}</Typography>
                </TableCell>
                <TableCell align="center" className={classes.borderlessTableCell}>
                    {extraField(task)}
                </TableCell>
            </TableRow>
        </TableBody>);
}

export default TaskOther;