import React from "react";
import './css/app.css';
import {Routes, Route} from "react-router-dom";
import Cities from "./pages/Cities";
import ViewCity from "./pages/ViewCity";

const App = () => {
    return <div className="flex justify-center">
        <Routes>
            <Route path="/" element={<Cities/>}/>
            <Route path="/view/:name" element={<ViewCity/>} />
        </Routes>
    </div>
}

export default App;
