class CalendarTask {
    id: string;
    title: string;
    description: string;
    estimatedTime: string;
    status: string;
    priority: string;

    constructor(id: string, title: string, description: string, estimatedTime: string, status: string, priority: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.estimatedTime = estimatedTime;
        this.status = status;
        this.priority = priority;
    }

    getId = () => this.id;

    setId = (id: string) => this.id = id;

    getTitle = () => this.title;

    setTitle = (title: string) => this.title = title;

    getDescription = () => this.description;

    setDescription = (description: string) => this.description = description;

    getEstimatedTime = () => this.estimatedTime;

    setEstimatedTime = (estimatedTime: string) => this.estimatedTime = estimatedTime;

    getStatus = () => this.status;

    setStatus = (status: string) => this.status = status;

    getPriority = () => this.priority;

    setPriority = (priority: string) => this.priority = priority;
}

export default CalendarTask;