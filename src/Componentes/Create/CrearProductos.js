import "../../Styles/index-admin/index-admin.css"
import "../../Styles/index-admin/index-admin-contend.css"
import "../../Styles/index-admin/index-admin-Desktop.css"
import "../../Styles/index-admin/index-admin-table-productos.css"
import "../../Styles/Products-Users/mainProductsUser.css"
import { Link } from "react-router-dom"
import HeaderAdmin from "../Header/HeaderAdmin"
import { useState } from "react"
import ProductosServicios from "../../Servicios/ProductosServicios"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

const CrearProductos=()=>{
    const navigateTo = useNavigate();
    const[nombre, setNombre]=useState('');
    const[marca, setMarca]=useState('');
    const[categoria ,setCategoria]=useState('Chocolatinas');
    const[disponibilidad, setDisponibilidad]=useState(false);
    const[precio, setPrecio]=useState(0);
    const[cantidad, setCantidad]=useState(0);
    const[descripcion, setDescripcion]=useState('');
    const[keywords, setKeywords]=useState('');
    const[url, setUrl]=useState('');

    const cambiarNombre=(event)=>{
    setNombre(event.target.value);
    }

    const cambiarMarca=(event)=>{
        setMarca(event.target.value);
    }

    const cambiarCategoria=(event)=>{
        setCategoria(event.target.value);
    }

    const cambiarDisponibilidad =(event)=>{
        if(event.target.checked){
            setDisponibilidad(true)
        }
        else{
            setDisponibilidad(false) 
        }
        console.log(event.target.checked, disponibilidad)
    }

    const cambiarPrecio =(event)=>{
        setPrecio(event.target.value)
    }

    const cambiarCantidad =(event)=>{
        setCantidad(event.target.value)
    }

    const cambiarDescripcion =(event)=>{
        setDescripcion(event.target.value)
    }

    const cambiarKeywords =(event)=>{
        setKeywords(event.target.value)
    }

    const cambiarUrl =(event)=>{
        setUrl(event.target.value)
    }

    const guardarProductos=async(event)=>{
        event.preventDefault();
        try {
            const producto={
                nombre:nombre,
                tipo:categoria,
                cantidad:parseInt(cantidad),
                marca:marca,
                descripcion:descripcion,
                precio:parseInt(precio),
                keywords:keywords,
                disponibilidad:disponibilidad,
                url_image:url
            }
            const respuesta=await ProductosServicios.guardarproducts(producto);
            console.log(respuesta);
            console.log(producto)
        } catch (error) {
            console.log(error);
        }
    }
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
                    <a className="sidebar-option disabled" href="/">
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
                    <a className="sidebar-option disabled" href="/">
                        <img src="https://i.ibb.co/K0VRBHk/bxs-log-out-circle-White.webp" alt="/"/>
                        <span>Cerrar Sesi&oacute;n</span>
                    </a>
                </section>
                <section className="main-container">
                    <h2 className="main-title">Crear Productos</h2>
                    <form action="" className="main-contend">
                        <label for="categoria" className="main-input">
                            <span>Categor&iacute;a</span>
                            <select type="text" required id="categoria" name="categoria" onChange={cambiarCategoria} value={categoria}>
                                <option value="Galletas">Galletas</option>
                                <option value="Galletas">Chocolatinas</option>
                            </select>
                        </label>
                        <label for="name" className="main-input">
                            <span>Nombre</span>
                            <input type="text" required id="name" name="name" onChange={cambiarNombre} value={nombre}/>
                        </label>
                        <label for="cantidad" className="main-input">
                            <span>Cantidad</span>
                            <input type="number" required id="cantidad" name="cantidad" onChange={cambiarCantidad} value={cantidad} />
                        </label>
                        <label for="marca" className="main-input">
                            <span>Marca</span>
                            <input type="text" required id="marca" name="marca" onChange={cambiarMarca} value={marca}/>
                        </label>
                        <label for="descripcion" className="main-input main-input--big">
                            <span>Descripci&oacute;n</span>
                            <textarea cols="20" rows="5" required id="descripcion" name="descripcion" onChange={cambiarDescripcion} value={descripcion}/> 
                        </label>
                        <label for="precio" className="main-input main-input--after-sing">
                            <span>Precio $</span>
                            <input type="number" required id="precio" name="precio" onChange={cambiarPrecio} value={precio} />
                        </label>
                        <label for="keywords" className="main-input">
                            <span>Palabras claves separadas por <b>;</b></span>
                            <input type="text" required id="keywords" name="keywords" onChange={cambiarKeywords} value={keywords}/>
                        </label>
                        <label for="url" className="main-input">
                            <span>URL de la imagen</span>
                            <input type="url" required id="url" name="url" onChange={cambiarUrl} value={url}/>
                        </label>
                        <label for="disponibilidad" className="input-checkbox-container">
                            <div className="input-checkbox">
                                <input type="checkbox"  id="disponibilidad" name="disponibilidad" onChange={cambiarDisponibilidad} checked={disponibilidad}/>
                                <span>Disponible</span>
                            </div>
                        </label>
                        <button  className="payment-button button" onClick={guardarProductos}>Crear</button>
                    </form>
                </section>
            </main>
        </body>
    )
}
export default CrearProductos;