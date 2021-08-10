import React from "react";
import NullProps from "./NullProps";

type LoginState = {
    passwordMask: boolean,
    username: string,
    password: string,
}


export default class Login extends React.Component <NullProps, LoginState> {


    constructor(props: Readonly<NullProps> | NullProps) {
        super(props);
        this.state = {
            passwordMask: true,
            username: "",
            password: ""

        }
    }

// Login function username and password input
    // create account function w/
    // first name, last name, dob, username, password, login button,
    //


    render() {
        return (
            <div>
                <p>
                    <input type="text" placeholder="username"  onChange={(event)=>this.setState({username:event.target.value})}/>
                    <input type="text" placeholder="password"  onChange={(event)=>this.setState({password:event.target.value})}/>
                    <button>log in</button>
                </p>
            </div>
        )
    }
}
