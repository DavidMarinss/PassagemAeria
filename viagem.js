
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

        if ( primeiraClasse == true || primeiraClasse == false ) {
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
        console.log("Numero assento :", this.#Assento, "Nome Passageiro :", this.#Passageiro.BuscarNome(), "Número Voo:", this.#Voo.BuscarNumero(), "Local Destino:", this.#Voo.BuscarLocalDeDestino())
    }

}

let pessoa = new Cliente("David", "440.929.618-87", "02/03/1994")
console.log(pessoa)

let empresaAeria = new Voo("Azul", "4545", "27/09/22", 20, "Aeroporto Congonhas -SP", "aeroporto Quararapes - Resife,PE")
console.log(empresaAeria)

let passagem = new PassagemArea(25, true, 2000, pessoa, empresaAeria)
console.log(passagem)

let pacote = new PacoteViagem("David", passagem, passagem, 2000)
console.log(pacote)

passagem.ExibirResumo()
