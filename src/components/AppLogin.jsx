import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import AuthService from "../services/AuthService";
import Storage from "../utils/Storage";
import { useNavigate } from "react-router";

const AppLogin = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const {setUser} = useContext(UserContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            setIsLoading(true);
            setError("");
            const result = await AuthService.login(data);
            setUser(result.user);
            Storage.setString("token", result.token);
            navigate("/");
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <label>Email</label><br></br>
            <input type="email" value={data.email} onChange={e => setData({...data, email: e.target.value})} required /><br></br>
            <label>Password</label><br></br>
            <input type="password" value={data.password} onChange={e => setData({...data, password: e.target.value})} required /><br></br> 
            <button type="submit" disabled={isLoading}>Login</button>
        </form>
    );
}

export default AppLogin;

