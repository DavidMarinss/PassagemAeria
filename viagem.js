let cadastroCliente = []
let vooCadastrado = []
let pacoteViagemcadastro = []
let passagensArea = []
let passagemAreaArray = []
continuar = true


class Cliente {
    #Nome
    #Cpf
    #DataNascimento

    constructor(nome, cpf, dataNascimento) {
        this.DefinirNome(nome)
        this.DefinirCpf(cpf)
        this.DefinirDataNascimento(dataNascimento)

    }
    DefinirNome(nome) {
        if (nome.length > 50) {

            alert("Não pode conter mais de 50 caracteres.")
            return
        }

        this.#Nome = nome

    }
    DefinirCpf(cpf) {
        if (cpf.length > 11) {

            alert("Não pode conter mais de 11 caracteres.")
            return
        }
        this.#Cpf = cpf
    }
    DefinirDataNascimento(dataNascimento) {
        this.#DataNascimento = dataNascimento
    }

    BuscarNome() {

        return this.#Nome
    }

    BuscarCpf() {

        return this.#Cpf
    }
    BuscarDataNascimento() {

        return this.#DataNascimento
    }

}
class PacoteViagem {
    #Titular
    #PassagemIda
    #PassagemVolta
    #ValorTotal

    constructor(titular, passagemIda, passagemVolta, valorTotal) {

        this.DefinirTitular(titular)
        this.DefinirPassagemIda(passagemIda)
        this.DefinirPassagemVolta(passagemVolta)
        this.DefinirValorTotal(valorTotal)

    }
    DefinirTitular(titular) {
        this.#Titular = titular
    }
    DefinirPassagemIda(passagemIda) {
        this.#PassagemIda = passagemIda
    }
    DefinirPassagemVolta(passagemVolta) {
        this.#PassagemVolta = passagemVolta
    }
    DefinirValorTotal(valorTotal) {
        this.#ValorTotal = valorTotal
    }

    BuscarTitular() {
        return this.#Titular
    }
    BuscarPassagemIda() {
        return this.#PassagemIda
    }

    BuscarPassagemVolta() {
        return this.#PassagemVolta
    }
    BuscarValorTotal() {
        return this.#ValorTotal
    }

}

class Voo {
    #Empresa
    #Numero
    #Data
    #Horario
    #LocalDePartida
    #LocalDeDestino

    constructor(empresa, numero, data, horario, localDePartida, localDeDestino) {
        this.DefinirEmpresa(empresa)
        this.DefinirNumero(numero)
        this.DefinirData(data)
        this.DefinirHorario(horario)
        this.DefinirLocalDePartida(localDePartida)
        this.DefinirLocalDeDestino(localDeDestino)
    }
    DefinirEmpresa(empresa) {
        this.#Empresa = empresa
    }
    DefinirNumero(numero) {
        this.#Numero = numero
    }
    DefinirData(data) {
        this.#Data = data
    }
    DefinirHorario(horario) {
        this.#Horario = horario
    }
    DefinirLocalDePartida(localDePartida) {
        this.#LocalDePartida = localDePartida
    }
    DefinirLocalDeDestino(localDeDestino) {
        this.#LocalDeDestino = localDeDestino
    }

    BuscarEmpresa() {
        return this.#Empresa
    }
    BuscarNumero() {
        return this.#Numero
    }
    BuscarData() {
        return this.#Data
    }
    BuscarHorario() {
        return this.#Horario
    }
    BuscarLocalDePartida() {
        return this.#LocalDePartida
    }
    BuscarLocalDeDestino() {
        return this.#LocalDeDestino
    }

}

class PassagemArea {
    #Assento
    #PrimeiraClasse
    #Valor
    #Passageiro
    #Voo
    constructor(assento, primeiraClasse, valor, passageiro, voo) {
        this.DefinirAssento(assento)
        this.DefinirPrimeiraClasse(primeiraClasse)
        this.DefinirValor(this.calcularvalor(valor))
        this.DefinirPassageiro(passageiro)
        this.DefinirVoo(voo)

    }
    DefinirAssento(assento) {
        this.#Assento = assento
    }
    DefinirPrimeiraClasse(primeiraClasse) {

        if (primeiraClasse == true || primeiraClasse == false) {
            this.#PrimeiraClasse = primeiraClasse
            return
        }
        alert("Esse metodo  aceita somente um valor booleano.")

    }
    DefinirValor(valor) {

        if (valor.length < 0) {

            alert("Pode somente valores acima de Zero.")
            return
        }

        this.#Valor = valor
    }
    DefinirPassageiro(passageiro) {
        this.#Passageiro = passageiro
    }
    DefinirVoo(voo) {
        this.#Voo = voo
    }


    BuscarAssento() {
        return this.#Assento
    }
    BuscarPrimeiraClasse() {

        return this.#PrimeiraClasse
    }
    BuscarValor() {

        return this.#Valor
    }
    BuscarEPassageiro() {
        return this.#Passageiro
    }
    BuscarVoo() {
        return this.#Voo
    }


    calcularvalor(valor) {
        let calculo = 0

        if (this.#PrimeiraClasse) {

            calculo = valor + (valor * 50 / 100)
            return calculo
        }
        return valor

    }
    ExibirResumo() {
        console.log("Numero assento :",
            this.#Assento, "Nome Passageiro :",
            this.#Passageiro.BuscarNome(), "Número Voo:",
            this.#Voo.BuscarNumero(), "Local Destino:",
            this.#Voo.BuscarLocalDeDestino())
    }

}
//Área Teste.
let pessoa = new Cliente("David", "440.929", "02/03/1994")
//console.log(pessoa)

let empresaAeria = new Voo("Azul", "4541", "27/09/22", 20, "SP", "PE")
let empresaAeria2 = new Voo("Azul", "4542", "27/09/22", 20, "BF", "SP")
let empresaAeria3 = new Voo("Azul", "4543", "27/09/22", 20, "SP", "BF")
let empresaAeria4 = new Voo("Azul", "4544", "27/09/22", 20, "SP", "BF")
let empresaAeria5 = new Voo("Azul", "4545", "27/09/22", 20, "RJ", "PE")
let empresaAeria6 = new Voo("Azul", "4546", "27/09/22", 20, "PE", "RJ")
let empresaAeria7 = new Voo("Azul", "4547", "27/09/22", 20, "SC", "PE")
let empresaAeria8 = new Voo("Azul", "4548", "27/09/22", 20, "PE", "SC")
let empresaAeria9 = new Voo("Azul", "4549", "27/09/22", 20, "RJ", "PE")
let empresaAeria10 = new Voo("Azul", "4550", "27/09/22", 20, "PE", "SP")

vooCadastrado.push(empresaAeria, empresaAeria2, empresaAeria3, empresaAeria4, empresaAeria5, empresaAeria6, empresaAeria7, empresaAeria8, empresaAeria9, empresaAeria10)


let passagem = new PassagemArea(1, true, 100, pessoa, empresaAeria.BuscarNumero())
let passagem2 = new PassagemArea(2, true, 100, pessoa, empresaAeria.BuscarNumero())
let passagem3 = new PassagemArea(3, true, 100, pessoa, empresaAeria2.BuscarNumero())
let passagem4 = new PassagemArea(4, true, 100, pessoa, empresaAeria4.BuscarNumero())
let passagem5 = new PassagemArea(5, true, 100, pessoa, empresaAeria5.BuscarNumero())
passagemAreaArray.push(passagem, passagem2, passagem3, passagem4, passagem5)


//let pacote = new PacoteViagem("David", passagem, passagem, 2000)

//console.log(pacote)


while (continuar) {

    let opcaoEscolha = opcao()

    switch (opcaoEscolha) {

        case "1":
            let cadastro = new Cliente(
                prompt("Digite seu nome:"),
                prompt("Digite seu CPF :"),
                prompt("Digite sua data de nascimento:"))
            cadastroCliente.push(cadastro)

            break;
        case "2":
            let cadastroVoo = new Voo(
                prompt("Empresa: "),
                prompt("Número: "),
                prompt("Data: "),
                prompt("Horario: "),
                prompt("Local Partida: "),
                prompt("Local Destino: "))
            vooCadastrado.push(cadastroVoo)
            break;

        case "3":
            let cadastroPacoteViagem = new PacoteViagem()

            cadastroPacoteViagem.DefinirTitular(prompt("Titular: "))

            let cliente = new Cliente(
                prompt("Nome :"),
                prompt("CPF :"),
                prompt("Data Nascimento :")
            )

            VooDisponiveis()

            cadastroPacoteViagem.DefinirPassagemIda(prompt("Passagem Ida: "))

            let passagemIda = NewPassagemArea(cliente)



            Consulta(cadastroPacoteViagem.BuscarPassagemIda())

            cadastroPacoteViagem.DefinirPassagemVolta(prompt("Passagem Volta:"))

            let passagemVolta = NewPassagemArea(cliente)

            cadastroPacoteViagem.DefinirValorTotal(Number(passagemIda.BuscarValor() + passagemVolta.BuscarValor()))

            pacoteViagemcadastro.push(cadastroPacoteViagem)

            console.log(cadastroPacoteViagem)

            console.log(passagemIda.ExibirResumo())
            console.log(passagemVolta.ExibirResumo())


            break;

        case "4":
            continuar = false
            break;

    }

}

function opcao() {
    return prompt("Aperte (1)cadastrar Cliente,(2)Voo, (3),Pacote Viagem (4)encerrar")
}


function VooDisponiveis() {

    console.log("Voos Disponível: ")

    vooCadastrado.forEach(x => {
        console.log(x)
    })
}

function Consulta(localDeDestino) {

    console.log("Voos Disponível: ")

    vooCadastrado.forEach(voo => {
        if (voo.BuscarLocalDePartida() === localDeDestino) {
            console.log(voo)
        }
    })
}

function NewPassagemArea(cliente) {
    let sair = true
    let Assento
    let Voo = prompt("Voo: ")
    let acharVoo = vooCadastrado.find(voo => voo.BuscarNumero() == Voo)

    while (sair) {
        Assento = Number(prompt("Assento: "))
        sair = ConsultaAssento(Assento, Voo)
    }
    let PrimeiraClasse = Boolean(prompt("PrimeiraClasse :"))
    let Valor = Number(prompt("Valor: "))
    let passagemArea = new PassagemArea(Assento, PrimeiraClasse, Valor, cliente, acharVoo)
    passagemAreaArray.push(passagemArea)

    console.log(passagemAreaArray)
    return passagemArea
}

function ConsultaAssento(Assento, Voo) {
    console.clear()

    let vooExistente = passagemAreaArray.filter(voo => voo.BuscarVoo() === Voo).find(voo => voo.BuscarAssento() === Assento)

    if (vooExistente) {
        console.log('Assento Ocupado')
        return true
    }

    return false
}
