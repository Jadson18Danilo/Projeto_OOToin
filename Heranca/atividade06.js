/*
Enunciado:
Crie uma classe base Produto com os atributos nome e preco. Crie duas classes
derivadas Eletronico e Vestuario, cada uma com um método adicional (garantia
para eletrônicos e tamanho para vestuário).
*/

// Classe base Produto
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    // Método para exibir informações do produto
    exibirInformacoes() {
        console.log(`Produto: ${this.nome}`);
        console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
    }
}

// Classe derivada Eletronico
class Eletronico extends Produto {
    constructor(nome, preco, garantia) {
        super(nome, preco); // Chama o construtor da classe base
        this.garantia = garantia; // Atributo específico de Eletronico
    }

    // Método adicional para exibir a garantia do eletrônico
    exibirGarantia() {
        console.log(`Garantia: ${this.garantia} anos`);
    }
}

// Classe derivada Vestuario
class Vestuario extends Produto {
    constructor(nome, preco, tamanho) {
        super(nome, preco); // Chama o construtor da classe base
        this.tamanho = tamanho; // Atributo específico de Vestuario
    }

    // Método adicional para exibir o tamanho do vestuário
    exibirTamanho() {
        console.log(`Tamanho: ${this.tamanho}`);
    }
}

// Exemplos de uso:

// Criando um produto eletrônico
const celular = new Eletronico("Celular Samsung", 1500, 2);
celular.exibirInformacoes();
celular.exibirGarantia();

// Criando um produto de vestuário
const camiseta = new Vestuario("Camiseta Polo", 100, "M");
camiseta.exibirInformacoes();
camiseta.exibirTamanho();
