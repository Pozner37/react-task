import React from 'react';
import './App.css';
import SideBar from "./features/sideBar/sideBar";
import GeneralTable from "./features/table/generalTable";
import FilterBar from "./features/quickFilters/filterBar";
import CreateItemBar from "./features/createItemBar/createItemBar";

function App() {
    return (
        <div className="App">
            <FilterBar></FilterBar>
            <GeneralTable></GeneralTable>
            <CreateItemBar/>
            <SideBar></SideBar>
        </div>
    );
}

export default App;
