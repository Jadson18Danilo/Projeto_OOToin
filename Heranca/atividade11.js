/*
Enunciado:
Crie uma classe base chamada Veiculo com o método info que exibe o tipo de veículo.
Em seguida, crie duas classes derivadas chamadas Carro e Moto que sobrescrevem o
método info para incluir informações específicas do veículo, como modelo e ano.
*/

// Classe base Veiculo
class Veiculo {
    constructor(tipo) {
        this.tipo = tipo;
    }

    // Método info que será sobrescrito nas subclasses
    info() {
        console.log(`Tipo de veículo: ${this.tipo}`);
    }
}

// Classe derivada Carro
class Carro extends Veiculo {
    constructor(tipo, modelo, ano) {
        super(tipo); // Chama o construtor da classe base
        this.modelo = modelo;
        this.ano = ano;
    }

    // Sobrescreve o método info para incluir informações específicas do Carro
    info() {
        console.log(`Tipo de veículo: ${this.tipo}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
    }
}

// Classe derivada Moto
class Moto extends Veiculo {
    constructor(tipo, modelo, ano) {
        super(tipo); // Chama o construtor da classe base
        this.modelo = modelo;
        this.ano = ano;
    }

    // Sobrescreve o método info para incluir informações específicas da Moto
    info() {
        console.log(`Tipo de veículo: ${this.tipo}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
    }
}

// Exemplos de uso:

const meuCarro = new Carro("Carro", "Fusca", 1969);
meuCarro.info(); // Exibe informações do carro

const minhaMoto = new Moto("Moto", "Honda CG", 2020);
minhaMoto.info(); // Exibe informações da moto
