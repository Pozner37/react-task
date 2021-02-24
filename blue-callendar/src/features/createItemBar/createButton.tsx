import React from 'react';
import EditModal from "../editModal/editModal";
import EventModalBody from "../editModal/eventModalBody";

function CreateButton(props: any) {
    return (
        <EditModal body={props.body} icon={props.buttonTitle}></EditModal>
    );
}

export default CreateButton;