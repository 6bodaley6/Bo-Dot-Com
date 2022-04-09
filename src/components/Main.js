import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid"
import FeaturedTiles from "./FeaturedTiles"

const useStyles = makeStyles((theme) => ({
    mainPage: {
        position: "relative",
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage:
            "url(https://ibb.co/TmcV0Rt)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    },
    overlay: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,.3)",
    },
    mainPageContent: {
        position: "relative",
        padding: theme.spacing(3),
        [theme.breakpoints.up("md")]: {
            padding: theme.spacing(12),
            paddingRight: 0,
        },
    },
}));

const featuredPosts = [
    {
        title: "About",
        description: "A little about my self and past experience.",
        url: "/about",
    },
    {
        title: "Projects",
        description: "Here are some of my previous projects",
        url: "/projects",
    },
    {
        title: "Contact",
        description: "Connect with me",
        url: "/contact",
    },
];
export default function Main() {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.mainPage}>
                {/* {
                    <img
                        style={{ display: "none" }}
                        src="https://i.ibb.co/vVbvmpt/48-F2-BE3-F-07-FE-4976-8514-5-F0-BA404149-A.jpg"
                        alt="48-F2-BE3-F-07-FE-4976-8514-5-F0-BA404149-A"
                    />
                } */}

                <div className={classes.overlay} />
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainPageContent}>
                            <Typography
                                component="h1"
                                variant="h2"
                                color="inherit"
                                gutterBottom
                            >
                                Bo Daley
                            </Typography>
                            <Typography variant="h5" color="inherit" paragraph>
                                Software Engineer
                            </Typography>
                            <Typography variant="subtitle1" color="inherit">
                                Passionate engineer who loves working with software and hardware.
                                I love to figure out why things work the way they do always taking apart xbox's, computers, hardware tools you name it!
                                I love being born in the period of time with which we have seen the most rapid exponential growth in technology and want to be apart of the series of advancments humanity has to bring.
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
            <Grid container spacing={3}>
                {featuredPosts.map((post) => (
                    <FeaturedTiles key={post.title} post={post} />
                ))}
            </Grid>
        </div>
    );
}