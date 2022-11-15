import axios from "axios";
const UsuariosServicios={};

UsuariosServicios.listarUsuarios = () => {
    return axios.get("https://express-nodejs-ejs-youtube.herokuapp.com/users");
}

UsuariosServicios.buscarusuarios=(criterio) =>{
    return axios.get("https://express-nodejs-ejs-youtube.herokuapp.com/users?q="+criterio);
}

UsuariosServicios.buscarusuario = (id) => {
    return axios.get("https://express-nodejs-ejs-youtube.herokuapp.com/users"+id);
}

UsuariosServicios.guardarUsuario = (usuario) => {
    return axios.post("https://express-nodejs-ejs-youtube.herokuapp.com/users", usuario);
}

UsuariosServicios.modificarUsuario = (id, Usuario) => {
    return axios.put("https://express-nodejs-ejs-youtube.herokuapp.com/users"+id, Usuario);
}

UsuariosServicios.borrarUsuario = (id) => {
    return axios.delete("https://express-nodejs-ejs-youtube.herokuapp.com/users/"+id);
}



export default UsuariosServicios;





