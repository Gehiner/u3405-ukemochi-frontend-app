const categorias=[
    {
        "id":1,
        "nombre":"Paleta Dracula",
        "tipo":"Helado",
        "cantidad":20,
        "marca":"Cremhelado"
    },
    {
        "id":2,
        "nombre":"Paleta Dracula",
        "tipo":"Helado",
        "cantidad":20,
        "marca":"Cremhelado"
    }
];

const categoriasServicios={};

categoriasServicios.ListarCategorias=() =>{
    return categorias;
}

export default categoriasServicios;