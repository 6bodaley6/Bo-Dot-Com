import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from '@material-ui/core/styles';
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import logo from "../assets/pandaicon.jpeg";


const useStyles = makeStyles((theme) => ({
    toolbar: {
        justifyContent: "center",
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        paddingLeft: "15px",
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar}>
                <Link
                    variant="h5"
                    key="home"
                    color="inherit"
                    noWrap
                    className={classes.toolbarTitle}
                    href="/"
                    style={{ textDecoration: "none" }}
                >
                    Bo Daley
                </Link>

                <img
                    style={{ width: "110px", marginLeft: "11px", marginRight: "10px", backgroundColor: false }}

                    src={logo}

                    alt="panda icon"
                />

                <Link
                    color="inherit"
                    key="about"
                    variant="body2"
                    href="/about"
                    className={classes.toolbarLink}
                    style={{ textDecoration: "none" }}
                >
                    About
                </Link>
                <Typography>/</Typography>
                <Link
                    color="inherit"
                    key="projects"
                    variant="body2"
                    href="/projects"
                    className={classes.toolbarLink}
                    style={{ textDecoration: "none" }}
                >
                    Projects
                </Link>
                <Typography>/</Typography>
                <Link
                    color="inherit"
                    key="contact"
                    variant="body2"
                    href="/contact"
                    className={classes.toolbarLink}
                    style={{ textDecoration: "none" }}
                >
                    Contact
                </Link>
            </Toolbar>
        </React.Fragment>
    );
}