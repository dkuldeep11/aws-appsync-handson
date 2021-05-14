import React, { Component } from "react";
import "./styles.css";
import {Button, TextField} from "@material-ui/core";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.myChangeHandler = this.myChangeHandler.bind(this);
        this.mySubmitHandler = this.mySubmitHandler.bind(this);
    }

    myChangeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting " + this.state.email + ' and pass = ' + this.state.password);
    }

    render() {
        return (
            <div className="App">
                <form className="form" onSubmit={this.mySubmitHandler}>
                    <div className="form__custom-input">
                        <TextField
                            name='email'
                            id="outlined-basic"
                            label="Username"
                            variant="outlined"
                            placeholder="ass"
                            className="form__custom-input-field"
                            onChange={this.myChangeHandler}
                             />
                        <TextField name='password' type="password" id="outlined-basic" label="Password" variant="outlined" className="form__custom-input-field" onChange={this.myChangeHandler} />
                    </div>

                    <Button variant="contained" color="primary" className="form__custom-button" type="submit" value="Submit">
                        Log in
                    </Button>
                </form>
            </div>
        );
    }
}
