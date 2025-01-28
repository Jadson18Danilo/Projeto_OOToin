/*
Enunciado:
Desenvolva um sistema de pagamento:
1. Crie uma classe abstrata chamada Pagamento.
○ Propriedades protegidas valor e descricao.
○ Método abstrato calcularTaxa().
2. Crie duas classes que herdam de Pagamento:
○ CartaoCredito, com uma taxa de 5%.
○ Boleto, com uma taxa de 2%.
3. Adicione um método exibirDetalhes() para mostrar o valor final
após a taxa.
4. Crie instâncias de ambas as classes e use polimorfismo para
calcular a taxa.
*/

class Pagamento {
    constructor(valor, descricao) {
        if (this.constructor === Pagamento) {
            throw new Error("Classe abstrata não pode ser instanciada diretamente")
        }
        this._valor = valor
        this._descricao = descricao
    }

    calcularTaxa() {
        throw new Error("Método abstrato deve ser implementado")
    }

    exibirDetalhes() {
        const valorFinal = this._valor + this.calcularTaxa();
        return `Descrição: ${this._descricao}, Valor Original: ${this._valor.toFixed(2)}, Taxa: ${this.calcularTaxa().toFixed(2)}, Valor Final: ${valorFinal.toFixed(2)}`
    }
}

class CartaoCredito extends Pagamento {
    calcularTaxa() {
        return this._valor * 0.05;
    }
}

class Boleto extends Pagamento {
    calcularTaxa() {
        return this._valor * 0.02
    }
}

const pagamentoCartao = new CartaoCredito(1000, "Pagamento com Cartão de Crédito")
const pagamentoBoleto = new Boleto(1000, "Pagamento com Boleto")

console.log(pagamentoCartao.exibirDetalhes())
console.log(pagamentoBoleto.exibirDetalhes())
