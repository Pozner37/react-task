import React, {FC, ReactElement} from "react";
import {Button, Modal, Tooltip} from "@material-ui/core";
import CalendarEvent from "../event/CalendarEvent/CalendarEvent";
import EventModalBody from "./eventModalBody";
import CalendarTask from "../task/CalendarTasks/CalendarTask";
import TaskModalBody from "./taskModalBody";
import BasicEntity from "../basicEntity/basicEntity";

interface EditModalProps {
    item: BasicEntity,
    icon: string | ReactElement,
    add?: boolean
}

const EditModal: FC<EditModalProps> = ({item, icon, add = false}) => {
    const [open, setOpen] = React.useState<boolean>(false);

    const handleOpen = (): void => {
        setOpen(true);
    };

    const handleClose = (): void => {
        setOpen(false);
    };

    let modalBody = <></>;
    if (item instanceof CalendarEvent) {
        if (add) {
            modalBody = <EventModalBody item={item} add={true} onClose={handleClose}/>
        } else modalBody = <EventModalBody item={item} onClose={handleClose}/>;
    } else if (item instanceof CalendarTask) {
        if (add) {
            modalBody = <TaskModalBody item={item} add={true} onClose={handleClose}/>
        } else modalBody = <TaskModalBody item={item} onClose={handleClose}/>;
    }

    return (
        <>
            <Tooltip title="Edit" arrow>
                <Button onClick={() => handleOpen()} style={{backgroundColor: "WHITE"}}>
                    {icon}
                </Button>
            </Tooltip>
            <Modal
                open={open}
                onClose={handleClose}
            >
                {modalBody}
            </Modal>
        </>
    );
}

export default EditModal;
