import React from 'react';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from "@material-ui/core/Typography";

function EventAccordion(props: any) {
    const event = props.event;
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>{event.getTitle()}</Typography>
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
