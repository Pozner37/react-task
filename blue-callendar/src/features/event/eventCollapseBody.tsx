import React from 'react';
import {Avatar, styled, TableBody, TableCell, TableRow, Typography} from "@material-ui/core";
import useStyles from "../../assets/classes";

function EventCollapseBody(props: any) {
    const event = props.event;
    const classes = useStyles();
    const ColoredAvatar = styled(Avatar)({
        backgroundColor: event.getColor()
    });
    return (
        <TableRow>
            <TableCell className={classes.borderlessTableCell}>
                <Typography>Description:&nbsp;{event.getDescription()}</Typography>
            </TableCell>
            <TableCell className={classes.sideBorderTableCell}>
                <Typography>Color:</Typography>
                <ColoredAvatar> </ColoredAvatar>
            </TableCell>
            <TableCell className={classes.sideBorderTableCell}>
                <Typography>Invited Guests:&nbsp;{event.getInvitedGuests()}</Typography>
            </TableCell>
            <TableCell className={classes.borderlessTableCell}>
                <Typography>Notification
                    Time:&nbsp;{event.getSimpleNotificationTime()}</Typography>
            </TableCell>
        </TableRow>
    );
}

export default EventCollapseBody;