
class Cliente{
Nome 
Cpf
DataNascimento

constructor(Nome,Cpf,DataNascimento){
    this.Nome = Nome
    this.Cpf = Cpf
    this.DataNascimento = DataNascimento 

}

}
class PacoteViagem {
Titular
PassagemIda 
PassagemVolta
ValorTotal

constructor(titular,passagemIda,passagemVolta,valorTotal){

    this.Titular = titular
    this.PassagemIda = passagemIda
    this.PassagemVolta = passagemVolta
    this.ValorTotal = valorTotal

}

}

class Voo{
Empresa 
Numero
Data
Horario
LocalDePartida 
LocalDeDestino

constructor(empresa,numero,data,horario,localDePartida,localDeDestino){
    this.Empresa = empresa
    this.Numero = numero
    this.Data = data
    this.Horario = horario
    this.LocalDePartida = localDePartida
    this.LocalDeDestino = localDeDestino
}

}

class PassagemArea{
Assento
PrimeiraClasse 
Valor
Passageiro
Voo
constructor(assento,primeiraClasse,valor,passageiro,voo){
    this.Assento = assento
    this.PrimeiraClasse = primeiraClasse
    this.Valor = this.calcularvalor(valor)
    this.Passageiro = passageiro
    this.Voo = voo

  

}
calcularvalor(valor){
 let calculo = 0

 if (this.PrimeiraClasse){

 calculo = valor + (valor*50/100) 
  return calculo
 }
return valor

}
ExibirResumo(){
console.log("Numero assento",this.Assento,"Nome Passageiro :",this.Passageiro.Nome,"Número Voo:",this.Voo.Numero,"Local Destino:",this.Voo.LocalDeDestino)
}

}

let pessoa = new Cliente("David","440.929.618-87","02/03/1994")
console.log(pessoa)

let empresaAeria = new Voo("Azul","4545","27/09/22",20,"Aeroporto Congonhas -SP","aeroporto Quararapes - Resife,PE")
console.log(empresaAeria)

let passagem = new PassagemArea (25,true,2000,pessoa,empresaAeria)
console.log(passagem)

let pacote = new PacoteViagem("David",passagem,passagem, 2000 )
console.log(pacote)

passagem.ExibirResumo()