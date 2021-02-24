import React from 'react';
import {TableBody, TableCell, TableRow, Typography} from "@material-ui/core";
import useStyles from "../../assets/classes";

function TaskCollapseBody(props: any) {
    const task = props.task;
    const classes = useStyles();
    return (
        <TableBody>
            <TableRow>
                <TableCell className={classes.borderlessTableCell}>
                    <Typography>Description:&nbsp;{task.getDescription()}</Typography>
                </TableCell>
            </TableRow>
        </TableBody>
    );
}

export default TaskCollapseBody;