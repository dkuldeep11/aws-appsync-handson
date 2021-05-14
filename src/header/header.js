import {Component} from "react";
import {AppBar, IconButton, Link, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "./classes.css";

export default class Header extends Component {

    render() {
        return (
            <div >
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>

                        <IconButton>
                            <a href="/">Home</a>
                        </IconButton>

                        <IconButton>
                            <a href="/upload">Projects</a>
                        </IconButton>

                        <IconButton>
                            <a href="/upload">Contact</a>
                        </IconButton>

                        <IconButton>
                            <a href="/employees">Employees</a>
                        </IconButton>

                        <IconButton className="login">
                            <a href="/login">Login</a>
                        </IconButton>

                        <a href="/upload" className="logout">
                            <AccountCircleIcon fontSize={"large"} color={"action"}>
                            </AccountCircleIcon>
                        </a>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
