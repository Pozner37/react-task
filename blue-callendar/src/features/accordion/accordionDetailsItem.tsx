import Typography from "@material-ui/core/Typography";
import React from "react";
import useStyles from "../calendarAccordion/accordionClasses";
import {Box, Button, Grid} from "@material-ui/core";

function AccordionDetailsItem(props: any) {
    const classes = useStyles();
    return (
        <>
            <Grid container>
                <Typography className={classes.bold}>{props.header}</Typography>
                <Typography>
                    {props.body}
                </Typography>
            </Grid>
        </>
    );
}

export default AccordionDetailsItem;
