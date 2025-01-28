/*
Enunciado:
Implemente um sistema que represente diferentes tipos de animais:
1. Crie uma classe abstrata Animal com:
○ Propriedades protegidas nome e especie.
○ Um método abstrato emitirSom().
2. Crie duas subclasses:
○ Cachorro, que emite o som "Latido".
○ Gato, que emite o som "Miau".
3. Adicione um método descricao() para mostrar o nome, espécie e som
do animal.
4. Use polimorfismo para exibir a descrição de diferentes animais.
*/

class Animal {
    constructor(nome, especie) {
        if (this.constructor === Animal) {
            throw new Error("Classe abstrata não pode ser instanciada diretamente")
        }
        this._nome = nome
        this._especie = especie
    }


    emitirSom() {
        throw new Error("Método abstrato deve ser implementado")
    }

    descricao() {
        return `Nome: ${this._nome}, Espécie: ${this._especie}, Som: ${this.emitirSom()}`
    }
}

class Cachorro extends Animal {
    emitirSom() {
        return "Latido"
    }
}

class Gato extends Animal {
    emitirSom() {
        return "Miau"
    }
}

const cachorro1 = new Cachorro("Rex", "Canis lupus familiaris")
const cachorro2 = new Cachorro("Bob", "Canis lupus familiaris")
const gato1 = new Gato("Mimi", "Felis catus")
const gato2 = new Gato("Luna", "Felis catus")

const animais = [cachorro1, cachorro2, gato1, gato2]

animais.forEach(animal => {
    console.log(animal.descricao())
})
