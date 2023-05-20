const elementos =  [
    {nombre: "calza", precio: 7500, id: "1", img:"./img/calza.jpg", idCat:"2"},
    {nombre: "top", precio: 2500, id: "2", img:"./img/top.jpg", idCat:"2"},
    {nombre: "zapatillas", precio: 9500, id: "3", img:"./img/zapatillas.jpg", idCat: "3"},
    {nombre: "pesas", precio: 6500, id: "4", img:"./img/pesas.jpg", idCat: "4"}
]

export const getElementos = () =>  {
    return new Promise((resolve) =>  {
        setTimeout( ()=> { 
            resolve(elementos);
        }, 2000)
    })
}



export const getDetalles = (id) =>  {
    return new Promise(resolve => {
        setTimeout( () => {
            const elemento = elementos.find(elemento=> elemento.id===id );
                resolve(elemento);
        }, 2000)
    })
}

export const getElementosPorCategorias = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const   elementosCategoria = elementos.filter(elementos => elementos.idCat === idCategoria)
                resolve(elementosCategoria);
        }, 2000)
    })
} 
