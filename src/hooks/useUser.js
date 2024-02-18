import { useState, useEffect } from "react";
import AuthService from "../services/AuthService";
import Storage from "../utils/Storage";
import { useNavigate } from "react-router";

const useUser = () => {
    const [user, setUser] = useState(Storage.get("user") || undefined);
    const navigate = useNavigate();

    const logout = async () => {
        try {
            await AuthService.logout();
        } catch (e) {
            console.log(e);
        } finally {
            setUser(undefined);
            Storage.clear("user");
            navigate("/login");
        }
    }

    useEffect(() => {
        if (user) {
            Storage.set("user", user);
        }
    }, [user]);

    return {user, setUser, logout}

}

export default useUser;

