/*
Enunciado:
Crie uma hierarquia de classes para representar meios de transporte. Uma classe base
Transportedeve ter o método mover. As classes derivadas Carroe Bicicletadevem
Aviaosobrescrever esse método para exibir mensagens específicas sobre como se
mover.
Crie instâncias de cada classe, armazene-as em um array e utilize um loop para chamar o
método moverem cada instância, demonstrando polimorfismo.
*/

// Classe base
class Transporte {
    mover() {
        throw new Error("Este método deve ser sobrescrito pelas subclasses");
    }
}

// Classes derivadas
class Carro extends Transporte {
    mover() {
        console.log("O carro está se movendo sobre quatro rodas.");
    }
}

class Bicicleta extends Transporte {
    mover() {
        console.log("A bicicleta está se movendo com pedais.");
    }
}

class Aviao extends Transporte {
    mover() {
        console.log("O avião está voando pelos céus.");
    }
}

// Criando instâncias de cada classe
const transportes = [
    new Carro(),
    new Bicicleta(),
    new Aviao()
];

// Iterando pelo array e chamando o método mover
transportes.forEach(transporte => transporte.mover());
