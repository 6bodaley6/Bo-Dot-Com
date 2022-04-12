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
        "When I first started to learn TypeScript I was sceptical to say the least. But id like to list a few takeaways why I fell in love right away. After travervising my code easier and understanding relationships better. TypeScript will not let you write any null valued data or passing an object instead of an array. We can be assured that we can write valid and efficient code by errors. If our code compiles without any error, we are good to go! The features TypeScript allows because of its type checking allow the IDE to give awesome features including autocompletion and refactoring. I love the compiler options as well for instance when using the --strictNullChecks it gives us the assurance that we wont be using a variable that is unknown to the compiler. ",
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