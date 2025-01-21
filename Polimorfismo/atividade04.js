/*
Enunciado:
Crie uma ordem de aulas para representar animais. Uma classe base Animaldeve ter o
método emitirSom. As classes derivadas Cachorroe Gatodevem Passarosobrescrever
esse método para selecionar sons específicos.
Instancie objetos de cada classe, armazene-os em um array e itere chame o método
emitirSompara demonstrar polimorfismo.
*/

// Classe base
class Animal {
    emitirSom() {
        throw new Error("Este método deve ser sobrescrito pelas subclasses");
    }
}

// Classes derivadas
class Cachorro extends Animal {
    emitirSom() {
        console.log("Au au!");
    }
}

class Gato extends Animal {
    emitirSom() {
        console.log("Miau!");
    }
}

class Passaro extends Animal {
    emitirSom() {
        console.log("Piu piu!");
    }
}

// Criando instâncias de cada classe
const animais = [
    new Cachorro(),
    new Gato(),
    new Passaro()
];

// Iterando pelo array e chamando o método emitirSom
animais.forEach(animal => animal.emitirSom());
