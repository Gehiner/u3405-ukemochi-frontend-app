import axios from "axios";
const CategoriasServicios={};

CategoriasServicios.listarCategorias = () => {
    return axios.get("http://localhost:3000/productcategory");
}



export default CategoriasServicios;