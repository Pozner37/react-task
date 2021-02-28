import React, {useState} from 'react';
import {Button, Typography} from "@material-ui/core";
import GeneralTable from "../table/generalTable";
import {ToggleButtonGroup} from "@material-ui/lab";

function FilterBar() {
    const [filter, setFilter] = useState('');
    const updateFilter = (event: React.MouseEvent<HTMLElement>,newFilter: string) => {
        setFilter(newFilter);
    }
    return (
        <>
            <Typography>Quick Filters:</Typography>
            <ToggleButtonGroup></ToggleButtonGroup>
            <GeneralTable filter={filter}/>
        </>
    );
}

export default FilterBar;