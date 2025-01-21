/*
Enunciado:
Crie uma classe base Veiculo, uma classe intermediária Terrestre e uma classe
derivada Carro. A classe Carro deve herdar atributos e métodos de Veiculo e
Terrestre.
*/

// Classe base Veiculo
class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    // Método para exibir informações do veículo
    exibirInformacoes() {
        console.log(`Veículo: ${this.marca} ${this.modelo}`);
    }
}

// Classe intermediária Terrestre
class Terrestre extends Veiculo {
    constructor(marca, modelo, numeroDeRodas) {
        super(marca, modelo); // Chama o construtor da classe base Veiculo
        this.numeroDeRodas = numeroDeRodas; // Atributo específico de Terrestre
    }

    // Método para exibir o número de rodas do veículo terrestre
    exibirNumeroDeRodas() {
        console.log(`Número de rodas: ${this.numeroDeRodas}`);
    }
}

// Classe derivada Carro
class Carro extends Terrestre {
    constructor(marca, modelo, numeroDeRodas, cor) {
        super(marca, modelo, numeroDeRodas); // Chama o construtor da classe Terrestre
        this.cor = cor; // Atributo específico de Carro
    }

    // Método para exibir a cor do carro
    exibirCor() {
        console.log(`Cor do carro: ${this.cor}`);
    }
}

// Exemplos de uso:

const meuCarro = new Carro("Toyota", "Corolla", 4, "Preto");
meuCarro.exibirInformacoes(); // Exibe a marca e modelo do veículo
meuCarro.exibirNumeroDeRodas(); // Exibe o número de rodas do carro
meuCarro.exibirCor(); // Exibe a cor do carro
