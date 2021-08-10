import React from "react";
import NullProps from "./NullProps";


type CreateAccount={
    firstName:string,
    lastName:string,
    desiredUsername:string,
    desiredPassword:string,
    dob:string

}
export default class Create extends React.Component <NullProps,CreateAccount> {


    constructor(props: Readonly<CreateAccount>) {
        super(props);
        this.state = {
            firstName:"",
            lastName:"",
            desiredUsername:"",
            desiredPassword:"",
            dob:""

        }
    }

    render(){
        return (
        <div>
        <p>
            <input type="text" placeholder="desired username"  onChange={(event)=>this.setState({})}/>
            <input type="text" placeholder="desired password"  onChange={(event)=>this.setState({})}/>
            <input type="text" placeholder="mm/dd/year"  onChange={(event)=>this.setState({})}/>
            <input type="text" placeholder="first name"  onChange={(event)=>this.setState({})}/>
            <input type="text" placeholder="last name"  onChange={(event)=>this.setState({})}/>
            <button> Create Account </button>

        </p>
        </div>
        )}

}
