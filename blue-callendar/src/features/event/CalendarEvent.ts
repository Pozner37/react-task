class CalendarEvent {
    id: string;
    title: string;
    description: string;
    beginningTime: string;
    endingTime: string;
    color: string;
    invitedGuests: string[];
    notificationTime: string;

    constructor(id: string, title: string, description: string, beginningTime: string, endingTime: string, color: string, invitedGuests: string[], notificationTime: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.beginningTime = beginningTime;
        this.endingTime = endingTime;
        this.color = color;
        this.invitedGuests = invitedGuests;
        this.notificationTime = notificationTime;
    }

    getId = () => this.id;

    setId = (id: string) => this.id = id;

    getTitle = () => this.title;

    setTitle = (title: string) => this.title = title;

    getDescription = () => this.description;

    setDescription = (description: string) => this.description = description;

    getBeginningTime = () => this.beginningTime;

    setBeginningTime = (beginningTime: string) => this.beginningTime = beginningTime;

    getEndingTime = () => this.endingTime;

    setEndingTime = (endingTime: string) => this.endingTime = endingTime;

    getColor = () => this.color;

    setColor = (color: string) => this.color = color;

    getInvitedGuests = () => this.invitedGuests;

    setInvitedGuests = (invitedGuests: string[]) => this.invitedGuests = invitedGuests;

    getNotificationTime = () => this.notificationTime;

    setNotificationTime = (notificationTime: string) => this.notificationTime = notificationTime;
}

export default CalendarEvent;