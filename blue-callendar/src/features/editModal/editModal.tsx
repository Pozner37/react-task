import React from "react";
import {IconButton, Modal, Tooltip} from "@material-ui/core";

function EditModal(props: any){
    const [open, setOpen] = React.useState<boolean>(false);

    const handleOpen = () : void => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Tooltip title="Edit" arrow>
                <IconButton onClick={() => handleOpen()}>
                    {props.icon}
                </IconButton>
            </Tooltip>
            <Modal
                open={open}
                onClose={handleClose}
            >
                {props.body}
            </Modal>
        </>
    );
}

export default EditModal;
