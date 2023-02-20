function myMap() {

   /* const numeros = [1, 2, 3, 4, 5];

    const numerosMultiplicados = numeros.map(numero => numero * 2);

   // console.log(numerosMultiplicados); // Output: [2, 4, 6, 8, 10]

    
    const parejas = numeros.map (x=>[x,x])
    console.log(parejas)*/


 //descuentos
    const productos = [
        { nombre: 'Camisa', precio: 20 },
        { nombre: 'Pantalón', precio: 30 },
        { nombre: 'Calcetines', precio: 5 }
      ];
      
      const preciosDescuentados = productos.map(producto => producto.precio * 0.9);
      
      console.log(preciosDescuentados); // Output: [18, 27, 4.5]*/

//nombre
const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Pedro', edad: 40 }
  ];
  
  const nombres = personas.map(persona => persona.nombre);
  
  console.log(nombres); // Output: ['Juan', 'María', 'Pedro']



}