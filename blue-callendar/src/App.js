import React from 'react';
import './App.css';
import {useSelector} from "react-redux";
import {selectEvents} from './features/event/EventSlice'
import List from '@material-ui/core/List';
import {ListItem, ListItemText} from "@material-ui/core";

function App() {
    const events = useSelector(selectEvents).Events;
    const eventList = ({events}) => (
        <>
            {
                events.map(event => (<ListItem>
                    <ListItemText>{event.getTitle()}</ListItemText>
                </ListItem>))
            }
        </>
    );
    return (
        <div className="App">
            <List>
                {eventList({events})}
            </List>
        </div>
    );
}

export default App;
