import axios from "axios";
const UsuariosServicios={};

UsuariosServicios.listarUsuarios = () => {
    return axios.get("http://localhost:3000/api/usuarios");
}

UsuariosServicios.buscarusuarios=(criterio) =>{
    return axios.get("http://localhost:3000/api/usuarios?q="+criterio);
}

UsuariosServicios.buscarusuario = (id) => {
    return axios.get("http://localhost:3000/api/usuarios/"+id);
}

UsuariosServicios.guardarUsuario = (usuario) => {
    return axios.post("http://localhost:3000/api/usuarios", usuario);
}

UsuariosServicios.modificarUsuario = (id, Usuario) => {
    return axios.put("http://localhost:3000/api/Usuarios/"+id, Usuario);
}

UsuariosServicios.borrarUsuario = (id) => {
    return axios.delete("http://localhost:3000/api/Usuarios/"+id);
}



export default UsuariosServicios;





