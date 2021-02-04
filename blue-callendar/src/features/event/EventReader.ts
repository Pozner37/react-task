import CalendarEvent from "./CalendarEvent";
import mock from '../../assets/mock.json'

class EventReader {
    events: CalendarEvent[];

    constructor() {
        this.events = initEvents();
    }

    getEvents = () => this.events;
}

const initEvents = () => {
    const events = readEventsFromJson();
    let calendarEvents: CalendarEvent[] = [];
    events.forEach(event => calendarEvents.push(new CalendarEvent(event.id, event.title, event.description, event.beginningTime, event.endingTime, event.color, event.invitedGuests, event.notificationTime)));
    return calendarEvents;
};

const readEventsFromJson = () => {
    return mock.events;
};

const eventReader = new EventReader();

export default eventReader;