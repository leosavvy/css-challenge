import { FC, useState } from "react";

import { makeStyles } from "@material-ui/core";
import { BasicButton } from "./components/BasicButton/BasicButton";
import { Loading } from "./components/Loading/Loading";

const useStyles = makeStyles({
    mainButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    loadingPadding: {
        padding: "177px 110px 436px 110px",
    },
});

export const App: FC = () => {
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async () => {
        setIsLoading(!isLoading);
    };

    return (
        <div
            className={`${
                !isLoading ? classes.mainButton : classes.loadingPadding
            }`}
        >
            {isLoading === true ? (
                <Loading />
            ) : (
                <BasicButton text={"Vamos al desafío"} onClick={handleClick} />
            )}
        </div>
    );
};

export default App;
