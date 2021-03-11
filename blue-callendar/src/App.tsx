import React, {useState} from 'react';
import './App.css';
import FilterBar from "./features/tableFilters/filterBar";
import SearchBar from "./features/searchBar/searchBar";
import CalendarTable from "./features/CalendarTable/calendarTable";
import {Card, Fab, makeStyles, Table, TableBody, TableCell, TableContainer, TableRow} from "@material-ui/core";
import {FilterEnum} from './features/tableFilters/filters';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';
import AddForm from "./features/editForm/addForm";
import EditForm from "./features/editForm/editForm";
import BasicEntity from "./features/basicEntity/basicEntity";
import HomePage from "./app/homePage";

function App() {
    const classes = useStyles()
    const [filter, setFilter] = useState<FilterEnum>(FilterEnum.NO_FILTER);
    const [searchFilter, setSearchFilter] = useState("");
    const [editItem, setEditItem] = useState<BasicEntity>();

    return (
        <div className="App">
            <TableContainer>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell className={classes.cell}>
                                <Card className={classes.card}>
                                    <Router>
                                        <div>
                                            <Switch>
                                                <Route path="/add">
                                                    <AddForm/>
                                                </Route>
                                                <Route path="/edit">
                                                    <EditForm item={editItem}/>
                                                </Route>
                                                <Route path="/">
                                                    <HomePage searchFilter={searchFilter} filter={filter}
                                                              setEditItem={setEditItem} setFilter={setFilter}
                                                              setSearchFilter={setSearchFilter}/>
                                                </Route>
                                            </Switch>
                                        </div>
                                    </Router>
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

const useStyles = makeStyles({
    cell: {
        textAlign: "center",
        padding: "40px 40px",
    },
    card: {
        backgroundColor: "#9ce1ff"
    }
});
