import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from "@material-ui/core/Typography";
import useStyles from "../calendarAccordion/accordionClasses";
import RemoveIcon from '@material-ui/icons/Remove';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {Accordion, AccordionDetails, AccordionSummary} from "../accordion/customAccordion";
import AccordionDetailsItem from "../accordion/accordionDetailsItem";
import {Avatar, Divider, Grid, IconButton, styled} from "@material-ui/core";

function EventAccordion(props: any) {
    const event = props.event;
    const classes = useStyles();
    const ColoredAvatar = styled(Avatar)({
        backgroundColor: event.getColor()
    });
    return (
        <Accordion className={classes.width}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
            >
                <div className={classes.type}><NotificationsIcon/></div>
                <div className={classes.priority}><RemoveIcon/></div>
                <div className={classes.title}><Typography>{event.getTitle()}</Typography></div>
                <div className={classes.other}></div>
                <div className={classes.actions}>
                    <IconButton>
                        <EditIcon/>
                    </IconButton>
                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <AccordionDetailsItem header={"Description:"} body={event.getDescription()}></AccordionDetailsItem>
                <Divider orientation='vertical'></Divider>
                <AccordionDetailsItem header={"Beginning Time:"} body={event.getBeginningTime()}></AccordionDetailsItem>
                <AccordionDetailsItem header={"Ending Time:"} body={event.getEndingTime()}></AccordionDetailsItem>
                <Grid container item xs={5}>
                    <Typography className={classes.bold}>Color: </Typography>
                    <ColoredAvatar> </ColoredAvatar>
                </Grid>
                <AccordionDetailsItem header={"Invited Guests:"} body={event.getInvitedGuests()}></AccordionDetailsItem>
                <AccordionDetailsItem header={"Notification Time:"}
                                      body={event.getNotificationTime()}></AccordionDetailsItem>
            </AccordionDetails>
        </Accordion>
    );
}

export default EventAccordion;
