import "../../Styles/main.css"
import "../../Styles/body.css"
import "../../Styles/mainTablet.css"
import "../../Styles/mainDesktop.css"
import "../../Styles/Products-Users/mainProductsUser.css"
import "../../Styles/index-admin/index-admin.css"
import "../../Styles/index-admin/index-admin-contend.css"
import "../../Styles/index-admin/index-admin-Desktop.css"
import "../../Styles/index-admin/index-admin-table-user.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
const Carrito=()=>{
    return(
        <body className="body">
            <Header/>
            <main className="main">
                <h1 className="main-title">Carrito</h1>
                <section className="cardShopping-container">
                    <section className="main-container-cardShopping">
                        <form action="" className="main-contend">
                            <label for="names" className="main-input main-input-big ">
                                <span>Nombres</span>
                                <input type="text" required id="names" name="names"/>
                            </label>
                            <label for="apellidos" className="main-input main-input-big">
                                <span>Apellidos</span>
                                <input type="text" required id="apellidos" name="apellidos"/>
                            </label>
                            <label for="email" className="main-input main-input-big">
                                <span>Email</span>
                                <input type="email" required id="email" name="email"/>
                            </label>
                            <label for="direccion" className="main-input main-input-big">
                                <span>Direcci&oacute;n</span>
                                <input type="text" required id="direccion" name="direccion"/>
                            </label>
                            <label for="telefono" className="main-input main-input-big main-input main-input-big--after-sing">
                                <span>Tel&eacute;fono</span>
                                <input type="text" required id="telefono" name="telefono"/>
                            </label>
                            <button type="submit" className="payment-button button">Pagar</button>
                        </form>
                    </section>
                    <section className="card-products-container">
                            <h2 className="card-products-title">
                                Productos
                            </h2>
                            <div className="card-products-contend">
                                <div className="card-products-items">
                                    <h3>Galleta</h3>
                                    <span><b>$</b>100000</span>
                                </div>
                                <div className="card-products-items">
                                    <h3>Galleta</h3>
                                    <span><b>$</b>100000</span>
                                </div>
                                <div className="card-products-items">
                                    <h3>Galleta</h3>
                                    <span><b>$</b>100000</span>
                                </div>
                                <div className="card-products-items">
                                    <h3>Galleta</h3>
                                    <span><b>$</b>100000</span>
                                </div>
                                <div className="card-products-items card-products-total">
                                    <h3>Total</h3>
                                    <span><b>$</b>100000</span>
                                </div>
                            </div>
                    </section>
                </section>
            </main>
            <Footer/>
        </body>
    )
}

export default Carrito;