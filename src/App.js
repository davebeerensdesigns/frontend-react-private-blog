import React, {useContext} from 'react';
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
import {AuthenticatedContext} from "./providers/AuthenticatedProvider";
import ProtectedRoute from "./common/ProtectedRoute";

function App() {

    const [authenticatedValue, setAuthenticatedValue] = useContext(AuthenticatedContext);

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
                           element={
                               <ProtectedRoute authenticated={authenticatedValue}>
                                   <BlogOverview/>
                               </ProtectedRoute>
                           }/>
                    <Route path='/blogposts/:blogId'
                           element={
                               <ProtectedRoute authenticated={authenticatedValue}>
                                   <BlogPosts/>
                               </ProtectedRoute>
                           }/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
