import React, {FC} from 'react';
import {makeStyles, Typography} from "@material-ui/core";
import {ToggleButton, ToggleButtonGroup} from "@material-ui/lab";
import {FilterEnum} from "./filters";

interface FilterBarProps {
    setFilter: React.Dispatch<React.SetStateAction<FilterEnum>>,
    filter: FilterEnum,
}

const FilterBar: FC<FilterBarProps> = ({setFilter, filter}) => {
    const classes = useStyles();
    const {NO_FILTER, EVENTS_ONLY, TASKS_ONLY, HIGH_PRIORITY_TASKS, UNCOMPLETED_TASKS} = FilterEnum;
    return (
        <>
            <Typography>Quick Filters:</Typography>
            <ToggleButtonGroup value={filter} exclusive className={classes.button}>
                <ToggleButton value={NO_FILTER} onClick={() => setFilter(NO_FILTER)}>No Filter</ToggleButton>
                <ToggleButton value={EVENTS_ONLY} onClick={() => setFilter(EVENTS_ONLY)}>Events Only</ToggleButton>
                <ToggleButton value={TASKS_ONLY} onClick={() => setFilter(TASKS_ONLY)}>Tasks Only</ToggleButton>
                <ToggleButton value={UNCOMPLETED_TASKS} onClick={() => setFilter(UNCOMPLETED_TASKS)}>Uncompleted Tasks</ToggleButton>
                <ToggleButton value={HIGH_PRIORITY_TASKS} onClick={() => setFilter(HIGH_PRIORITY_TASKS)}>High Priority
                    Tasks</ToggleButton>
            </ToggleButtonGroup>
        </>
    );
}

export default FilterBar;

const useStyles = makeStyles({
    button: {
        backgroundColor: 'white',
    },
});