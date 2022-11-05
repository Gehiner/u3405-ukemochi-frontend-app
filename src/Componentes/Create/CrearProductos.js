import "../../Styles/index-admin/index-admin.css"
import "../../Styles/index-admin/index-admin-contend.css"
import "../../Styles/index-admin/index-admin-Desktop.css"
import "../../Styles/index-admin/index-admin-table-productos.css"
import "../../Styles/Products-Users/mainProductsUser.css"
import { Link } from "react-router-dom"
import HeaderAdmin from "../Header/HeaderAdmin"
const CrearProductos=()=>{
    return(
        <body>
            <HeaderAdmin/>
            <main>
                <section className="sidebar" id="opciones-menu">
                    <a className="sidebar-option active" href="">
                        <img src="https://i.ibb.co/NZF6kqQ/carbon-add-filled.webp" alt="icono de añadir"/>
                        <span>Crear Productos</span>
                    </a>
                    <a className="sidebar-option disabled" href="admin-productos.html">
                        <img src="https://i.ibb.co/vdkwrZT/mdi-candy-White.webp" alt="icono de dulces"/>
                        <span>Productos</span>
                    </a>
                    <a className="sidebar-option disabled" href="admin-crearUsuario.html">
                        <img src="https://i.ibb.co/QFQVYrt/bxs-user-plus-White.webp" alt="icono de añadir usuario"/>
                        <span>Crear Usuario</span>
                    </a>
                    <a className="sidebar-option disabled" href="">
                        <img src="https://i.ibb.co/7y7t2LX/bxs-user-circle-White.webp" alt=""/>
                        <span>Usuarios</span>
                    </a>
                    <a className="sidebar-option disabled" href="">
                        <img src="https://i.ibb.co/K0VRBHk/bxs-log-out-circle-White.webp" alt=""/>
                        <span>Cerrar Sesi&oacute;n</span>
                    </a>
                </section>
                <section className="sidebar-Desktop">
                    <Link className="sidebar-option active" to="/productos/create">
                        <img src="https://i.ibb.co/NZF6kqQ/carbon-add-filled.webp" alt="icono de añadir"/>
                        <span>Crear Productos</span>
                    </Link>
                    <Link className="sidebar-option disabled" to="/productos">
                        <img src="https://i.ibb.co/vdkwrZT/mdi-candy-White.webp" alt="icono de dulces"/>
                        <span>Productos</span>
                    </Link>
                    <Link className="sidebar-option disabled"  to="/usuarios/crear">
                        <img src="https://i.ibb.co/QFQVYrt/bxs-user-plus-White.webp" alt="icono de añadir usuario"/>
                        <span>Crear Usuarios</span>
                    </Link>
                    <Link className="sidebar-option disabled" to="/usuarios">
                        <img src="https://i.ibb.co/7y7t2LX/bxs-user-circle-White.webp" alt="Icono de Usuario"/>
                        <span>Usuarios</span>
                    </Link>
                    <a className="sidebar-option disabled" href="">
                        <img src="https://i.ibb.co/K0VRBHk/bxs-log-out-circle-White.webp" alt=""/>
                        <span>Cerrar Sesi&oacute;n</span>
                    </a>
                </section>
                <section className="main-container">
                    <h2 className="main-title">Crear Productos</h2>
                    <form action="" className="main-contend">
                        <label for="categoria" className="main-input">
                            <span>Categor&iacute;a</span>
                            <select type="text" required id="categoria" name="categoria">
                                <option value="Galletas">Galletas</option>
                                <option value="Galletas">Chocolatinas</option>
                            </select>
                        </label>
                        <label for="name" className="main-input">
                            <span>Nombre</span>
                            <input type="text" required id="name" name="name"/>
                        </label>
                        <label for="cantidad" className="main-input">
                            <span>Cantidad</span>
                            <input type="number" required id="cantidad" name="cantidad"/>
                        </label>
                        <label for="marca" className="main-input">
                            <span>Marca</span>
                            <input type="text" required id="marca" name="marca"/>
                        </label>
                        <label for="descripcion" className="main-input main-input--big">
                            <span>Descripci&oacute;n</span>
                            <textarea cols="20" rows="5" required id="descripcion" name="descripcion"> </textarea>
                        </label>
                        <label for="precio" className="main-input main-input--after-sing">
                            <span>Precio $</span>
                            <input type="number" required id="precio" name="precio"/>
                        </label>
                        <label for="keywords" className="main-input">
                            <span>Palabras claves separadas por <b>;</b></span>
                            <input type="text" required id="keywords" name="keywords"/>
                        </label>
                        <label for="url" className="main-input">
                            <span>URL de la imagen</span>
                            <input type="url" required id="url" name="url"/>
                        </label>
                        <label for="disponibilidad" className="input-checkbox-container">
                            <div className="input-checkbox">
                                <input type="checkbox" required id="disponibilidad" name="disponibilidad"/>
                                <span>Disponible</span>
                            </div>
                        </label>
                        <button type="submit" className="payment-button button">Crear</button>
                    </form>
                </section>
            </main>
        </body>
    )
}
export default CrearProductos;