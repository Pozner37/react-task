import React from 'react';
import {TableBody, TableCell, TableRow, Typography} from "@material-ui/core";
import useStyles from "../../assets/classes";

function EventOther(props: any){
    const event = props.event;
    const classes = useStyles();
    return (
        <TableBody>
            <TableRow>
                <TableCell align="center" className={classes.borderlessTableCell}>
                    <Typography>From:&nbsp;{event.getSimpleBeginningTime()}</Typography>
                </TableCell>
                <TableCell align="center" className={classes.borderlessTableCell}>
                    <Typography>Until:&nbsp;{event.getSimpleEndingTime()}</Typography>
                </TableCell>
            </TableRow>
        </TableBody>);
}

export default EventOther;