import axios from "axios";
const CategoriasServicios={};

CategoriasServicios.listarCategorias = () => {
    return axios.get("https://express-nodejs-ejs-youtube.herokuapp.com/productos");
}

CategoriasServicios.buscarcategorias=() =>{
    return axios.get()
}

export default CategoriasServicios;