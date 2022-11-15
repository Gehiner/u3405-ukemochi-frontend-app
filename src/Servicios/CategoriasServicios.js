import axios from "axios";
const CategoriasServicios={};

CategoriasServicios.listarCategorias = () => {
    return axios.get("https://express-nodejs-ejs-youtube.herokuapp.com/products/productcategory");
}



export default CategoriasServicios;