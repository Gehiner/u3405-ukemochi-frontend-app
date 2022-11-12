import "../../Styles/index-admin/index-admin.css"
import "../../Styles/index-admin/index-admin-contend.css"
import "../../Styles/index-admin/index-admin-Desktop.css"
import "../../Styles/index-admin/index-admin-table-user.css"
import "../../Styles/index-admin/index-admin-table.css"
import { Link } from "react-router-dom"
import HeaderAdmin from "../Header/HeaderAdmin"
const Usuarios=()=>{
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
                    <a className="sidebar-option disabled" href="">
                        <img src="https://i.ibb.co/QFQVYrt/bxs-user-plus-White.webp" alt="icono de añadir usuario"/>
                        <span>Crear Usuario</span>
                    </a>
                    <a className="sidebar-option active" href="">
                        <img src="https://i.ibb.co/gtHtNRb/bxs-user-circle.webp" alt=""/>
                        <span>Usuarios</span>
                    </a>
                    <a className="sidebar-option disabled" href="/">
                        <img src="https://i.ibb.co/K0VRBHk/bxs_log-out-circle-White.webp" alt=""/>
                        <span>Cerrar Sesi&oacute;n</span>
                    </a>
                </section>
                <section className="sidebar-Desktop">
                    <Link className="sidebar-option disabled" to="/productos/create">
                        <img src="https://i.ibb.co/ThSRhvf/carbon-add-filled-White.webp" alt="icono de añadir"/>
                        <span>Crear Productos</span>
                    </Link>
                    <Link className="sidebar-option disabled" to="/productos/">
                        <img src="https://i.ibb.co/vdkwrZT/mdi-candy-White.webp" alt="icono de dulces"/>
                        <span>Productos</span>
                    </Link>
                    <Link className="sidebar-option disabled" to="/usuarios/crear">
                        <img src="https://i.ibb.co/QFQVYrt/bxs-user-plus-White.webp" alt="icono de añadir usuario"/>
                        <span>Crear Usuario</span>
                    </Link>
                    <Link className="sidebar-option active" to="/usuarios">
                        <img src="https://i.ibb.co/gtHtNRb/bxs-user-circle.webp" alt=""/>
                        <span>Usuarios</span>
                    </Link>
                    <a className="sidebar-option disabled" href="/">
                        <img src="https://i.ibb.co/K0VRBHk/bxs_log-out-circle-White.webp" alt=""/>
                        <span>Cerrar Sesi&oacute;n</span>
                    </a>
                </section>
                <section className="main-container">
                    <h2 className="main-title">Usuarios</h2>
                    <form action="" className="main-search">
                        <input type="text" placeholder="B&uacute;squeda"/>
                        <button type="submit"><img src="https://i.ibb.co/n8b6R5s/akar-icons-search.webp" alt=""/></button>
                    </form>
                    <div className="main-table-user-container .main-table-user-container--big">
                        <div className="main-table__header table-user">
                            <div className="main-table__header-title">
                                Nombres
                            </div>
                            <div className="main-table__header-title">
                                Apellidos
                            </div>
                            <div className="main-table__header-title">
                                Nickname
                            </div>
                            <div className="main-table__header-title">
                                C&eacute;dula
                            </div>
                            <div className="main-table__header-title">
                                Correo
                            </div>
                            <div className="main-table__header-title main-table__header-title-2">
                                Direcci&oacute;n
                            </div>
                            <div className="main-table__header-title">
                                T&eacute;lefono
                            </div>
                        </div>
                        <a className="main-table__contend table-user" href="">
                            <div className="main-table__contend-info">
                                Juan Camilo
                            </div>
                            <div className="main-table__contend-info">
                                Arias Arias
                            </div>
                            <div className="main-table__contend-info">
                                Arias
                            </div>
                            <div className="main-table__contend-info">
                                18191649161
                            </div>
                            <div className="main-table__contend-info">
                                jhso@jssno
                            </div>
                            <div className="main-table__contend-info main-table__header-title-2">
                                Calle 78 #78-d Bucaramanga
                            </div>
                            <div className="main-table__contend-info">
                                123456789
                            </div>
                        </a>
                        
                    </div>
                </section>
            </main>
        </body>
    )
}

export default Usuarios;