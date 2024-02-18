import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import AuthService from "../services/AuthService";
import Storage from "../utils/Storage";
import { useNavigate } from "react-router";

const AppRegister = () => {
    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: ""
    });

    const {setUser} = useContext(UserContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false); 

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            setError("");
            setIsLoading(true);
            const result = await AuthService.register(data);
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
            <label>First name</label><br></br>
            <input type="text" value={data.first_name} onChange={e => setData({...data, first_name: e.target.value})} required /><br></br>
            <label>Last name</label><br></br>
            <input type="text" value={data.last_name} onChange={e => setData({...data, last_name: e.target.value})} required /><br></br>
            <label>Email</label><br></br>
            <input type="email" value={data.email} onChange={e => setData({...data, email: e.target.value})} required /><br></br>
            <label>Password</label><br></br>
            <input type="password" value={data.password} onChange={e => setData({...data, password: e.target.value})} required /><br></br>
            <label>Confirm password</label><br></br>
            <input type="password" value={data.password_confirmation} onChange={e => setData({...data, password_confirmation: e.target.value})} required /><br></br>
            <button type="submit" disabled={isLoading}>Register</button> 
        </form>
    );
}

export default AppRegister;

