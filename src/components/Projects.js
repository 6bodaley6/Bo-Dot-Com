import React from 'react';
import Grid from '@material-ui/core/Grid'
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardMedia from "@material-ui/core/CardMedia";
// // import { CardMedia } from '@material-ui/core';
// // import { Hidden } from '@material-ui/core';
import Hidden from "@material-ui/core/Hidden"

import CardContent from '@material-ui/core/CardContent';
import { Box, Divider, Link } from "@material-ui/core"




const useStyles = makeStyles((theme) => ({
    box: {
        padding: theme.spacing(3),
        [theme.breakpoints.up("md")]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
    grid: {
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "center",
    },
    card: {
        padding: "10px",
        margin: "10px",
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    heading: {
        margin: "10px",
    },
}));

const projects = [
    {
        title: "Service Ticket Mangager",
        enviroment: "Javascript, HTML5, CSS, Nodemailer an npm package that you can use as an email manager",
        description: "Allow a user to create a ticket to deal with an issue. Have the issue have its own unique list item number that the user can view the status of the issue.",
        github: "https://github.com/6bodaley6/service-ticket-manager",
        url: "https://service-ticket-manager.herokuapp.com/",
        image: "",
        imageTitle: "",
    },
    {
        title: "Watchtower",
        enviroment: "React, HTML, CSS",
        description: "Watchtower allows hobbyists to create custom sensors to monitor their home envrionments and view the data online.",
        github: "https://github.com/zackaryanderson/watchtower",
        url: "https://safe-taiga-31978.herokuapp.com/ ",
        image: "",
        imageTitle: "",
    },
    {
        title: "What to Watch",
        enviroment: "Javascript, Materialize, HTML 5, CSS",
        description: "Movie search generator select couple of fields and how many movies and your all set for movie night",
        github: "https://github.com/KolbyLaw/What-to-Watch",
        url: "https://kolbylaw.github.io/What-to-Watch/",
        image: "",
        imageTitle: "",
    },
];

export default function Projects() {
    const classes = useStyles();

    return (
        <Box className={classes.box}>
            <Typography variant="h3" className={classes.heading}>
                Previous Projects
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={10} className={classes.grid}>
                    {projects.map((project) => (
                        <Card className={classes.card}>
                            <Box className={classes.cardDetails}>
                                <CardContent>
                                    <Typography component="h2" variant="h4">
                                        {project.title}
                                    </Typography>
                                    <Typography variant="subtitle1" paragraph>
                                        Enviroment: {project.enviroement}
                                    </Typography>
                                    <Typography variant="subtitle1" paragraph>
                                        {project.description}
                                    </Typography>
                                    {project.url === "" ? (
                                        <Typography
                                            variant="subtitle1"
                                            target="blank"
                                        >
                                            Deployed Site Under Construction
                                        </Typography>
                                    ) : (
                                        <Link
                                            variant="subtitle1"
                                            href={project.url}
                                            target="_blank"
                                        >
                                            Deployed Site
                                        </Link>
                                    )}
                                    <Divider style={{ margin: "10px" }} />
                                    {project.github === "" ? (
                                        <Typography variant="subtitle1">
                                            Sorry Not Available at this time.
                                        </Typography>
                                    ) : (
                                        <Link
                                            variant="subtitle1"
                                            href={project.github}
                                            target="_blank"
                                        >
                                            Github
                                        </Link>
                                    )}
                                </CardContent>
                            </Box>
                            <Hidden xsDown>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={project.image}
                                    title={project.imageTitle}
                                />
                            </Hidden>
                        </Card>
                    ))}
                </Grid>
            </Grid >
        </Box >
    );
}
