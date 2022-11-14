import "../../Styles/index-admin/index-admin.css"
import "../../Styles/index-admin/index-admin-contend.css"
import "../../Styles/index-admin/index-admin-Desktop.css"
import "../../Styles/index-admin/index-admin-table-user.css"
import "../../Styles/main.css"
import { Link } from "react-router-dom"
import HeaderAdmin from "../Header/HeaderAdmin"
const CrearUsuarios=()=>{
    return(
        <body>
            <HeaderAdmin/>
            <main>
                <section className="sidebar" id="opciones-menu">
                        <a className="sidebar-option disabled" href="index-admin.html">
                            <img src="https://i.ibb.co/ThSRhvf/carbon-add-filled-White.webp" alt="icono de añadir"/>
                            <span>Crear Productos</span>
                        </a>
                        <a className="sidebar-option disabled" href="admin-productos.html">
                            <img src="https://i.ibb.co/vdkwrZT/mdi-candy-White.webp" alt="icono de dulces"/>
                            <span>Productos</span>
                        </a>
                        <a className="sidebar-option active" href="">
                            <img src="https://i.ibb.co/G2r4QCQ/bxs-user-plus.webp" alt="icono de añadir usuario"/>
                            <span>Crear Usuario</span>
                        </a>
                        <a className="sidebar-option disabled" href="admin-users.html">
                            <img src="https://i.ibb.co/7y7t2LX/bxs-user-circle-White.webp" alt="Icono de Usuario"/>
                            <span>Usuarios</span>
                        </a>
                        <a className="sidebar-option disabled" href="/">
                            <img src="https://i.ibb.co/K0VRBHk/bxs-log-out-circle-White.webp" alt="Icono de cerrar Sesi&oacute;n"/>
                            <span>Cerrar Sesi&oacute;n</span>
                        </a>
                </section>
                <section className="sidebar-Desktop">
                    <Link className="sidebar-option disabled" to="/productos/create">
                        <img src="https://i.ibb.co/ThSRhvf/carbon-add-filled-White.webp" alt="icono de añadir"/>
                        <span>Crear Productos</span>
                    </Link>
                    <Link className="sidebar-option disabled" to="/productos">
                        <img src="https://i.ibb.co/vdkwrZT/mdi-candy-White.webp" alt="icono de dulces"/>
                        <span>Productos</span>
                    </Link>
                    <Link className="sidebar-option active" to="/usuarios/crear">
                        <img src="https://i.ibb.co/G2r4QCQ/bxs-user-plus.webp" alt="icono de añadir usuario"/>
                        <span>Crear Usuario</span>
                    </Link>
                    <Link className="sidebar-option disabled" to="/usuarios">
                        <img src="https://i.ibb.co/7y7t2LX/bxs-user-circle-White.webp" alt="icono de usuario"/>
                        <span>Usuarios</span>
                    </Link>
                    <a className="sidebar-option disabled" href="/">
                        <img src="https://i.ibb.co/K0VRBHk/bxs-log-out-circle-White.webp" alt="Icono de cerrar Sesi&oacute;n"/>
                        <span>Cerrar Sesi&oacute;n</span>
                    </a>
                </section>
                <section className="main-container">
                    <h2 className="main-title">Crear Usuarios</h2>
                    <form action="" className="main-contend">
                        <label for="names" className="main-input">
                            <span>Nombres</span>
                            <input type="text" required id="names" name="names"/>
                        </label>
                        <label for="apellidos" className="main-input">
                            <span>Apellidos</span>
                            <input type="text" required id="apellidos" name="apellidos"/>
                        </label>
                        <label for="cedula" className="main-input">
                            <span>C&eacute;dula</span>
                            <input type="number" required id="cedula" name="cedula"/>
                        </label>
                        <label for="nickName" className="main-input">
                            <span>Nick Name</span>
                            <input type="text" required id="nickName" name="nickName"/>
                        </label>
                        <label for="email" className="main-input">
                            <span>Email</span>
                            <input type="email" required id="email" name="email"/>
                        </label>
                        <label for="direccion" className="main-input">
                            <span>Direcci&oacute;n</span>
                            <input type="text" required id="direccion" name="direccion"/>
                        </label>
                        <label for="telefono" className="main-input main-input--after-sing">
                            <span>Tel&eacute;fono</span>
                            <input type="text" required id="telefono" name="telefono"/>
                        </label>
                        <button type="submit" className="payment-button button">Crear</button>
                    </form>
                </section>
            </main>
        </body>    
    )
}

export default CrearUsuarios;