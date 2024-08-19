// Variables & Condicionales

function solveEven() {
    function isEven(num) {
        return num % 2 === 0 ? "Es par" : "Es impar";
    }

    document.getElementById("outputEven").textContent = `
    4: ${isEven(4)}\n
    7: ${isEven(7)}
    `;
}

function solveGrade() {
    function gradeLevel(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    }

    document.getElementById("outputGrade").textContent = `
    85: ${gradeLevel(85)}\n
    72: ${gradeLevel(72)}
    `;
}

function gradeLevel(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

// Ciclos

function solvePrintNumbers() {
    function printNumbers() {
        let numbers = '';
        for (let i = 1; i <= 10; i++) {
            numbers += i + ' ';
        }
        return numbers.trim();
    }

    document.getElementById("outputPrintNumbers").textContent = printNumbers();
}

function solveSumEvenNumbers() {
    function sumEvenNumbers() {
        let sum = 0;
        for (let i = 1; i <= 50; i++) {
            if (i % 2 === 0) {
                sum += i;
            }
        }
        console.log(sum)
        return sum;
    }

    document.getElementById("outputSumEvenNumbers").textContent = sumEvenNumbers();
}
// Arreglos

function solveFindMax() {
    function findMax(arr) {
        return Math.max(...arr);
    }

    document.getElementById("outputFindMax").textContent = findMax([3, 5, 7, 2, 8]);
}

function solveReverseArray() {
    function reverseArray(arr) {
        return arr.reverse();
    }

    document.getElementById("outputReverseArray").textContent = reverseArray([1, 2, 3, 4, 5]);
}

// Funciones

function solveMultiply() {
    function multiply(a, b) {
        return a * b;
    }

    document.getElementById("outputMultiply").textContent = multiply(3, 4);
}

function solveCalculateArea() {
    function calculateArea(base, height) {
        return (base * height) / 2;
    }

    document.getElementById("outputCalculateArea").textContent = calculateArea(5, 10);
}

// JSON

function solveGenerateStudentJSON() {
    function generateStudentJSON(name, age, grades) {
        const student = {
            name: name,
            age: age,
            grades: grades
        };
        return JSON.stringify(student, null, 2);
    }

    const studentJSON = generateStudentJSON("Ana", 20, [85, 90, 78]);
    document.getElementById("outputGenerateStudentJSON").textContent = studentJSON;
}

function solveProcessStudentData() {
    function processStudentData(studentJSON) {
        const student = JSON.parse(studentJSON);
        const isAdult = student.age >= 18;
        const averageGrade = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;

        function gradeLevel(score) {
            if (score >= 90) return "A";
            if (score >= 80) return "B";
            if (score >= 70) return "C";
            if (score >= 60) return "D";
            return "F";
        }

        const finalGrade = gradeLevel(averageGrade);

        return JSON.stringify({
            name: student.name,
            isAdult: isAdult,
            averageGrade: averageGrade,
            finalGrade: finalGrade
        }, null, 2);
    }

    const studentData = {
        name: "Carlos",
        age: 19,
        grades: [88, 92, 76, 81]
    };

    const processedData = processStudentData(JSON.stringify(studentData));
    document.getElementById("outputProcessStudentData").textContent = processedData;
}




/*
    1. Crear funcion que procese la informacion de un estudiante
    2. Debe tener 3 paramatros o 3 argumentos
    3.Determinar si su edad es mayor de 18 o no
    4.calcular el promedio de calificaciones
    5.determinar el rango de la calificacion final
    6. devolver un objeto json con la informacion
*/
const calificacion = [20, 30, 100, 25, 70, 80]
function proccessStudentData(nombre, edad, calificacion) {
    const esMayorEdad = edad >= 18
    let promedio;
    let sumaCalificaciones = 0
    for (let i = 0; i <= calificacion.length; i++) {
        sumaCalificaciones += calificacion[i]
    }

    promedio = sumaCalificaciones / calificacion.length

    const rangoPromedio = gradeLevel(promedio)

    const informacionEstudiante = {
        nombre: nombre,
        edad: esMayorEdad ? "Es mayor de edad" : "Es menor de edad",
        calificacion: rangoPromedio,
    }

    return informacionEstudiante

}

console.log(proccessStudentData("Daniela", 27, calificacion))



/*Crea una función processEmployeeData que tome un objeto JSON que represente a un empleado (incluyendo nombre, edad, salario, y un arreglo de calificaciones de desempeño). La función debe:

Determinar si el empleado es elegible para un bono, que se otorga si el salario es menor o igual a $50,000.
Calcular el promedio de las calificaciones de desempeño.
Determinar el rango de desempeño basado en el promedio de calificaciones utilizando la siguiente escala:
A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: 0-59
Devolver un nuevo objeto JSON que incluya el nombre del empleado, si es elegible para el bono, su promedio de calificaciones, y su rango de desempeño.
Requisitos:

La función debe usar condicionales para determinar la elegibilidad para el bono y el rango de desempeño.
La función debe recorrer el arreglo de calificaciones para calcular el promedio.
El resultado debe ser un objeto JSON bien formateado.*/



const Empleado = {
    nombre: "Maria",
    edad: 25,
    salario: 1200000,
    notas: [5, 4, 3, 5, 4]
}

function BonoEmpleado(salario) {
    const Bono = salario <= 1500000
    return Bono ? "El empleado gana Bono" : "El empleado no tiene bono"
}

function PromedioEmpleado(notas) {
    let PromedioFinal = 0;
    for (let index = 0; index < notas.length; index++) {
        PromedioFinal += Empleado.notas[index];
    }
    return PromedioFinal / Empleado.notas.length;
}


function CalGrado(notaFinal) {
    let rango = ""
    switch (notaFinal) {
        case notaFinal >= 90 && notaFinal <= 100:
            rango = "A"
            break
        case notaFinal <= 89:
            rango = "B"
            break
        case notaFinal <= 79:
            rango = "C"
            break
        case notaFinal <= 69:
            rango = "D"
            break
        case notaFinal <= 59:
            rango = "F"
            break

        default:
            rango = "G"
    }
    return rango;
}

function processEmployeeData(Empleado) {
    const NombreEmpleado = Empleado?.nombre;
    const Bono = BonoEmpleado(Empleado?.salario);
    const Promedio = PromedioEmpleado(Empleado?.notas);
    const GradoCal = CalGrado(Empleado?.nota);

    return {
        Nombre: NombreEmpleado,
        Bono: Bono,
        PromedioFinal: Promedio,
        Grado: GradoCal,
    };
}

const processedData = processEmployeeData(Empleado);
document.getElementById("outputprocessEmployeeData").textContent = JSON.stringify(processedData, null, 2);
console.log(processedData);
