const listadegolosinas[
{
    id: 1, 
    nombre: 'sabritas', 
    precio: 18,
    cantidad: 2
    descripcion:'queso,limon,chipotle';
    Imagen: <img src= "src/img/sabritas"> </img>;
    gramos: 120 
}

{
id: 2
nombre: 'galletas'
precio: 20 
cantidad: 3
descripcion: con chispas de chocolate
Imagen: <i
}

{
    id: 3
    nobmre: 'refresco'
    precio: 15
    cantidad: 2
    descripcion: refresco retornable
    militros: 355
}
]

const buildlistgolosinas =()=> {
    getparentelement document.getElementByid( 'listadegolosinas');

listadegolosinas.array.forEach(line => {
    console.log(line.descripcion)

    const creatsection = document.createElement( 'section' ); 
 
creatsection.classlist.add( 'listadegolosinas'); 

creatsection.innerHTML= 

<img src= "${line.imagen}" alt= ""> 
<h2> ${line.nombre}</h2>
<h3>precio: <span> ${line.precio}</span></h3>
<p> cantidad: <span> ${line.cantidad} </span></p>
<p> gramos: <span>${line.gramos}</span></p>
<button>buy </button>


getparentEelent.appendChild(creatsection)







}