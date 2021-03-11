import React, {FC} from 'react';
import {makeStyles, TableBody, TableCell, TableRow, Typography} from "@material-ui/core";
import CalendarTask from "../CalendarTasks/CalendarTask";

interface TaskCollapseBodyProps {
    task: CalendarTask,
}

const TaskCollapseBody: FC<TaskCollapseBodyProps> = ({task}) => {
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

const useStyles = makeStyles({
    borderlessTableCell: {
        borderBottom: "none",
    },
});