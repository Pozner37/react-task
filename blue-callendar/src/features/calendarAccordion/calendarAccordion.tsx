import React from 'react';
import EventAccordion from '../event/EventAccordion';
import {Grid, ListItem, ListItemText, makeStyles} from "@material-ui/core";
import {selectEvents} from "../event/EventSlice";
import {useSelector} from 'react-redux';
import CalendarEvent from '../event/CalendarEvent'

function CalendarAccordion() {
    const center = makeStyles({
        center: {
            textAlign: "center",
        },
    });
    const classes = center();

    const events = useSelector(selectEvents).Events;
    const eventAccordions = ({events} : any) => (
        <>
            {
                events.map((event: CalendarEvent) => (<EventAccordion event={event}></EventAccordion>))
            }
        </>
    );

    return (
        <div className={classes.center}>
            <Grid container xs={8}>
                {eventAccordions({events})}
            </Grid>
        </div>
    );
}

export default CalendarAccordion;
