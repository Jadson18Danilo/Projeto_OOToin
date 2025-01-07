//Enunciado:
//Crie um objeto Estudante com os atributos nome, curso e anoIngresso. Adicione um
//método apresentar() que exiba "Meu nome é [nome], estudo [curso] e entrei em
//[anoIngresso]".

const estudante = {
    nome: "Andre",
    curso: "Informática",
    anoIngresso: 2012
}

function apresentar() {
    console.log(`Meu nome é ${estudante.nome}, estudo ${estudante.curso} e entrei em ${estudante.anoIngresso}.`)
}

apresentar()
