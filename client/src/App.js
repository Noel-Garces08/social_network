import React, { useState } from 'react';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
    const [toggleSidebar, setToggleSidebar] = useState(false);

    return (
        <>
            <Navbar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
            <Sidebar toggleSidebar={toggleSidebar} />
        </>
    );
};

export default App;
