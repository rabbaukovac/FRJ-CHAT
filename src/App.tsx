import React from 'react';
import './App.css';
import Login from "./Login";
import About from "./About";
import Contact from "./Contact";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home";



function App() {
    return (
        <Router>

                <Switch>

                    <Route path="/login">
                        <Login/>
                    </Route>

                    <Route path="/about">
                        <About/>
                    </Route>

                    <Route path="/contact">
                        <Contact/>
                    </Route>

                    <Route path="home">
                        <Home/>
                    </Route>

                    <Route path="/">
                        <Home/>
                    </Route>

                </Switch>


        </Router>


    )


}

export default App