import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from '@material-ui/core/styles';
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        justifyContent: "center",
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        paddingLeft: "15px",
    },
    toobarLink: {
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

                <a href="https://ibb.co/LhRSDbG">
                    <img
                        style={{ width: "110px", marginLeft: "11px", marginRight: "10px" }}
                        src="https://i.ibb.co/LhRSDbG/342-F9-B12-8-DDF-4-DB2-A165-FFDB43-DE2-D83.png"
                        alt="342-F9-B12-8-DDF-4-DB2-A165-FFDB43-DE2-D83"
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
                <Typography>/</Typography>
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
    );
}