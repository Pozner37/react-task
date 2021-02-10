import React from 'react';
import {Avatar, styled, TableBody, TableCell, TableRow, Typography} from "@material-ui/core";
import useStyles from "../../assets/classes";

function TaskCollapseBody(props: any) {
    const task = props.task;
    const classes = useStyles();
    return (
        <TableRow>
            <TableCell className={classes.borderlessTableCell}>
                <Typography>Description:&nbsp;{task.getDescription()}</Typography>
            </TableCell>
        </TableRow>
    );
}

export default TaskCollapseBody;