import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="d-flex">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/store">Store</Link>
                <Link className="link" to="/branches">Branches</Link>
                <Link className="link" to="/franchises">Franchises</Link>
                <Link className="link" to="/cart">Cart</Link>
            </nav>
        </header>
    )
}

export default Header;