import axios from "axios";
const UsuariosServicios={};

UsuariosServicios.listarUsuarios = () => {
    return axios.get("https://express-nodejs-ejs-youtube.herokuapp.com/productos");
}

UsuariosServicios.buscarusuarios=() =>{
    return axios.get()
}

export default CategoriasServicios;