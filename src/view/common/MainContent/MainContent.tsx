import './MainContent.css'
import {Home} from "../../pages/Home/Home.tsx";
import {About} from "../../pages/About/About.tsx";
import {Route, Routes} from "react-router-dom";
import {Contact} from "../../pages/Contact/Contact.tsx";
import {ShoppingCart} from "../../pages/ShoppingCart/ShoppingCart.tsx";
export function MainContent() {
    return (
            <div className="main-content">
             <Routes>
                 <Route path="/" element={<Home />} />
                 <Route path="/about" element={<About />} />
                 <Route path="/contact" element={<Contact />} />
                 <Route path="/Cart" element={<ShoppingCart/>}/>
             </Routes>
            </div>

    );
}