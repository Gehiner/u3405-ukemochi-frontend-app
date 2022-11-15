import axios from "axios";

const ProductosServicios={};

ProductosServicios.listarProductos=()=>{
    return axios.get("https://express-nodejs-ejs-youtube.herokuapp.com/products");
}
ProductosServicios.buscarproducts = (busqueda) => {
    return axios.get("https://express-nodejs-ejs-youtube.herokuapp.com/products?q="+busqueda);
}

ProductosServicios.cargarProducto = (id) => {
    return axios.get("https://express-nodejs-ejs-youtube.herokuapp.com/products/"+id);
}

ProductosServicios.modificarProducto = (id, body) => {
    return axios.put("https://express-nodejs-ejs-youtube.herokuapp.com/products/"+id, body);
}

ProductosServicios.guardarproducts = (producto) => {
    return axios.post("https://express-nodejs-ejs-youtube.herokuapp.com/products/", producto);
}

ProductosServicios.borrarProducto = (id) => {
    return axios.delete("https://express-nodejs-ejs-youtube.herokuapp.com/products/"+id);
}

export default ProductosServicios;