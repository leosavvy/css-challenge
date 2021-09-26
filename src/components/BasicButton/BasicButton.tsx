import { Button, makeStyles, Typography } from "@material-ui/core";
import { FC } from "react";
import { BasicButtonProps } from "./BasicButtonProps";

const useStyles = makeStyles({
    mainButton: {
        height: 64,
        width: 261,
        background: "#ED546D",
        borderColor: "#ED546D",
        borderRadius: 20,
        "&:hover": {
            cursor: "pointer",
            background: "#ED546D",
            borderColor: "#ED546D",
        },
    },
    buttonText: {
        fontWeight: 500,
        fontSize: 24,
        color: "white",
        textTransform: "none",
    },
});

export const BasicButton: FC<BasicButtonProps> = ({ text, onClick }) => {
    const classes = useStyles();

    return (
        <Button
            className={classes.mainButton}
            onClick={() => {
                onClick();
            }}
        >
            <Typography className={classes.buttonText}>{text}</Typography>
        </Button>
    );
};
