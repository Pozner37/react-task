import React from 'react';
import {
    Box,
    Collapse,
    IconButton,
    Table, TableBody,
    TableCell,
    TableRow,
    Typography,
} from "@material-ui/core";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

function GeneralTableRow(props: any) {
    const item = props.item;
    const [open, setOpen] = React.useState(false);
    return (
        <>
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
                                    {props.collapseBody}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
};

export default GeneralTableRow;