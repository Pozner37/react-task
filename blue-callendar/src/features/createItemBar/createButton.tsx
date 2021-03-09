import React, {FC} from 'react';
import EditModal from "../editModal/editModal";
import BasicEntity from "../basicEntity/basicEntity";

interface CreateButtonProps {
    item: BasicEntity,
    buttonTitle: string,
    add?: boolean
}

const CreateButton: FC<CreateButtonProps> = ({item, buttonTitle, add = false}) => {
    return (
        <EditModal item={item} icon={buttonTitle} add={true}/>
    );
}

export default CreateButton;