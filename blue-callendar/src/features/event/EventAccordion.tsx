import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from "@material-ui/core/Typography";
import useStyles from "../calendarAccordion/accordionClasses";
import RemoveIcon from '@material-ui/icons/Remove';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {Accordion, AccordionDetails, AccordionSummary} from "../accordion/customAccordion";

function EventAccordion(props: any) {
    const event = props.event;
    const classes = useStyles();
    return (
        <Accordion className={classes.width}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <div className={classes.type}><NotificationsIcon/></div>
                <div className={classes.priority}><RemoveIcon/></div>
                <div className={classes.title}><Typography>{event.getTitle()}</Typography></div>
                <div className={classes.other}></div>
                <div className={classes.actions}></div>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {event.getDescription()}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}

export default EventAccordion;
