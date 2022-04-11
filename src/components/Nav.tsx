import React from 'react';
import SearchBar from './SearchBar';
import { AppBar, Toolbar, Grid, Typography } from '@material-ui/core';

export default function Nav(): JSX.Element {
    return (
        <AppBar position='static'>
            <Toolbar style={{padding:'1vh'}}>
                <Grid
                    container
                    direction='row'
                    justifyContent='space-around'
                    alignItems='center'
                >
                    <Typography>Weather App</Typography>
                    <SearchBar />
                    <Typography>App</Typography>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
