import React from 'react';
import './App.css';
import Navbar from "./components/navigation/Navbar";
import BlogOverview from "./pages/BlogOverview";
import Home from "./pages/Home";
import Login from "./pages/Login";
import BlogPosts from "./pages/BlogPosts";
import {
    Routes,
    Route,
} from "react-router-dom";

function App() {

    return (
        <div id='wrapper'>
            <Navbar/>
            <div id='pages'>
                <Routes>
                    <Route exact
                           path='/'
                           element={<Home/>}/>
                    <Route path='/login'
                           element={<Login/>}/>
                    <Route path='/blogposts'
                           element={<BlogOverview/>}/>
                    <Route path='/blogposts/:blogId'
                           element={<BlogPosts/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
