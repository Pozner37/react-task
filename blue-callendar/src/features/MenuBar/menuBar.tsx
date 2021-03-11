import React, {FC} from 'react';
import {FilterEnum} from "../tableFilters/filters";
import {Fab, makeStyles, Table, TableBody, TableCell, TableRow, Typography} from "@material-ui/core";
import SearchBar from "../searchBar/searchBar";
import FilterBar from "../tableFilters/filterBar";
import {Link} from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";

interface MenuBarProps {
    setSearchFilter: React.Dispatch<React.SetStateAction<string>>,
    filter: FilterEnum,
    setFilter: React.Dispatch<React.SetStateAction<FilterEnum>>
}

const MenuBar: FC<MenuBarProps> = ({setSearchFilter, filter, setFilter}) => {
    const classes = useStyles();
    return (
        <Table>
            <TableBody>
                <TableRow>
                    <TableCell>
                        <Typography className={classes.title}>Blue Calendar</Typography>
                    </TableCell>
                    <TableCell>
                        <SearchBar setSearchFilter={setSearchFilter}/>
                    </TableCell>
                    <TableCell>
                        <FilterBar setFilter={setFilter} filter={filter}/>
                    </TableCell>
                    <TableCell>
                        <Link to="/add"><Fab><AddIcon/></Fab></Link>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>);
};

const useStyles = makeStyles({
    title: {
        fontSize: "34px",
        textAlign: "center",
        fontWeight: "bold"
    }
})

export default MenuBar;