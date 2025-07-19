import './Navbar.css';
import {Link} from "react-router-dom";
import logo from '../../../assets/4182f013-ea12-48a1-838f-856ab8219a0f.jpg'
import {useEffect, useState} from "react";
export function Navbar() {

    const [username, setUsername] = useState<string | null>(null);
    const [role, setRole] = useState<string | null>(null)

    useEffect(() => {
        const storedUserName = localStorage.getItem("username");
        const storedRle = localStorage.getItem("role");
        setUsername(storedUserName);
        setRole(storedRle);
    }, []);

    return (
        <div className="navbar">
            <img className="icon" src={logo as string} alt=""/>
            <p  className="business-name">Organic shop</p>
            <ul>
                { role === 'customer' && (
                    <>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/about"}>About</Link></li>
                        <li><Link to={"/contact"}>Contact</Link></li>
                        <li><Link to={"/shoppingCart"}>Cart</Link></li>
                    </>
                )}
            </ul>
            {username ? (<p className="text-2xl text-white">{username}</p>
            ) : (
                <button className="button">
                    <Link to={"/login"}>Sign In</Link>
                </button>
            )}
        </div>
    );
}