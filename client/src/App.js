import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
    const [toggleSidebar, setToggleSidebar] = useState(false);

    return (
        <Router>
            <Navbar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
            <Sidebar toggleSidebar={toggleSidebar} />

            <Switch>
                <Route path="/">
                    <h1>News Feed</h1>
                </Route>
                <Route path="/find-friends">
                    <h1>Find Friends</h1>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
