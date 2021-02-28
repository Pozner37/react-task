import React, {useState} from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Table,
    TableBody, TableCell,
    TableRow,
    TextField,
    Typography
} from "@material-ui/core";
import {getISOTime} from "../../assets/SimpleDate";
import {CirclePicker} from "react-color";
import ChipInput from 'material-ui-chip-input';
import {addEvent, updateEvent} from '../event/EventSlice';
import CalendarEvent from "../event/CalendarEvent";
import {useDispatch} from "react-redux";

function EventModalBody(this: any, props: any) {
    const dispatch = useDispatch();
    const event = props.item;
    const [invitedGuests, setInvitedGuests] = useState(event.getInvitedGuests());
    const [title, setTitle] = useState(event.getTitle());
    const [color, setColor] = useState(event.getColor());
    const [description, setDescription] = useState(event.getDescription());
    const [beginningTime, setBeginningTime] = useState(event.getBeginningTime());
    const [endingTime, setEndingTime] = useState(event.getEndingTime());
    const [notificationTime, setNotificationTime] = useState(event.getNotificationTime());

    const updateTitle = (event: any) => {
        setTitle(event.target.value);
    };
    const updateDescription = (event: any) => {
        setDescription(event.target.value);
    };
    const updateBeginningTime = (event: any) => {
        setBeginningTime(event.target.value);
    };
    const updateEndingTime = (event: any) => {
        setEndingTime(event.target.value);
    };
    const updateNotificationTime = (event: any) => {
        setNotificationTime(event.target.value);
    };
    const updateColor = (event: any) => {
        setColor(event.hex);
    };
    const handleAddChip = (chip: any) => {
        invitedGuests.push(chip);
        setInvitedGuests(invitedGuests);
    };
    const handleDeleteChip = (chip: any, index: any) => {
        invitedGuests.splice(index, 1);
        setInvitedGuests(invitedGuests);
    };
    const submitForm = () => {
        const updatedEvent = new CalendarEvent(event.getId(),title,description,beginningTime,endingTime,color,invitedGuests,notificationTime);
        if(props.add){
            dispatch(addEvent(updatedEvent));
        } else {
            dispatch(updateEvent(updatedEvent));
        }
    };
    return (
        <>
                <Card>
                    <CardContent>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell><Typography>Title:</Typography></TableCell>
                                    <TableCell>
                                        <TextField defaultValue={event.getTitle()} onChange={updateTitle} multiline/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><Typography>Description:</Typography></TableCell>
                                    <TableCell>
                                        <TextField defaultValue={event.getDescription()} onChange={updateDescription} multiline/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><Typography>Beginning Time:</Typography></TableCell>
                                    <TableCell>
                                        <TextField
                                            id="datetime-local"
                                            type="datetime-local"
                                            defaultValue={getISOTime(event.getBeginningTime())}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            onChange={updateBeginningTime}
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><Typography>Ending Time:</Typography></TableCell>
                                    <TableCell>
                                        <TextField
                                            id="datetime-local"
                                            type="datetime-local"
                                            defaultValue={getISOTime(event.getEndingTime())}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            onChange={updateEndingTime}
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><Typography>Color:</Typography></TableCell>
                                    <TableCell>
                                        <CirclePicker colors={[color]}/>
                                    </TableCell>
                                    <TableCell>
                                        <CirclePicker onChange={updateColor}/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><Typography>Invite guests:</Typography></TableCell>
                                    <TableCell>
                                        <ChipInput
                                            value={invitedGuests}
                                            onAdd={(chip) => handleAddChip(chip)}
                                            onDelete={(chip, index) => handleDeleteChip(chip, index)}
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><Typography>Notification Time:</Typography></TableCell>
                                    <TableCell>
                                        <TextField
                                            id="datetime-local"
                                            type="datetime-local"
                                            defaultValue={getISOTime(event.getNotificationTime())}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            onChange={updateNotificationTime}
                                        /> </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                    <CardActions>
                        <Button onClick={submitForm}>Save</Button>
                    </CardActions>
                </Card>
        </>
    );
}

export default EventModalBody;