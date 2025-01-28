/*
Enunciado:
Crie um sistema para gerenciar diferentes tipos de produtos:
1. Crie uma classe abstrata chamada Produto com:
○ Propriedades protegidas nome e preco.
○ Um método abstrato calcularDesconto().
2. Crie duas subclasses:
○ Eletronico, com desconto de 10% no preço.
○ Alimento, com desconto de 5% no preço.
3. Adicione um método exibirDetalhes() para mostrar o nome, preço
original e preço com desconto.
4. Demonstre o uso de herança e polimorfismo ao criar instâncias das
subclasses e exibir as informações de cada produto.
*/

class Produto {
    constructor(nome, preco) {
        if (this.constructor === Produto) {
            throw new Error("Classe abstrata não pode ser instanciada diretamente")
        }
        this._nome = nome
        this._preco = preco
    }

    calcularDesconto() {
        throw new Error("Método abstrato deve ser implementado")
    }

    exibirDetalhes() {
        const precoComDesconto = this._preco - this.calcularDesconto();
        return `Produto: ${this._nome}, Preço Original: ${this._preco.toFixed(2)}, Preço com Desconto: ${precoComDesconto.toFixed(2)}`
    }
}

class Eletronico extends Produto {
    calcularDesconto() {
        return this._preco * 0.1
    }
}

class Alimento extends Produto {
    calcularDesconto() {
        return this._preco * 0.05
    }
}

const eletronico1 = new Eletronico("Smartphone", 2000)
const eletronico2 = new Eletronico("Notebook", 3500)
const alimento1 = new Alimento("Pão Integral", 10)
const alimento2 = new Alimento("Arroz", 20)

const produtos = [eletronico1, eletronico2, alimento1, alimento2]

produtos.forEach(produto => {
    console.log(produto.exibirDetalhes())
});
