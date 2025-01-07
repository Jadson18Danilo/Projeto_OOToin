//Enunciado:
//Crie um objeto Carro com os atributos marca, modelo e velocidade. Adicione um método
//acelerar() que aumente a velocidade em 10 e exiba a mensagem "Velocidade atual:
//[velocidade] km/h".

const carro = {
    marca: "Ford",
    modelo: "Mustang",
    velocidade: 110
}

function acelerar() {
    carro.velocidade = carro.velocidade + 10
    console.log(`Velocidade atual foi para ${carro.velocidade}km.`)
}

acelerar()