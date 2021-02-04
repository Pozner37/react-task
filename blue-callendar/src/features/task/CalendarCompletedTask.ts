import CalendarTask from "./CalendarTask";

class CalendarCompletedTask extends CalendarTask {
    review: string;
    timeSpent: string;
    untilDate: string;

    constructor(id: string, title: string, description: string, estimatedTime: string, priority: string, review: string, timeSpent: string, untilDate: string) {
        super(id, title, description, estimatedTime, "Close", priority);
        this.review = review;
        this.timeSpent = timeSpent;
        this.untilDate = untilDate;
    }

    getReview = () => this.review;

    setReview = (review: string) => this.review = review;

    getTimeSpent = () => this.timeSpent;

    setTimeSpent = (timeSpent: string) => this.timeSpent = timeSpent;

    getUntilDate = () => this.untilDate;

    setUntilDate = (untilDate: string) => this.untilDate = untilDate;
}

export default CalendarCompletedTask;