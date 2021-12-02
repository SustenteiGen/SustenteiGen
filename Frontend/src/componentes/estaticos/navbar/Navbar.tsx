import React from "react";
import { AppBar, Toolbar, Typography, IconButton, MenuIcon, Button } from '@material-ui/core';
import "./Navbar.css";

function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    News
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
}
