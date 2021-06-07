import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"©Bo Daley"}
            <Link
                color="inhererit"
                target="_blank"
                href="https://github.com/6bodaley6/bo-dot-com"
            >
            </Link>
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6, 0),
    },
}));

export default function Footer(props) {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="textSecondary"
                    component="p"
                >
                    namaste
                </Typography>
                <Copyright />
            </Container>
        </footer>
    );
}