class CalendarEvent {
    id: string;
    title: string;
    description: string;
    beginningTime: Date;
    endingTime: Date;
    color: string;
    invitedGuests: string[];
    notificationTime: Date;

    constructor(id: string, title: string, description: string, beginningTime: string, endingTime: string, color: string, invitedGuests: string[], notificationTime: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.beginningTime = new Date(beginningTime);
        this.endingTime = new Date(endingTime);
        this.color = color;
        this.invitedGuests = invitedGuests;
        this.notificationTime = new Date(notificationTime);
    }

    getId = () => this.id;

    setId = (id: string) => this.id = id;

    getTitle = () => this.title;

    setTitle = (title: string) => this.title = title;

    getDescription = () => this.description;

    setDescription = (description: string) => this.description = description;

    getBeginningTime = () => this.beginningTime;

    getSimpleBeginningTime = () => getSimpleTime(this.beginningTime);

    setBeginningTime = (beginningTime: Date) => this.beginningTime = beginningTime;

    getEndingTime = () => this.endingTime;

    getSimpleEndingTime = () => getSimpleTime(this.endingTime);

    setEndingTime = (endingTime: Date) => this.endingTime = endingTime;

    getColor = () => this.color;

    setColor = (color: string) => this.color = color;

    getInvitedGuests = () => {
        if(this.invitedGuests.length === 0) {
            return "[None   ]";
        } else {
            return this.invitedGuests;
        }
    }

    setInvitedGuests = (invitedGuests: string[]) => this.invitedGuests = invitedGuests;

    getNotificationTime = () => this.notificationTime;

    getSimpleNotificationTime = () => getSimpleTime(this.notificationTime);

    setNotificationTime = (notificationTime: Date) => this.notificationTime = notificationTime;
}

const getSimpleTime = (date: Date) => {
    return date.getDate() +
        "/" +  (date.getMonth() + 1) +
        "/" +  date.getFullYear() +
        " " +  date.getHours() +
        ":" +  date.getMinutes();
}

export default CalendarEvent;