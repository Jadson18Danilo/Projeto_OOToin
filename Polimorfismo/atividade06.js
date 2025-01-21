/*
Enunciado:
Crie uma classificação de classes para representar ferramentas. Uma classe base
Ferramentadeve ter o método usar. As classes derivadas Marteloe
ChaveDeFendadevem Serrotesobrescrever o método para exibir mensagens
específicas sobre como são usadas.
Crie instâncias de cada classe, armazene-as em um array e itere chamando o método
usarem cada instância para demonstrar polimorfismo.
*/

// Classe base
class Ferramenta {
    usar() {
        throw new Error("Este método deve ser sobrescrito pelas subclasses");
    }
}

// Classes derivadas
class Martelo extends Ferramenta {
    usar() {
        console.log("O martelo está sendo usado para martelar pregos.");
    }
}

class ChaveDeFenda extends Ferramenta {
    usar() {
        console.log("A chave de fenda está sendo usada para apertar ou soltar parafusos.");
    }
}

class Serrote extends Ferramenta {
    usar() {
        console.log("O serrote está sendo usado para cortar madeira.");
    }
}

// Criando instâncias de cada classe
const ferramentas = [
    new Martelo(),
    new ChaveDeFenda(),
    new Serrote()
];

// Iterando pelo array e chamando o método usar
ferramentas.forEach(ferramenta => ferramenta.usar());
