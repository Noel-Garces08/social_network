import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

// Components
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

//Pages
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
    const [toggleSidebar, setToggleSidebar] = useState(false);

    return (
        <Router>
            <Navbar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
            <Sidebar toggleSidebar={toggleSidebar} />

            <main>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </main>
        </Router>
    );
};

export default App;
