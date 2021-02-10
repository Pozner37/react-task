import React from 'react';
import {Drawer, makeStyles} from "@material-ui/core";

function SideBar() {
    const sideBar = makeStyles({
        sideBar: {
            backgroundColor: "BLUE",
        },
    });
    const classes = sideBar();
    return (
        <div>
         <Drawer variant="permanent" anchor="right" className={classes.sideBar}>
             <p>hello world</p>
         </Drawer>
        </div>
    );
}

export default SideBar;
