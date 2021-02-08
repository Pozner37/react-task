import React from 'react';
import EventAccordion from '../event/EventAccordion';
import {Accordion, Grid, makeStyles} from "@material-ui/core";
import {selectEvents} from "../event/EventSlice";
import {useSelector} from "react-redux";
import CalendarEvent from '../event/CalendarEvent';
import AccordionHeader from "./accordionHeader";

function CalendarAccordion() {
    const events = useSelector(selectEvents).Events;
    const eventAccordions = ({events} : any) => (
        <>
            {
                events.map((event: CalendarEvent) => (<EventAccordion key={event.getId()} event={event}></EventAccordion>))
            }
        </>
    );
    return (
        <div>
            <Grid container item xs={8}>
                <AccordionHeader></AccordionHeader>
                {eventAccordions({events})}
            </Grid>
        </div>
    );
}

export default CalendarAccordion;
