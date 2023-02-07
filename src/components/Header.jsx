import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../styles/Header.scss';

const Header = () => {
    return (
        <header className="header d-flex">
            <figure>
                <Link className="link" to="/">
                    <img src="https://thecoffeestore.com/wp-content/uploads/2021/05/TCS-logo-negro-2018.png" alt="logo" />
                </Link>
            </figure>
            <nav className="d-flex desktop">
                <ul className="links d-flex">
                    <li>
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="link" to="/store">Store</Link>
                    </li>
                    <li>
                        <Link className="link" to="/branches">Branches</Link>
                    </li>
                    <li>
                        <Link className="link" to="/franchises">Franchises</Link>
                    </li>
                    <div className="counter-cart d-flex">
                        <div className="prods">
                            <span className="prods-quant d-flex">0</span>
                        </div>
                        <li>
                            <Link className="link" to="/cart">
                                <ShoppingCartIcon />
                            </Link>
                        </li>
                    </div>
                </ul>
            </nav>
            <nav className="invisible mobile-menu">
                <button>
                    <MenuIcon />
                </button>
            </nav>
        </header>
    )
}

export default Header;