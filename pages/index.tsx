import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Button } from "react-bootstrap";
const useStyles = makeStyles({
    something: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        border: "solid blue 5px",
    },
    mainButton: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 24,
        background: "#ED546D",
        borderColor: "#ED546D",
        borderRadius: 20,
    },
});

const Home: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.something}>
            <Button className={classes.mainButton}>Vamos al desafío</Button>
        </div>
    );
};

export default Home;
