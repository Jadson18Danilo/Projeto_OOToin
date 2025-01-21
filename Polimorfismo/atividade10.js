/*
Enunciado:
Implemente uma hierarquia de classes para representar dispositivos eletrônicos. A
classe base Eletronico deve ter o método ligar. Crie classes derivadas como Smartphone
e Notebook devem sobrescrevendo esse método. Armazene objetos dessas classes em um
array e intere chamando o método ligar.
*/

// Classe base
class Eletronico {
    ligar() {
        throw new Error("Este método deve ser sobrescrito pelas subclasses");
    }
}

// Classes derivadas
class Smartphone extends Eletronico {
    ligar() {
        console.log("O smartphone está sendo ligado e conectado à rede móvel.");
    }
}

class Notebook extends Eletronico {
    ligar() {
        console.log("O notebook está sendo ligado e preparado para uso.");
    }
}

// Criando instâncias de cada classe
const dispositivos = [
    new Smartphone(),
    new Notebook()
];

// Iterando pelo array e chamando o método ligar
dispositivos.forEach(dispositivo => dispositivo.ligar());
