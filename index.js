function myMap() {
  //debugger
  const suma = (array) => {
    let result = 0;
    for (i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result
  }
  //el doble de los elementos
   const numeros = [1, 2, 3, 4, 5];

   console.log(`array original:${ numeros}`); 

   const doble = numeros.map(numero => numero * 2);

   console.log(`array obtenido:${doble}`); 

   
   const parejas = numeros.map (x=>[x,x])
   console.log(`Pareja de numeros:${parejas}`)

  //suma el total de elementos del array

  const resultado1=suma(numeros)
  console.log(`suma total de los elementos :${resultado1}`)
  //descuentos
  /* const productos = [
       { nombre: 'Camisa', precio: 20 },
       { nombre: 'Pantalón', precio: 30 },
       { nombre: 'Calcetines', precio: 5 }
     ];
     
     const preciosDescuentados = productos.map(producto => producto.precio * 0.9);
     
     console.log(preciosDescuentados); */

  //nombre
  const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Pedro', edad: 40 }
  ];

  const nombres = personas.map(persona => persona.nombre);
  console.log(`array obtenido de nombres de personas: ${nombres}`);

  // edades
  const edades = personas.map(persona => persona.edad);
  console.log(`array obtenido de edades: ${edades}`);
//edad promedio
  const resultado2=suma(edades)
  console.log(`suma total de las edades :${resultado2}`)
  console.log(`Promedio de edades del objeto persona :${resultado2/edades.length}`)


}