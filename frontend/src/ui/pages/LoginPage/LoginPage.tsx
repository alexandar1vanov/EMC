import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const baseURL = "http://localhost:8080/api/user";

    const handleLogin = () => {
        axios.post(`${baseURL}/login`, {
            username,
            password
        }).then(res => {
            console.log("LOGIN RESPONSE:", res.data);

            const token = res.data.token;

            console.log("TOKEN FROM BACKEND:", token);

            localStorage.setItem("token", token);

            console.log("SAVED:", localStorage.getItem("token"));

                navigate("/books"); // redirect после login
            })
            .catch(err => {
                console.log("LOGIN ERROR:", err);
                alert("Wrong credentials!");
            });
    };

    return (
        <div>
            <h2>Login</h2>

            <input
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
            />

            <input
                placeholder="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleLogin}>
                Login
            </button>
        </div>
    );
};

export default LoginPage;