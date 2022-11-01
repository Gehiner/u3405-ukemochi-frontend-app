import "../../Styles/main.css"
import "../../Styles/mainTablet.css"
import "../../Styles/mainDesktop.css"
import "../../Styles/Products-Users/mainProductsUser.css"
import { Link } from "react-router-dom"
const Header=()=>{
    return(
        <header>
            <nav>
                <div className="menu-container">
                    <img src="https://i.ibb.co/M1HXCJJ/menu.webp" alt="Logo men&uacute"/>
                    <ul className="menu-container__options" id="opciones-menu">
                        <li><a href="">Productos</a></li>
                        <li><a href="">Cont&aacute;ctanos</a></li>
                        <li><a href="">About us</a></li>
                        <li><Link to="/productos">Iniciar Sesi&oacute;n</Link></li>
                    </ul>
                </div>
                <a href="/" className="logo">
                    <img src="https://i.ibb.co/vvmBLPb/logo.webp" alt="Logo" />
                </a>
                <div className="nav-container">
                    <a href="">Productos</a>
                    <a href="">Cont&aacute;ctanos</a>
                    <a href="">About us</a>
                </div>
                <Link to="/productos" className="Log-in">
                    Iniciar Sesi&oacute;n
                </Link>
                <div className="shopping-card">
                    <Link to="/carrito" className="shopping-card__link">
                        <img src="https://i.ibb.co/2gLkQdt/shopping-cart.webp" alt="Icono de carrito de compras"/>
                        <div className="shopping-card__number">
                            <span id="shopping-card-orden">0</span>
                        </div>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;