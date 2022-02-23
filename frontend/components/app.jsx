import React from "react"
import { Route, Switch } from "react-router-dom"
import { Routes } from "react-router";
import HeaderContainer from "./header/header_container";
import AboutContainer from "./about/about_container";
import WebdevContainer from "./webdev/webdev_container";
import Empty from "./empty/empty";
// import { AuthRoute, ProtectedRoute } from "../util/route_util";


const App = ( { store } ) => {
    return (<div id="body">
        <Routes>
            <Route path="/" element={<HeaderContainer />} >
                <Route path="/about" element={<Empty />} />
                <Route path="/music" element={<Empty />} />
                <Route path="/production" element={<Empty />} />
                <Route path="/modeling" element={<Empty />} />
                <Route path="/webdev" element={<WebdevContainer />} />
                <Route path="/socials" element={<Empty />} />
            </Route>
        </Routes>
    </div>)
}

export default App;