import './App.css';
// import { Navbar } from './view/common/Navbar/Navbar.tsx';
// import {MainContent} from "./view/common/MainContent/MainContent.tsx";
// import {Footer} from "./view/common/Footer/Footer.tsx";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import {Login} from "./view/pages/Login/Login.tsx";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout.tsx";
import React, {useEffect} from "react";
import {isTokenExpired} from "./auth/auth.ts";
// import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout.tsx";

function App() {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token || isTokenExpired(token)){
            localStorage.removeItem("token");
            localStorage.removeItem("refreshToken")
            navigate("/login");
        }
    }, [navigate]);
    return (
        <>
                {/*<DefaultLayout/>*/}
                <Routes>
                    <Route path="/*" element={<DefaultLayout/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                </Routes>
        </>
    );
}
export default App;