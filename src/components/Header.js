import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from '@material-ui/core/styles';
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        justifyContent: "center",
        borderBottom: `1px solid ${theme.palette.divider}`,
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar}>
                <Link
                    variant="h6"
                    key="home"
                    color="inherit"
                    noWrap
                    className={classes.toolbarTitle}
                    href="/"
                    style={{ textDecoration: "none" }}
                >
                    Bo Daley
                </Link>
                <a href="/">
                    <img
                        style={{ width: "100px", marginLeft: "10px", marginRight: "10px" }}
                        src="https://drive.google.com/file/d/1U_Qwhz8F0EdhyMe-GJzw6QDWdLVKHq83/view?usp=sharing"
                        alt="oloid"
                    />
                </a>

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
                <Typography></Typography>
                <Link
                    color="inherit"
                    key="contact"
                    variant="body2"
                    herof="/contact"
                    className={classes.toolbarLink}
                    style={{ textDecoration: "none" }}
                >
                    Contact
                </Link>
            </Toolbar>
        </React.Fragment>
    )
}