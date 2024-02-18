import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Outlet, Navigate } from "react-router";

const PrivateRouter = () => {
    const { user } = useContext(UserContext);

    return ( user ? <Outlet /> : <Navigate to={"/login"} /> );
}

export default PrivateRouter;

