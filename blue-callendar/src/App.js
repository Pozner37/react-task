import React from 'react';
import './App.css';
import {useSelector} from "react-redux";
import {selectEvents} from './features/event/EventSlice';
import List from '@material-ui/core/List';
import {ListItem, ListItemText} from "@material-ui/core";
import EventAccordion from "./features/event/EventAccordion";
import CalendarAccordion from "./features/calendarAccordion/calendarAccordion";
import SideBar from "./features/sideBar/sideBar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

function App() {
    return (
        <div className="App">
            <CalendarAccordion></CalendarAccordion>
            <SideBar></SideBar>

        </div>
    );
}

export default App;
