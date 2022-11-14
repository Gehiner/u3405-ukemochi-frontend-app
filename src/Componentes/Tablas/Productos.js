import "../../Styles/index-admin/index-admin.css"
import "../../Styles/index-admin/index-admin-contend.css"
import "../../Styles/index-admin/index-admin-Desktop.css"
import "../../Styles/index-admin/index-admin-table-productos.css"
import "../../Styles/index-admin/index-admin-table.css"
import ProductosServicios from "../../Servicios/ProductosServicios"
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import HeaderAdmin from "../Header/HeaderAdmin"
import Estados from "../../Enums/Estados"
const Productos=()=>{
    const [estado, setEstado] = useState(Estados.CARGANDO);
    const [listaProductos, setListaProductos] = useState([]);
    const [busqueda, setBusqueda]=useState("");
    const [idBorrar, setIdBorrar]=useState("");


    const cargarDatos = async () => {
        try {
            const respuesta = await ProductosServicios.listarProductos();
            if (respuesta.data.length > 0) {
                setEstado(Estados.OK);
                setListaProductos(respuesta.data);
                console.log(respuesta.data)
            }
            else {
                setEstado(Estados.VACIO);
            }
        } catch (error) {
            setEstado(Estados.ERROR);
            console.log(error);
        }
    }

    const criterio=(event)=>{
        setBusqueda(event.target.value);
        console.log(busqueda);
    }

    useEffect(() => {
        cargarDatos();
    }, [])

    const buscarProducto=async(event)=>{
        console.log(event);
        event.preventDefault();
        try {
            const respuesta = await ProductosServicios.buscarproducts(busqueda);
            if (respuesta.data.length > 0) {
                setListaProductos(respuesta.data);
                setEstado(Estados.OK)
            } else {
                setEstado(Estados.VACIO)
            }
        } catch (error) {
            setEstado(Estados.ERROR);
            console.log(error);
        }
    }
    const borrarProducto = async (id) => {
        try {
            setIdBorrar(id);
            await ProductosServicios.borrarProducto(idBorrar);
            cargarDatos();
        } catch (error) {
            
        }
    }

    return(
        <div>
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
                    <Link className="sidebar-option active" to="/productos">
                        <img src="https://i.ibb.co/H7Xx335/mdi-candy.webp" alt="icono de dulces"/>
                        <span>Productos</span>
                    </Link>
                    <Link className="sidebar-option disabled"  to="/usuarios/crear">
                        <img src="https://i.ibb.co/QFQVYrt/bxs-user-plus-White.webp" alt="icono de añadir usuario"/>
                        <span>Crear Usuario</span>
                    </Link>
                    <Link className="sidebar-option disabled" to="/usuarios">
                        <img src="https://i.ibb.co/7y7t2LX/bxs-user-circle-White.webp" alt="Icono de Usuario"/>
                        <span>Usuarios</span>
                    </Link>
                    <a className="sidebar-option disabled" href="/">
                        <img src="https://i.ibb.co/K0VRBHk/bxs_log-out-circle-White.webp" alt="/"/>
                        <span>Cerrar Sesi&oacute;n</span>
                    </a>
                </section>
                <section className="main-container">
                    <h2 className="main-title">Productos</h2>
                    <form action="" className="main-search">
                        <input type="text" placeholder="B&uacute;squeda" onChange={criterio} value={busqueda}/>
                        <button  onClick={buscarProducto}><img src="https://i.ibb.co/n8b6R5s/akar-icons-search.webp" alt=""/></button>
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
                            estado === Estados.ERROR ? (<div>Ocurrió un error...</div>):
                                Estados.VACIO ? (<div>No hay Datos...</div>)
                                :
                                listaProductos.map((producto)=>(
                                    <div className="main-table__contend table" href="" key={producto._id}>
                                        <div className="main-table__contend-info">
                                            {producto.nombre}
                                        </div>
                                        <div className="main-table__contend-info">
                                            {producto.marca}
                                        </div>
                                        <div className="main-table__contend-info">
                                            {producto.tipo}
                                        </div>
                                        <div className="main-table__contend-info">
                                            {producto.disponibilidad ? "En Bodega":"Sin Disponibilidad"}
                                        </div>
                                        <div className="main-table__contend-info">
                                            {producto.precio}
                                        </div>
                                        <div className="main-table__contend-info">
                                            {producto.cantidad}
                                        </div>
                                        <div className="main-table__contend-info main-table__header-title-big">
                                            {producto.descripcion} 
                                        </div>
                                        <div className="main-table__contend-info">
                                            {producto.keywords}
                                        </div>
                                        <div className="main-table__contend-info">
                                            {producto.url_image}
                                        </div>
                                        <div className="main-table__contend-info main-table__opciones">
                                            <div className="opciones-container">
                                                <a href={"/productos/edit/" + producto._id} >
                                                    <img src="https://cdn-icons-png.flaticon.com/512/3838/3838756.png" alt="Icono editar"/>
                                                </a>
                                                <a onClick={()=>borrarProducto(producto._id)}>
                                                    <img src="https://cdn-icons-png.flaticon.com/512/6932/6932392.png" alt="Icono borrar"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>     
                                ))
                        }
                    </div>
                </section>
            </main>
        </div>    
    )
}

export default Productos;