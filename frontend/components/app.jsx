import React from "react"
import { Route, Switch } from "react-router-dom"
import { Routes } from "react-router";
import HeaderContainer from "./header/header_container";
import Demo1 from "./demo1";
import Demo2 from "./demo1";
// import { AuthRoute, ProtectedRoute } from "../util/route_util";


const App = ( { store } ) => {
    return (<div>
        <Routes>
            <Route path="/" element={<HeaderContainer />} >
                <Route path="/demo1" element={<Demo1 />} />
                <Route path="/demo2" element={<Demo2 />} />
            </Route>
        </Routes>
    </div>)
}

export default App;