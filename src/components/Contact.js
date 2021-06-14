import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// // import CardMedia from "@material-ui/core/CardMedia";
import { CardMedia } from '@material-ui/core';
import { Hidden } from '@material-ui/core';
// // import Hidden from "@material/core/Hidden";
import { Avatar, Box, Link } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
// // import EmailIcon from '@material-ui/icons/Email';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
// import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    card: {
        display: "flex",
        marginTop: "20px",
        justifyContent: "center",
    },
    cardContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: theme.spacing(2),
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
}));

const contactInfo = [
    {
        icon: <EmailIcon />,
        title: "Email",
        email: "bodaley@proton.com",
        image: "",
        imageTitle: "",
    },
    {
        icon: <LinkedInIcon />,
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/bo-daley-49054a1b1/",
        image: "",
        imageTitle: "",
    },
    {
        icon: <GitHubIcon />,
        title: "Github",
        url: "https://github.com/6bodaley6",
        image: "",
        imageTitle: "",
    },
];

export default function Contact() {
    const classes = useStyles();

    return (
        <Grid container spacing={6}>
            {contactInfo.map((contactInfo) => (
                <Grid item xs={12} md={4}>
                    <Card className={classes.card}>
                        <Box>
                            <CardContent className={classes.cardContent}>
                                <Avatar className={classes.avatar}>{contactInfo.icon}</Avatar>
                                <Typography
                                    component="h2"
                                    variant="h4"
                                    style={{ margin: "15px" }}
                                >
                                    {contactInfo.title}
                                </Typography>
                                {contactInfo.email ? (
                                    <Typography variant="subtitle1" paragraph>
                                        {contactInfo.email}
                                    </Typography>
                                ) : (
                                    <Link
                                        variant="subtitle1"
                                        href={contactInfo.url}
                                        target="_blank"
                                        style={{ marginBottom: "15px" }}
                                    >
                                        Go to {contactInfo.title}
                                    </Link>
                                )}
                            </CardContent>
                        </Box>
                        <Hidden xsDown>
                            <CardMedia
                                className={classes.cardMedia}
                                image={contactInfo.image}
                                title={contactInfo.imageTitle}
                            />
                        </Hidden>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}