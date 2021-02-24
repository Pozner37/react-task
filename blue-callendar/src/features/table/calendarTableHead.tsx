import React from 'react';
import {TableCell, TableHead, TableRow} from "@material-ui/core";
import useStyles from "../../assets/classes";

function CalendarTableHead(props: any) {
    const head = props.head;
    const classes = useStyles();
    return (
        <>
            <TableHead>
                <TableRow>
                    {head.map((category: any) =>
                        <TableCell key={category} align="center" className={classes.bold}>{category}</TableCell>
                    )}
                </TableRow>
            </TableHead>
        </>
    );
};

export default CalendarTableHead;