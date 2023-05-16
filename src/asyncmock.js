const elementos =  [
    {nombre: "calza", precio: 7500, id: 1, img:"./img/calza.jpg"},
    {nombre: "top", precio: 2500, id: 2, img:"./img/top.jpg"},
    {nombre: "campera", precio: 9500, id: 3, img:"./img/campera.jpg"},
    {nombre: "remera", precio: 6500, id: 4, img:"./img/remera.jpg"}
]

export const getElementos = () =>  {
    return new Promise((resolve) =>  {
        setTimeout( ()=> { 
            resolve(elementos);
        }, 2000)
    })
}