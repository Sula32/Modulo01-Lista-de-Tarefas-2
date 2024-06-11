/*19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
repetição. Escrever cada um deles no formato HH.MM.SS.*/

const prompt = require('prompt-sync')();

let horarios = []

for(let i = 0; i < 5; i++) {
    let horas = Number(prompt("Digite as horas: "))
    let min = Number(prompt("Digite os minutos: "))
    let seg = Number(prompt("Digite os segundos: "))
    if ((horas >= 0 && horas < 24) && (min >= 0 && min < 60) && (seg >= 0 && seg < 60)) {
        let horario = horas + "." + min + "." + seg + "."
        horarios.push(horario)
    }
    else {
        console.log("horario invalido tente novamente")
        i -= 1
    }
}

console.log(horarios)
