import {Component} from "react";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './kstyles.css'

export default class KHeader extends Component {
    render() {
        return (
            <div className="header1">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper className="header2">xs=12</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className="header2">xs=6</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper >xs=6</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper >xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper >xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper >xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper >xs=3</Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
