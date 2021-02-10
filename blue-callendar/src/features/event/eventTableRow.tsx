import React from 'react';
import {
    Avatar,
    Box,
    Collapse, Divider,
    IconButton,
    styled,
    Table, TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography, withStyles
} from "@material-ui/core";
import useStyles from "../calendarAccordion/accordionClasses";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import NotificationsIcon from "@material-ui/icons/Notifications";
import RemoveIcon from "@material-ui/icons/Remove";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

function EventTableRow(props: any) {
    const event = props.event;
    const classes = useStyles();
    const ColoredAvatar = styled(Avatar)({
        backgroundColor: event.getColor()
    });
    const [open, setOpen] = React.useState(false);
    const SideBorderTableCell = withStyles({
        root: {
            borderBottom: "none",
            borderRight: "1px solid lightGrey",
            borderLeft: "1px solid lightGrey"
        }
    })(TableCell);
    const BorderlessTableCell = withStyles({
        root: {
            borderBottom: "none",
        }
    })(TableCell);
    return (
        <>
            <TableRow>
                <TableCell component="th" scope="row" align="center">
                    <NotificationsIcon/>
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                    <RemoveIcon/>
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                    <Typography>{event.getTitle()}</Typography>
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                    <Table size="small">
                        <TableBody>
                            <TableRow>
                                <BorderlessTableCell align="center">
                                    <Typography>From:&nbsp;{event.getSimpleBeginningTime()}</Typography>
                                </BorderlessTableCell>
                                <BorderlessTableCell align="center">
                                    <Typography>Until:&nbsp;{event.getSimpleEndingTime()}</Typography>
                                </BorderlessTableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableCell>
                <TableCell align="center">
                    <IconButton>
                        <EditIcon/>
                    </IconButton>
                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton aria-label="expand row" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <BorderlessTableCell>
                                            <Typography>Description:&nbsp;{event.getDescription()}</Typography>
                                        </BorderlessTableCell>
                                        <SideBorderTableCell>
                                            <Typography>Color:</Typography>
                                            <ColoredAvatar> </ColoredAvatar>
                                        </SideBorderTableCell>
                                        <SideBorderTableCell>
                                            <Typography>Invited Guests:&nbsp;{event.getInvitedGuests()}</Typography>
                                        </SideBorderTableCell>
                                        <BorderlessTableCell>
                                            <Typography>Notification
                                                Time:&nbsp;{event.getSimpleNotificationTime()}</Typography>
                                        </BorderlessTableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
};

export default EventTableRow;