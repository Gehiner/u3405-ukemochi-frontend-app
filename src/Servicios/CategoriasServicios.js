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

const CategoriasServicios={};

CategoriasServicios.listarCategorias = () => {
    return new Promise((resolve, reject) => {
    resolve(categorias)
    })
}

export default CategoriasServicios;