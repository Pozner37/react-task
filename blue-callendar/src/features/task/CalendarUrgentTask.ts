import CalendarTask from "./CalendarTask";

class CalendarUrgentTask extends CalendarTask {
    untilDate: string;

    constructor(id: string, title: string, description: string, estimatedTime: string, status: string, untilDate: string) {
        super(id, title, description, estimatedTime, status, 'Top');
        this.untilDate = untilDate;
    }

    getUntilDate = () => this.untilDate;

    setUntilDate = (untilDate: string) => this.untilDate = untilDate;
}

export default CalendarUrgentTask;