import React from 'react';
import './App.css';
import Login from "./Login";
import About from "./About";
import Contact from "./Contact";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Create from "./Create"
import {Link} from "@material-ui/core";
import {useHistory} from 'react-router-dom';


function App() {


    return (
        <div>

            <Router>

                {NavBar()}
                <div className="marginBar">
                <Switch>

                    <Route path="/create">
                    <Create/>
                    </Route>

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
                </div>

            </Router>

        </div>


    )


}


function NavBar() {
    function about() {
        window.location.href = 'http://localhost:3000/about';
    }

    function login() {
        window.location.href = 'http://localhost:3000/login';
    }

    function contact() {
        window.location.href = 'http://localhost:3000/contact';
    }
    function create() {
        window.location.href = 'http://localhost:3000/create';
    }


    return (
        <div>
            <AppBar position="fixed">

                <Toolbar>

                    <IconButton edge="start" color="inherit" aria-label="menu">

                        <MenuIcon/>

                    </IconButton>

                    <Typography style={{"flex": 1}} variant="h6">

                    </Typography>





                    <Button onClick={login} id="logButton" color="inherit">Login</Button>

                    <Button onClick={create} id="createrButton" color="inherit"> Create Account</Button>

                    <Button onClick={contact} id="contactButton" color="inherit">Contact us</Button>

                    <Button onClick={about}   id="aboutButton" color="inherit"> About us</Button>



                </Toolbar>

            </AppBar>

        </div>
    )
}


export default App