function proximoEnFila (arreglo, elemento){
  arreglo.push(elemento);//agregar al final del arreglo
  return arreglo.shift();

}

var miArreglo = [1,2,3,4,5];
console.log ("Antes: "+JSON.stringify(miArreglo));
console.log(proximoEnFila(miArreglo, 6));
console.log ("Dp: "+JSON.stringify(miArreglo));