import React from 'react';
import {
    Box,
    Collapse,
    IconButton,
    Table, TableBody,
    TableCell,
    TableRow, Tooltip,
    Typography,
} from "@material-ui/core";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import DeleteIcon from "@material-ui/icons/Delete";
import store from "../../app/store";
import {removeEvent} from '../event/EventSlice';
import {removeTask} from '../task/TaskSlice';
import CalendarEvent from "../event/CalendarEvent";
import CalendarTask from "../task/CalendarTask";
import EditModal from "../editModal/editModal";
import EventModalBody from "../editModal/eventModalBody";
import TaskModalBody from "../editModal/taskModalBody";
import EditIcon from "@material-ui/icons/Edit";

interface IGeneralTableRowPropsInterface {

}

function GeneralTableRow(props: any) {
    const item = props.item;
    const [open, setOpen] = React.useState(false);
    const removeItem = () => {
        if (item instanceof CalendarEvent){
            store.dispatch(removeEvent(item));
        } else if (item instanceof CalendarTask){
            store.dispatch(removeTask(item));
        }
    };
    const modalBody = () => {
        if (item instanceof CalendarEvent){
            return <EventModalBody event={item}/>;
        } else if (item instanceof CalendarTask){
            return <TaskModalBody task={item}/>;
        }
    }
    return (
        <>
            <TableBody>
                <TableRow>
                    <TableCell component="th" scope="row" align="center">
                        {props.typeIcon}
                    </TableCell>
                    <TableCell component="th" scope="row" align="center">
                        {props.priorityIcon}
                    </TableCell>
                    <TableCell component="th" scope="row" align="center">
                        <Typography>{item.getTitle()}</Typography>
                    </TableCell>
                    <TableCell component="th" scope="row" align="center">
                        <Table size="small">
                            {props.other}
                        </Table>
                    </TableCell>
                    <TableCell align="center">
                        <EditModal body={modalBody()} icon={<EditIcon/>}></EditModal>
                        <Tooltip title="Delete" arrow>
                            <IconButton onClick={() => removeItem()}>
                                <DeleteIcon/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="More Info" arrow>
                            <IconButton aria-label="expand row" onClick={() => setOpen(!open)}>
                                {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                            </IconButton>
                        </Tooltip>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box margin={1}>
                                <Table>
                                    <TableBody>
                                        {props.collapseBody}
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </TableBody>
        </>
    );
};

export default GeneralTableRow;