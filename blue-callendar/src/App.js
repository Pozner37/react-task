import React from 'react';
import './App.css';
import SideBar from "./features/sideBar/sideBar";
import GeneralTable from "./features/table/generalTable";

function App() {
    return (
        <div className="App">
            <GeneralTable></GeneralTable>
            <SideBar></SideBar>
        </div>
    );
}

export default App;
