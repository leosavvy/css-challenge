import "./Loading.css";
import { makeStyles, Typography } from "@material-ui/core";
import { FC, useEffect, useState } from "react";
import spin from "../../Spin.png";

const useStyles = makeStyles({
    loadingContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    loadingText: {
        fontWeight: 500,
        fontSize: 24,
        color: "#ED546D",
    },
});

export const Loading: FC = () => {
    const classes = useStyles();
    const [dotOperation, setDotOperation] = useState(false);
    const [dotQuantity, setDotQuantity] = useState(1);

    const sleep = (milliseconds: number) => {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
    };

    useEffect(() => {
        sleep(250).then(() => {
            if (dotQuantity === 1 || dotQuantity === 3) {
                setDotOperation(!dotOperation);
            }

            dotOperation
                ? setDotQuantity(dotQuantity - 1)
                : setDotQuantity(dotQuantity + 1);
        });
    }, [dotQuantity]);

    return (
        <div className={classes.loadingContainer}>
            <img src={spin} className="App-logo" alt="logo" />
            <Typography className={classes.loadingText}>
                Loading...{".".repeat(dotQuantity)}
            </Typography>
        </div>
    );
};
