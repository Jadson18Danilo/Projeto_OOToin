/*
Enunciado:
Crie uma classificação de classes para representar notificações. Uma classe base
Notificacão deve ter o método enviar. As classes derivadas Email, SMS e Push devem
sobrescrever o método para exibir mensagens específicas sobre como cada notificação
é enviada.
Crie instâncias de cada classe, armazene-as em um array e demonstre o polimorfismo ao
chamar o método enviarem cada instância.
*/

// Classe base
class Notificacao {
    enviar() {
        throw new Error("Este método deve ser sobrescrito pelas subclasses");
    }
}

// Classes derivadas
class Email extends Notificacao {
    enviar() {
        console.log("O email está sendo enviado para o destinatário.");
    }
}

class SMS extends Notificacao {
    enviar() {
        console.log("O SMS está sendo enviado para o celular do destinatário.");
    }
}

class Push extends Notificacao {
    enviar() {
        console.log("A notificação push está sendo enviada para o aplicativo do usuário.");
    }
}

// Criando instâncias de cada classe
const notificacoes = [
    new Email(),
    new SMS(),
    new Push()
];

// Iterando pelo array e chamando o método enviar
notificacoes.forEach(notificacao => notificacao.enviar());
