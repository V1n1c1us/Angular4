import Carro from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'


/* --- criar carros ----- */
let carroA = new Carro('Golf TSI', 4)
let carroB = new Carro('Polo Higline', 4)
let carroC = new Carro('Fuca', 4)

/* --- montar a lista de carros da concessionária --- */
let listaDeCarros: Carro[] = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av Ipiranga', listaDeCarros)

/** --- exibir a lista de carros --- */
//console.log(concessionaria.mostrarListaDeCarros())


/** --- instanicar o OBJ Pessoa ( COMPRAR O CARRO ) --- */
let cliente = new Pessoa('Vinícius','Polo Higline')

/* --- Verificar o Carro Preferido ---*/
//console.log(cliente.dizerCarroPreferido())

concessionaria.mostrarListaDeCarros().map((carro: Carro) =>{

    if(carro['modelo'] == cliente.dizerCarroPreferido()){
    
        // comprar o carro
        cliente.comprarCarro(carro);
    }
})


console.log(cliente.dizerCarroQueTem())