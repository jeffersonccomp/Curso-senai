function Evento(dataEvento, qtdParticipantes, palestrante, titulo_evento) {
    this.dataEvento = dataEvento
    this.qtdParticipantes = qtdParticipantes
    this.palestrante = palestrante
    this.titulo_evento = titulo_evento

}

var escolha = 1

switch (escolha) {
    case 1:
        var evento1 = new Evento("03/06/2022", 99, 'Reinaldo de Azevedo', 'Jornalismo hoje');
        break
    case 2:
        var evento2 = new Evento("30/08/2022", 100, 'PH Santos', 'Cinema em ação');
        break
    case 3:
        var evento3 = new Evento("03/06/2025", 100, 'Paulo Silveira', 'Python e dados');
        break
    default:
        break

}


var data = new Date();
let dataAtual = ((data.getDate())) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear()

console.log("____Escolha um evento____")
console.log(" 1 : Jornalismo hoje - Reinaldo de Azevedo \n 2 : Cinema em ação - PH Santos \n 3 : Python e dados - Paulo Silvera")


console.log('qual a data do evento')

if (dataAtual < evento1.dataEvento) {
    console.log("Evento confirmado");

} else
    console.log('Data já passou, por favor coloque uma data valida')

var idade = 16
console.log('Qual a idade do participante?');
if (idade > 18) {
    console.log(' Quantos participantes o evento vai ter? ');
    if (evento1.qtdParticipantes < 100) {

        console.log('Parabens cadastro realizado com sucesso');

    } else
        console.log('cadastro não realizado por excesso de pessoas');
} else
    console.log('cadastro não realizado por idade ser menor');