import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// // import { Box } from "material-ui/core";
import Box from '@material-ui/core/Box';

const aboutContent = {
    heading: "Bo Daley",
    headingText: "I love bringing hardware and software together have been taking apart my xbox's, computers, tools and machinary because I just loved to figure out how I worked when you looked under the surface and what actually is the underlying components that make up all the gizmos and gadgets we have. I feel the same way about sofware I just love to figure out what actually drives an application it is so exhilarating when you get a new technology working for the first time.",
    firstSubHeading: "About",
    firstText:
        "I am 24 years old I am from Utah I have been married to my wife for 4 years we have a puppy named Lady Bird she is a border collie",
    secondSubHeading: "Experience",
    secondText:
        "I am a recent graduate of the 2021 University of Utah Coding Bootcamp",
    thirdSubHeading: "My Past experience in construction",
    thirdText:
        "I have been in the construction industry for 5 years and have works on anything from multi million dollar custom homes to commercial construction projects, quality control inspector. I have had many managment and team lead positions as well and comfortable working in scrum enviroment."
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