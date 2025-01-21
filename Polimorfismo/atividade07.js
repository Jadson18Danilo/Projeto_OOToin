/*
Enunciado:
Crie uma classificação de classes para representar dispositivos eletrônicos. Uma classe
base Dispositivodeve ter o método ligar. As classes derivadas Celulare
Tabletdevem Notebooksobrescrever esse método para exibir mensagens específicas
sobre como cada dispositivo está conectado.
Crie instâncias de cada classe, armazene-as em um array e utilize um loop para
demonstrar polimorfismo ao chamar o método ligar.
*/

// Classe base
class Dispositivo {
    ligar() {
        throw new Error("Este método deve ser sobrescrito pelas subclasses");
    }
}

// Classes derivadas
class Celular extends Dispositivo {
    ligar() {
        console.log("O celular está sendo ligado e conectado à rede móvel.");
    }
}

class Tablet extends Dispositivo {
    ligar() {
        console.log("O tablet está sendo ligado e conectado ao Wi-Fi.");
    }
}

class Notebook extends Dispositivo {
    ligar() {
        console.log("O notebook está sendo ligado e conectado à energia e à internet.");
    }
}

// Criando instâncias de cada classe
const dispositivos = [
    new Celular(),
    new Tablet(),
    new Notebook()
];

// Iterando pelo array e chamando o método ligar
dispositivos.forEach(dispositivo => dispositivo.ligar());
