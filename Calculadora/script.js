function sumar() {
  let num1 = parseFloat(document.getElementById('num1').value); // Asignacion variable 1 , conversion a flotante y obtencion del elemento por medio del id asignado, el value es para extraer el valor ingresado
  let num2 = parseFloat(document.getElementById('num2').value);
  let resultado = num1 + num2;                                  // Ejecutamos la operacion matematica contenida en la variable resultado
  document.getElementById('resultado').textContent = resultado; // con la funcion get document obtenemos 
}

function restar() {
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  let resultado = num1 - num2;
  document.getElementById('resultado').textContent = resultado; // Esta linea se usa para actualizar el contenido de texto de un elemento específico en el documento HTML
}

function multiplicar() {
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  let resultado = num1 * num2;
  document.getElementById('resultado').textContent = resultado;
}

function dividir() {
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  if (num2 === 0) {
    document.getElementById('resultado').textContent = 'No se puede dividir por cero';
  } else {
    let resultado = num1 / num2;
    document.getElementById('resultado').textContent = resultado;
  }
}
