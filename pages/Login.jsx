import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../api";


export default function Login() {
    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" });
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState(null);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from || "/host";

    function handleSubmit(e) {
        e.preventDefault();
        setStatus("submitting");
        loginUser(loginFormData)
            .then(data => {
                setError(null);
                localStorage.setItem("loggedin", true);
                navigate(from, { replace: true });
            })
            .catch(err => {
                setError(err);
            })
            .finally(() => {
                setStatus("idle");
            });
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 shadow-md rounded-lg w-full max-w-md hover:shadow-2xl">
                <h1 className="text-2xl font-semibold mb-4">Sign in to Your Account</h1>
                {location.state?.message && <p className="text-red-600 mb-4">{location.state.message}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email address
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            value={loginFormData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            name="password"
                            value={loginFormData.password}
                            onChange={handleChange}
                        />
                    </div>
                    {error?.message && <p className="text-red-600 mb-4">{error.message}</p>}
                    <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                    >
                        {status === "submitting" ? "Logging in..." : "Log in"}
                    </button>
                </form>
            </div>
        </div>
    );
}
