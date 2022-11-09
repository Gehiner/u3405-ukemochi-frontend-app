import "../../Styles/index-admin/index-admin.css"
import "../../Styles/index-admin/index-admin-contend.css"
import "../../Styles/index-admin/index-admin-Desktop.css"
import "../../Styles/index-admin/index-admin-table-productos.css"
import "../../Styles/index-admin/index-admin-table.css"
import CategoriasServicios from "../../Servicios/CategoriasServicios"
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import HeaderAdmin from "../Header/HeaderAdmin"
import Estados from "../../Enums/Estados"
const Productos=()=>{
    const [ estado, setEstado ] = useState(Estados.CARGANDO);
    const [ listaCategorias, setListacategorias ] = useState([]);
    const [ busqueda, setBusqueda ]=useState("");

    const buscarCategorias=

    useEffect(() => {
        const cargarDatos = async () => {
            try {
                const respuesta = await CategoriasServicios.listarCategorias();
                if (respuesta.data.lenght > 0 ) {
                    setListacategorias(respuesta);
                    setEstado(Estados.OK);
                    console.log(listaCategorias);
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
                        <span>Crear Productos</span>
                    </a>
                    <a className="sidebar-option active" href="admin-productos.html">
                        <img src="https://i.ibb.co/H7Xx335/mdi-candy.webp" alt="icono de dulces"/>
                        <span>Productos</span>
                    </a>
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
                    <Link className="sidebar-option disabled" to="/productos/create">
                        <img src="https://i.ibb.co/ThSRhvf/carbon-add-filled-White.webp" alt="icono de añadir"/>
                        <span>Crear Productos</span>
                    </Link>
                    <Link className="sidebar-option active" to="/productos">
                        <img src="https://i.ibb.co/H7Xx335/mdi-candy.webp" alt="icono de dulces"/>
                        <span>Productos</span>
                    </Link>
                    <a className="sidebar-option disabled" href="">
                        <img src="https://i.ibb.co/K0VRBHk/bxs_log-out-circle-White.webp" alt=""/>
                        <span>Cerrar Sesi&oacute;n</span>
                    </a>
                </section>
                <section className="main-container">
                    <h2 className="main-title">Productos</h2>
                    <form action="" className="main-search">
                        <input type="text" placeholder="B&uacute;squeda"/>
                        <button type="submit"><img src="https://i.ibb.co/n8b6R5s/akar-icons-search.webp" alt=""/></button>
                    </form>
                    <div className="main-table-container table-big">
                        <div className="main-table__header table ">
                            <div className="main-table__header-title">
                                Nombre
                            </div>
                            <div className="main-table__header-title">
                                Marca
                            </div>
                            <div className="main-table__header-title">
                                Categor&iacute;a
                            </div>
                            <div className="main-table__header-title">
                                Disponibilidad
                            </div>
                            <div className="main-table__header-title">
                                Precio
                            </div>
                            <div className="main-table__header-title">
                                Cantidad
                            </div>
                            <div className="main-table__header-title main-table__header-title-big">
                                Descripci&oacute;n
                            </div>
                            <div className="main-table__header-title">
                                KeyWords
                            </div>
                            <div className="main-table__header-title">
                                URL imagen
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
                                listaCategorias.map((categoria)=>(
                                    <a className="main-table__contend table" href="" key={categoria.id}>
                                        <div className="main-table__contend-info">
                                            {categoria.nombre}
                                        </div>
                                        <div className="main-table__contend-info">
                                            {categoria.marca}
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
                                    <div className="main-table__contend table" href="" >
                                        <div className="main-table__contend-info">
                                            1
                                        </div>
                                        <div className="main-table__contend-info">
                                            2
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
                                        <div className="main-table__contend-info main-table__opciones">
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
                    </div>
                </section>
            </main>
        </body>    
    )
}

export default Productos;