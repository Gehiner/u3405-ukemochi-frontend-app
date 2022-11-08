import "../../Styles/index-admin/index-admin.css"
import "../../Styles/index-admin/index-admin-contend.css"
import "../../Styles/index-admin/index-admin-Desktop.css"
import "../../Styles/index-admin/index-admin-table-productos.css"
import "../../Styles/Products-Users/mainProductsUser.css"
import { Link } from "react-router-dom"
import HeaderAdmin from "../Header/HeaderAdmin"
const EditarUsuarios=()=>{
    return(
        <body>
            <HeaderAdmin/>
            <main>
                <section className="sidebar" id="opciones-menu">
                    <a className="sidebar-option disabled" href="">
                        <img src="https://i.ibb.co/QFQVYrt/bxs-user-plus-White.webp" alt="icono de añadir usuario"/>
                        <span>Crear Usuario</span>
                    </a>
                    <a className="sidebar-option disabled" href="admin-users.html">
                        <img src="https://i.ibb.co/7y7t2LX/bxs-user-circle-White.webp" alt="Icono de Usuario"/>
                        <span>Usuarios</span>
                    </a>
                    <a className="sidebar-option disabled" href="">
                        <img src="https://i.ibb.co/K0VRBHk/bxs_log-out-circle-White.webp" alt=""/>
                        <span>Cerrar Sesi&oacute;n</span>
                    </a>
                </section>
                <section className="sidebar-Desktop">
                    <Link className="sidebar-option disabled"  to="/usuarios/crear">
                        <img src="https://i.ibb.co/QFQVYrt/bxs-user-plus-White.webp" alt="icono de añadir usuario"/>
                        <span>Crear Usuario</span>
                    </Link>
                    <Link className="sidebar-option disabled" to="/usuarios">
                        <img src="https://i.ibb.co/7y7t2LX/bxs-user-circle-White.webp" alt="Icono de Usuario"/>
                        <span>Usuarios</span>
                    </Link>
                    <a className="sidebar-option disabled" href="">
                        <img src="https://i.ibb.co/K0VRBHk/bxs_log-out-circle-White.webp" alt=""/>
                        <span>Cerrar Sesi&oacute;n</span>
                    </a>
                </section>
                <section className="main-container">
                    <h2 className="main-title">Edici&oacute;n de Usuarios</h2>
                    <form action="" className="main-contend">
                        <label for="usuario" className="main-input">
                            <span>Usuario</span>
                            <input type="text" required id="categoria" name="categoria"/>
                        </label>
                        <label for="name" className="main-input">
                            <span>Nombre</span>
                            <input type="text" required id="name" name="name"/>
                        </label>
                        <label for="apellido" className="main-input">
                            <span>Apellido</span>
                            <input type="text" required id="apellido" name="apellido"/>
                        </label>
                        <label for="nickname" className="main-input">
                            <span>Nickname</span>
                            <input type="text" required id="nickname" name="nickname"/>
                        </label>
                        <label for="cedula" className="main-input main-input--big">
                            <span>C&eacute;dula</span>
                            <input type="number" required id="cedula" name="cedula"/>
                        </label>
                        <label for="correo" className="main-input main-input--after-sing">
                            <span>Correo</span>
                            <input type="text" required id="correo" name="correo"/>
                        </label>
                        <label for="direccion" className="main-input">
                            <span>Direcci&oacute;n</span>
                            <input type="text" required id="direccion" name="direccion"/>
                        </label>
                        <label for="telefono" className="main-input">
                            <span>Tel&eacute;fono</span>
                            <input type="text" required id="telefono" name="telefono"/>
                        </label>
                        <button type="submit" className="payment-button button button-save">Guardar</button>
                        <button type="submit" className="payment-button button button-delete">Cancelar</button>
                    </form>
                </section>
            </main>
        </body>
    )
}
export default EditarUsuarios;