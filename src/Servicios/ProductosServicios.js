import axios from "axios";

const ProductosServicios={};

ProductosServicios.listarProductos=()=>{
    return axios.get("http://localhost:3000/products");
}
ProductosServicios.buscarproducts = (busqueda) => {
    return axios.get("http://localhost:3000/products?q="+busqueda);
}

ProductosServicios.cargarProducto = (id) => {
    return axios.get("http://localhost:3000/products/"+id);
}

ProductosServicios.modificarProducto = (id, body) => {
    return axios.put("http://localhost:3000/products/"+id, body);
}

ProductosServicios.guardarproducts = (producto) => {
    return axios.post("http://localhost:3000/products/create", producto);
}

ProductosServicios.borrarProducto = (id) => {
    return axios.delete("http://localhost:3000/products/"+id);
}

export default ProductosServicios;