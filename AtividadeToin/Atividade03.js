/*
Enunciado:
Crie um sistema para gerenciar veículos:
1. Implemente uma classe abstrata Veiculo com:
○ Propriedades protegidas marca e modelo.
○ Um método abstrato calcularImposto().
2. Crie duas subclasses:
○ Carro, cujo imposto é 10% do valor do carro.
○ Moto, cujo imposto é 5% do valor da moto.
3. Adicione um método mostrarInformacoes() que exiba a marca, modelo
e imposto.
4. Demonstre o polimorfismo criando uma lista com instâncias das
subclasses e iterando para exibir as informações de cada veículo.
*/

class Veiculo {
    constructor(marca, modelo, valor) {
        if (this.constructor === Veiculo) {
            throw new Error("Classe abstrata não pode ser instanciada diretamente")
        }
        this._marca = marca
        this._modelo = modelo
        this._valor = valor
    }

    calcularImposto() {
        throw new Error("Método abstrato deve ser implementado")
    }

    mostrarInformacoes() {
        const imposto = this.calcularImposto();
        return `Marca: ${this._marca}, Modelo: ${this._modelo}, Valor: ${this._valor.toFixed(2)}, Imposto: ${imposto.toFixed(2)}`
    }
}

class Carro extends Veiculo {
    calcularImposto() {
        return this._valor * 0.1
    }
}

class Moto extends Veiculo {
    calcularImposto() {
        return this._valor * 0.05
    }
}

const carro1 = new Carro("Toyota", "Corolla", 80000)
const carro2 = new Carro("Honda", "Civic", 90000)
const moto1 = new Moto("Yamaha", "MT-07", 35000)
const moto2 = new Moto("Honda", "CB 500", 30000)

const veiculos = [carro1, carro2, moto1, moto2]

veiculos.forEach(veiculo => {
    console.log(veiculo.mostrarInformacoes())
});
