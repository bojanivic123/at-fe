import { UserContext } from "../context/UserContext";
import useUser from "../hooks/useUser";

const UserProvider = ({children}) => {
    const { user, setUser, logout } = useUser();

    return (
        <UserContext.Provider value={{ user, setUser, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;


