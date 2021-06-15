let nota = prompt();

if(nota >= 90) {
    console.log("Nota A")
} else if (nota < 90 && nota >= 80) {
    console.log("Nota B")
} else if (nota < 80 && nota >= 70) {
    console.log("Nota C")
} else if (nota < 70 && nota >= 60) {
    console.log("Nota D")
} else {
    console.log("Nota E")
}