import React from 'react';
import {Paper, Table, TableContainer} from "@material-ui/core";
import useStyles from "../../assets/classes";
import CalendarTableHead from "./calendarTableHead";

function CalendarTable(props: any) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} className={classes.table}>
            <Table>
                <CalendarTableHead head={props.head}/>
                {props.body}
            </Table>
        </TableContainer>
    );
}

export default CalendarTable;