import "../../Styles/index-admin/index-admin.css"
import "../../Styles/index-admin/index-admin-contend.css"
import "../../Styles/index-admin/index-admin-Desktop.css"
import "../../Styles/index-admin/index-admin-table-user.css"
import "../../Styles/index-admin/index-admin-table.css"
import UsuariosServicios from "../../Servicios/UsuariosServicios"
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import HeaderAdmin from "../Header/HeaderAdmin"
import Estados from "../../Enums/Estados"
const Usuarios=()=>{
    const [ estado, setEstado ] = useState(Estados.CARGANDO);
    const [ listaUsuarios, setListaUsuarios ] = useState([]);
    const [ busqueda, setBusqueda ]=useState("");

    const buscarUsuarios=

    useEffect(() => {
        const cargarDatos = async () => {
            try {
                const respuesta = await UsuariosServicios.listarUsuarios();
                if (respuesta.data.lenght > 0 ) {
                    setListaUsuarios(respuesta);
                    setEstado(Estados.OK);
                    console.log(listaUsuarios);
                }
                else {
                    setEstado(Estados.VACIO);
                }
            } catch (error) {
                setEstado(Estados.ERROR);
                console.log(error);
            }
        }
        cargarDatos();
    }, [])
    return(
        <body>
            <HeaderAdmin/>
            <main>
                <section className="sidebar" id="opciones-menu">
                    <a className="sidebar-option disabled" href="index-admin.html">
                        <img src="https://i.ibb.co/ThSRhvf/carbon-add-filled-White.webp" alt="icono de añadir"/>
                        <span>Crear Usuarios</span>
                    </a>
                    <a className="sidebar-option disabled" href="admin-productos.html">
                        <img src="https://i.ibb.co/vdkwrZT/mdi-candy-White.webp" alt="icono de dulces"/>
                        <span>Usuarios</span>
                    </a>
                    <a className="sidebar-option disabled" href="/">
                        <img src="https://i.ibb.co/K0VRBHk/bxs_log-out-circle-White.webp" alt=""/>
                        <span>Cerrar Sesi&oacute;n</span>
                    </a>
                </section>
                <section className="sidebar-Desktop">
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
                                Tel&eacute;fono
                            </div>
                            <div className="main-table__header-title">
                                Opciones
                            </div>
                        </div>
                        {
                                estado === Estados.ERROR ? (
                                    <div>Ocurrió un error...</div>
                                ) 
                                :
                                estado === Estados.CARGANDO ? (
                                    <div>CARGANDO</div>
                                ) 
                                :
                                estado === Estados.VACIO ? (
                                    <div>No hay datos</div>
                                )
                                :                    
                                listaUsuarios.map((usuario)=>(
                                    <a className="main-table__contend table" href="" key={categoria.id}>
                                        <div className="main-table__contend-info">
                                            {usuario.nombre}
                                        </div>
                                        <div className="main-table__contend-info">
                                            {usuario.apellido}
                                        </div>
                                        <div className="main-table__contend-info">
                                            dadad
                                        </div>
                                        <div className="main-table__contend-info">
                                            adad
                                        </div>
                                        <div className="main-table__contend-info">
                                            5000
                                        </div>
                                        <div className="main-table__contend-info">
                                            25
                                        </div>
                                        <div className="main-table__contend-info main-table__header-title-big">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quasi corporis esse quia culpa tempore necessitatibus voluptate quidem cupiditate ipsum maxime 
                                        </div>
                                        <div className="main-table__contend-info">
                                            Crocante
                                        </div>
                                        <div className="main-table__contend-info">
                                            wwww.png.com
                                        </div>
                                    </a>
                            ))                
                        }
                                    <div className="main-table__contend table-user" href="">
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
                                            <div className="opciones-container">
                                                <a href="/productos/edit">
                                                    <img src="https://cdn-icons-png.flaticon.com/512/3838/3838756.png" alt="Icono editar"/>
                                                </a>
                                                <a href="">
                                                    <img src="https://cdn-icons-png.flaticon.com/512/6932/6932392.png" alt="Icono borrar"/>
                                                </a>
                                            </div>
                                        </div>
                    </div>
                </section>
            </main>
        </body>
    )
}

export default Usuarios;