import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// // import { Box } from "material-ui/core";
import Box from '@material-ui/core/Box';

const aboutContent = {
    heading: "Bo Daley",
    headingText: "I love javascript ",
    firstSubHeading: "About",
    firstText:
        "I am 25 years old I am from Utah I have been married to my wife for 5 years we have two border colies Ladybird and Honeybee",
    secondSubHeading: "Experience",
    secondText:
        "I am a recent graduate of the 2021 University of Utah Coding Bootcamp",
}

const useStyles = makeStyles((theme) => ({
    box: {
        padding: theme.spacing(3),
        [theme.breakpoints.up("md")]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
    heading: {
        paddingBottom: "10px",
    },
    subheading: {
        paddingBottom: "10px",
        paddingTop: "10px",
    },
}));

export default function About() {
    const classes = useStyles();

    return (
        <Box className={classes.box}>
            <Typography variant="h3" className={classes.heading}>
                {aboutContent.heading}
            </Typography>
            <Typography variant="h6" style={{ paddingTop: "10px", paddingBottom: "10px" }}>{aboutContent.headingText}</Typography>
            <Typography variant="h4" className={classes.subheading}>
                {aboutContent.firstSubHeading}
            </Typography>
            <Typography variant="subtitle1">{aboutContent.firstText}</Typography>
            <Typography variant="h4" className={classes.subheading}>
                {aboutContent.secondSubHeading}
            </Typography>
            <Typography variant="subtitle1">{aboutContent.seondText}</Typography>
            <Typography variant="h4" className={classes.subheading}>
                {aboutContent.thirdSubHeading}
            </Typography>
            <Typography variant="subtitle1">{aboutContent.thirdText}</Typography>
        </Box>
    );
}