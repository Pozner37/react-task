import React from 'react';
import {Divider, Paper, Table, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import useStyles from "../../assets/classes";

function CalendarTable(props: any) {
    const classes = useStyles();

    const tableHead = (head: any) => {
        return (
            <TableHead>
                <TableRow>
                    {head.map((category: any) =>
                        <TableCell key={category} align="center" className={classes.bold}>{category}</TableCell>
                    )}
                </TableRow>
            </TableHead>
        );
    };

    return (
        <TableContainer component={Paper} className={classes.table}>
            <Table>
                {tableHead(props.head)}
                {props.body}
            </Table>
        </TableContainer>
    );
}

export default CalendarTable;