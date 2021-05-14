import {Component} from "react";
import {TextField} from "@material-ui/core";

export default class Login2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.username + ' pass = ' + this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
                    <textarea name="username" onChange={this.handleChange} />
                </label>

                Pass:
                <textarea name="password" onChange={this.handleChange} />

                {/*<TextField id="outlined-basic" label="Password" variant="outlined" className="form__custom-input-field" onChange={this.handleChange} value={this.state.value} />*/}
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
