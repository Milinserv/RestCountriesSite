import React from "react";
import './css/app.css';
import {Routes, Route} from "react-router-dom";
import Countries from "./pages/Countries";
import ViewCountry from "./pages/ViewCountry";

const App = () => {
    return <div className="flex justify-center">
        <Routes>
            <Route path="/" element={<Countries/>}/>
            <Route path="/view/:name" element={<ViewCountry/>} />
        </Routes>
    </div>
}

export default App;
