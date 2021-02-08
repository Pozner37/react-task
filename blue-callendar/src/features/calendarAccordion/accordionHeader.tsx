import React from 'react';
import {styled, Typography} from "@material-ui/core";
import useStyles from "./accordionClasses";

function AccordionHeader() {
    const Header = styled(Typography)({
        textAlign: 'center',
        backgroundColor: 'WHITE',
        fontWeight: 'bold',
    });

    const classes = useStyles();
    return (
        <>
            <Header className={classes.type}>Type</Header>
            <Header className={classes.priority}>Priority</Header>
            <Header className={classes.title}>Title</Header>
            <Header className={classes.other}>Other</Header>
            <Header className={classes.actions}>Actions</Header>
        </>
    );
}

export default AccordionHeader;
