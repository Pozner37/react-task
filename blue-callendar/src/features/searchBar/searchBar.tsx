import React, {FC} from 'react';
import {makeStyles, TextField} from "@material-ui/core";

interface SearchBarProps {
    onChange: React.Dispatch<React.SetStateAction<string>>,
}

const SearchBar: FC<SearchBarProps> = ({onChange}) => {
    const classes = useStyles();
    const updateSearchFilter = (event: any) => {
        onChange(event.target.value.toLowerCase());
    };
    return (
        <TextField placeholder="search" onChange={updateSearchFilter} variant="outlined" className={classes.searchField}/>
    );
}

export default SearchBar;

const useStyles = makeStyles({
    searchField: {
        backgroundColor: "white",
    },
});