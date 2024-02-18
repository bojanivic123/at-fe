import { Routes, Route } from "react-router";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PrivateRouter from "./utils/PrivateRouter";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<PrivateRouter />}>
                <Route index path="/" element={<Home />}></Route>
            </Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
        </Routes>
    );
}

export default Router;
