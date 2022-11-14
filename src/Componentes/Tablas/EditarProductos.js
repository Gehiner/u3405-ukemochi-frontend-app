import "../../Styles/index-admin/index-admin.css";
import "../../Styles/index-admin/index-admin-contend.css";
import "../../Styles/index-admin/index-admin-Desktop.css";
import "../../Styles/index-admin/index-admin-table-productos.css";
import "../../Styles/Products-Users/mainProductsUser.css";
import ProductosServicios from "../../Servicios/ProductosServicios";
import { Link, useNavigate, useParams } from "react-router-dom";
import HeaderAdmin from "../Header/HeaderAdmin";
import { useEffect, useState } from "react";
import CategoriasServicios from "../../Servicios/CategoriasServicios";
const EditarProductos = () => {
  const navigateTo = useNavigate();
  const [nombre, setNombre] = useState("");
  const [marca, setMarca] = useState("");
  const [categoria, setCategoria] = useState("");
  const [disponibilidad, setDisponibilidad] = useState(false);
  const [precio, setPrecio] = useState(0);
  const [cantidad, setCantidad] = useState(0);
  const [descripcion, setDescripcion] = useState("");
  const [keywords, setKeywords] = useState("");
  const [url, setUrl] = useState("");
  const { id } = useParams();
  const [codigo, setCodigo] = useState("");
  const [listaCategorias, setListaCategorias]=useState([]);


  const cambiarCodigo = (event) => {
    setCodigo(event.target.value);
  };

  const cargarCategorias = async () => {
    try {
      const respuesta = await CategoriasServicios.listarCategorias();
      setListaCategorias(respuesta.data);
    } catch (error) {
      console.log(error);
    }
  };
  const cambiarNombre = (event) => {
    setNombre(event.target.value);
  };

  const cambiarMarca = (event) => {
    setMarca(event.target.value);
  };

  const cambiarCategoria = (event) => {
    setCategoria(event.target.value);
  };

  const cambiarDisponibilidad = (event) => {
    setDisponibilidad(event.target.checked);
  };

  const cambiarPrecio = (event) => {
    setPrecio(event.target.value);
  };

  const cambiarCantidad = (event) => {
    setCantidad(event.target.value);
  };

  const cambiarDescripcion = (event) => {
    setDescripcion(event.target.value);
  };

  const cambiarKeywords = (event) => {
    setKeywords(event.target.value);
  };

  const cambiarUrl = (event) => {
    setUrl(event.target.value);
  };

  const cargarProducto = async () => {
    try {
      cargarCategorias();
      const respuesta = await ProductosServicios.cargarProducto(id);
      console.log(respuesta);
      if (respuesta.data != null) {
        setKeywords(respuesta.data[0].keywords);
        setNombre(respuesta.data[0].nombre);
        setCantidad(respuesta.data[0].cantidad);
        setCategoria(respuesta.data[0].tipo);
        setMarca(respuesta.data[0].marca);
        setDescripcion(respuesta.data[0].descripcion);
        setPrecio(respuesta.data[0].precio);
        setUrl(respuesta.data[0].url_image);
        setDisponibilidad(respuesta.data[0].disponibilidad);
        setCodigo(respuesta.data[0].codigo);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const modificarProducto = async (event) => {
    event.preventDefault();
    try {
      const productoMofificado = {
        codigo: codigo,
        nombre: nombre,
        tipo: categoria,
        cantidad: parseInt(cantidad),
        marca: marca,
        descripcion: descripcion,
        precio: parseInt(precio),
        keywords: keywords,
        disponibilidad: disponibilidad,
        url_image: url,
      };
      const respuesta = await ProductosServicios.modificarProducto(
        id,
        productoMofificado
      );
      console.log(respuesta);
      navigateTo("/productos");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    cargarProducto();
  }, []);
  return (
    <body>
      <HeaderAdmin />
      <main>
        <section className="sidebar" id="opciones-menu">
          <a className="sidebar-option disabled" href="index-admin.html">
            <img
              src="https://i.ibb.co/ThSRhvf/carbon-add-filled-White.webp"
              alt="icono de añadir"
            />
            <span>Crear Productos</span>
          </a>
          <a className="sidebar-option active" href="admin-productos.html">
            <img
              src="https://i.ibb.co/H7Xx335/mdi-candy.webp"
              alt="icono de dulces"
            />
            <span>Productos</span>
          </a>
          <a className="sidebar-option disabled" href="">
            <img
              src="https://i.ibb.co/QFQVYrt/bxs-user-plus-White.webp"
              alt="icono de añadir usuario"
            />
            <span>Crear Usuario</span>
          </a>
          <a className="sidebar-option disabled" href="admin-users.html">
            <img
              src="https://i.ibb.co/7y7t2LX/bxs-user-circle-White.webp"
              alt="Icono de Usuario"
            />
            <span>Usuarios</span>
          </a>
          <a className="sidebar-option disabled" href="/">
            <img
              src="https://i.ibb.co/K0VRBHk/bxs_log-out-circle-White.webp"
              alt="/"
            />
            <span>Cerrar Sesi&oacute;n</span>
          </a>
        </section>
        <section className="sidebar-Desktop">
          <Link className="sidebar-option disabled" to="/productos/create">
            <img
              src="https://i.ibb.co/ThSRhvf/carbon-add-filled-White.webp"
              alt="icono de añadir"
            />
            <span>Crear Productos</span>
          </Link>
          <Link className="sidebar-option active" to="/productos">
            <img
              src="https://i.ibb.co/H7Xx335/mdi-candy.webp"
              alt="icono de dulces"
            />
            <span>Productos</span>
          </Link>
          <Link className="sidebar-option disabled" to="/usuarios/crear">
            <img
              src="https://i.ibb.co/QFQVYrt/bxs-user-plus-White.webp"
              alt="icono de añadir usuario"
            />
            <span>Crear Usuario</span>
          </Link>
          <Link className="sidebar-option disabled" to="/usuarios">
            <img
              src="https://i.ibb.co/7y7t2LX/bxs-user-circle-White.webp"
              alt="Icono de Usuario"
            />
            <span>Usuarios</span>
          </Link>
          <a className="sidebar-option disabled" href="">
            <img
              src="https://i.ibb.co/K0VRBHk/bxs_log-out-circle-White.webp"
              alt="/"
            />
            <span>Cerrar Sesi&oacute;n</span>
          </a>
        </section>
        <section className="main-container">
          <h2 className="main-title">Edici&oacute;n de Productos</h2>
          <form action="" className="main-contend">
            <label for="categoria" className="main-input">
              <span>Categor&iacute;a</span>
              <select
                type="text"
                required
                id="categoria"
                name="categoria"
                onChange={cambiarCategoria}
                value={categoria}
              >
                <option defaultValue=""></option>
                {listaCategorias.map((categoria) => (
                  <option key={categoria.category} value={categoria.category}>
                    {" "}
                    {categoria.category}
                  </option>
                ))}
              </select>
            </label>
            <label for="codigo" className="main-input">
                            <span>Codigo</span>
                            <input type="text" required id="codigo" name="codigo" onChange={cambiarCodigo} value={codigo}/>
                        </label>
            <label for="name" className="main-input">
              <span>Nombre</span>
              <input
                type="text"
                required
                id="name"
                name="name"
                onChange={cambiarNombre}
                value={nombre}
              />
            </label>
            <label for="cantidad" className="main-input">
              <span>Cantidad</span>
              <input
                type="number"
                required
                id="cantidad"
                name="cantidad"
                onChange={cambiarCantidad}
                value={cantidad}
              />
            </label>
            <label for="marca" className="main-input">
              <span>Marca</span>
              <input
                type="text"
                required
                id="marca"
                name="marca"
                onChange={cambiarMarca}
                value={marca}
              />
            </label>
            <label for="descripcion" className="main-input main-input--big">
              <span>Descripci&oacute;n</span>
              <textarea
                cols="20"
                rows="5"
                required
                id="descripcion"
                name="descripcion"
                onChange={cambiarDescripcion}
                value={descripcion}
              />
            </label>
            <label for="precio" className="main-input main-input--after-sing">
              <span>Precio $</span>
              <input
                type="number"
                required
                id="precio"
                name="precio"
                onChange={cambiarPrecio}
                value={precio}
              />
            </label>
            <label for="keywords" className="main-input">
              <span>
                Palabras claves separadas por <b>;</b>
              </span>
              <input
                type="text"
                required
                id="keywords"
                name="keywords"
                onChange={cambiarKeywords}
                value={keywords}
              />
            </label>
            <label for="url" className="main-input">
              <span>URL de la imagen</span>
              <input
                type="url"
                required
                id="url"
                name="url"
                onChange={cambiarUrl}
                value={url}
              />
            </label>
            <label for="disponibilidad" className="input-checkbox-container">
              <div className="input-checkbox">
                <input
                  type="checkbox"
                  id="disponibilidad"
                  name="disponibilidad"
                  onChange={cambiarDisponibilidad}
                  checked={disponibilidad}
                />
                <span>Disponible</span>
              </div>
            </label>
            <button
              type="submit"
              className="payment-button button button-save"
              onClick={modificarProducto}
            >
              Guardar
            </button>
            <button
              type="submit"
              className="payment-button button button-delete"
            >
              Cancelar
            </button>
          </form>
        </section>
      </main>
    </body>
  );
};
export default EditarProductos;
