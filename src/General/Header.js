const Header=()=>{
    return(
        <header>
            <nav>
                <div className="menu-container">
                    <img src="Styles/Icons/menu.webp" alt="Logo men&uacute"  onclick="menu()"/>
                    <ul className="menu-container__options" id="opciones-menu">
                        <li><a href="">Productos</a></li>
                        <li><a href="">Cont&aacute;ctanos</a></li>
                        <li><a href="">About us</a></li>
                        <li><a href="">Iniciar Sesi&oacute;n</a></li>
                    </ul>
                </div>
                <a href="index.html" className="logo">
                    <img src="Styles/Icons/logo.webp" alt="Logo" />
                </a>
                <div className="nav-container">
                    <a href="">Productos</a>
                    <a href="">Cont&aacute;ctanos</a>
                    <a href="">About us</a>
                </div>
                <a href="" className="Log-in">
                    Iniciar Sesi&oacute;n
                </a>
                <div className="shopping-card">
                    <a href="Shoping-Card.html" className="shopping-card__link">
                        <img src="Styles/Icons/shopping_cart.webp" alt="Icono de carrito de compras"/>
                        <div className="shopping-card__number">
                            <span id="shopping-card-orden">0</span>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}
export default Header;