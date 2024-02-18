import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Nav = () => {
    const { user, logout } = useContext(UserContext);

    return (
        <div>
            { !user ?
            <>
                <Link to={"/register"}>Register</Link>
                <Link to={"/login"}>Login</Link>
            </> : 
                <Link onClick={() => logout()}>Logout</Link>
            }
        </div>
    );
}

export default Nav;

