//Enunciado:
//Crie um objeto Celular com os atributos marca, modelo e bateria. Adicione um método
//verificarBateria() que exiba a mensagem "A bateria está em [bateria]%".

const celular = {
    marca: "3c",
    modelo: "Nokia",
    bateria: 90
}

function verificarBateria() {
    console.log(`A bateria está em ${celular.bateria}%`)
}

verificarBateria()