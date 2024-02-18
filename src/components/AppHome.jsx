import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const AppHome = () => {
    const { user } = useContext(UserContext);

    useEffect(() => {
        console.log(user);
    }, []);
}

export default AppHome;

