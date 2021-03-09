import React, {useState} from 'react';
import './App.css';
import FilterBar from "./features/tableFilters/filterBar";
import CreateItemBar from "./features/createItemBar/createItemBar";
import SearchBar from "./features/searchBar/searchBar";
import CalendarTable from "./features/CalendarTable/calendarTable";
import {Card, Table, TableBody, TableCell, TableContainer, TableRow} from "@material-ui/core";
import {FilterEnum} from './features/tableFilters/filters';

function App() {
    const [filter, setFilter] = useState<FilterEnum>(FilterEnum.NO_FILTER);
    const [searchFilter, setSearchFilter] = useState("");
    return (
        <div className="App">
            <TableContainer>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell style={{textAlign: "center"}}>
                                <Card style={{backgroundColor: "lightcyan"}}>
                                    <SearchBar onChange={setSearchFilter}/>
                                    <FilterBar setFilter={setFilter} filter={filter}/>
                                    <CalendarTable searchFilter={searchFilter} filter={filter}/>
                                    <CreateItemBar/>
                                </Card>
                            </TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        <TableRow></TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default App;
