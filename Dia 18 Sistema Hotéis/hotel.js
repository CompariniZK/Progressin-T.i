let hoteis = []
let reservas = []

class Hotel {

    ID;
    nome;
    categoria;
    endereço;
    telefone;
    
    constructor(ID, nome, categoria, endereço, telefone){

        this.ID = ID
        this.nome = nome
        this.categoria = categoria
        this.endereço = endereço
        this.telefone = telefone

}
}

function cadastroHotel (ID, nome, categoria, endereco, telefone){

    let hotel = new Hotel(ID, nome, categoria, endereco, telefone)
    hoteis.push(hotel);
}
    
    let whilezin = true

    while(whilezin = true){

    let ID = prompt("Insira o número ID do hotel para cadastro:")
    let nome = prompt("Insisra o nome do hotel:")
    let categoria = parseInt(prompt("Insira a catgoria do hotel de 1 à 5 como máximo."))
    let endereco = prompt("Insira o nome do bairro e estado do hotel:")
    let telefone = parseInt(prompt("Insira o telefone do hotel:"))

    cadastroHotel(ID, nome, categoria, endereco, telefone);

    let desejoParar = parseInt(prompt('Deseja cadastrar mais? Digite(1) para sim ou qualquer outro número para não'))
    if(desejoParar != 1 ){
        whilezin = false;
        break;
    }
    }

    //Pra segunda feira, lembre -se de criar a função cadastroReservas e quebrá-la assim como quebrei a do hotel

class Reservas{

id;
nameHotel;
nomeResponsavel;
diaEntrada;
diaSaida;

constructor(id,nameHotel,nomeResponsavel,diaEntrada,diaSaida)
{

    this.id = id
    this.nameHotel = nameHotel
    this.nomeResponsavel = nomeResponsavel
    this.diaEntrada = diaEntrada
    this.diaSaida = diaSaida



}

}

function cadastroReservas (id, idHotel, nomeResponsavel, diaEntrada, diaSaida)
{

let reservado = new Reservas(id,idHotel,nomeResponsavel, diaEntrada,diaSaida)
reservas.push(reservado);

}
let loopzin = true

let idDaReserva = 0
let nameHotel = 0
let nomeResponsavel = 0
let diaEntrada = 0
let diaSaida = 0

while(loopzin = true)
{
 idDaReserva = parseInt(prompt("Insira o ID da reserva:"))
 nameHotel = prompt("Insira o name do Hotel:")
 nomeResponsavel = prompt("Insira o nome do responsável:")
 diaEntrada = parseInt(prompt("Insira a data da entreada: (ex: 03/02/10"))
 diaSaida = parseInt(prompt("Insira o dia da saída da mesma forma"))

cadastroReservas(idDaReserva, nameHotel, nomeResponsavel, diaEntrada, diaSaida);

let desejo2 = Number(prompt("Deseja criar uma nova reserva? Digite 1 para sim ou 2 pra não"))

if(desejo2 !== 1){

break;


}
}
    function demanda(IDHOTEL) {
        IDHOTEL = Number(prompt("Insira o ID do hotel para verificar as reservas:"));
    
        // Verificar se há pelo menos uma reserva para o hotel
        let reservasHotel = reservas.filter(reserva => reserva.nameHotel === IDHOTEL);
        // Em cada posição do array 'reservas' será filtrado nameHotel === IDHOTEL
        //Se for true, vem o código abaixo:
    
        if (reservasHotel.length > 0) 
        //Se tiver em alguma posição do array o valor inserido, a váriavel reservasHotel será maior que 0
        //Portanto, se for maior que 0,  será mostrado no console o array correspondente à filtragem;
        {
            console.log("Reservas encontradas para o hotel ID " + IDHOTEL + ":");
            console.log(reservasHotel);
        } else {
            console.log("Nenhuma reserva encontrada para o hotel ID " + IDHOTEL);
        }
    }
    function demandaNome(nomeReservante){
        nomeReservante = prompt("Insira o nome do Reservante para verificarmos a reserva: ")
        let reservante = reservas.filter(reserva => reserva.nomeResponsavel === nomeReservante);

        if(reservante.length > 0){
            console.log("Reservas encontradas no nome do " + nomeReservante + ":")
            console.log(reservante);
        }
    }

    function demandaCategoria (categoris){

        categoris = Number(prompt("Qual a categoria do Hotel reservado? Vamos buscá-lo"))
        let Ncategoria = hoteis.filter(nota => nota.categoria === categoris)
        
        if (Ncategoria.length > 0) {

        console.log("Os Hoteis e suas informações com essa categoria são:");
        
        Ncategoria.forEach(hotel => {
            console.log("ID: " + hotel.ID);
            console.log("Nome: " + hotel.nome);
            console.log("Categoria: " + hotel.categoria);
            console.log("Endereço: " + hotel.endereço);
            console.log("Telefone: " + hotel.telefone);
            console.log("------");
        });
    } 
    else
     {
        console.log("Nenhum hotel encontrado com a categoria " + categoris);
    }
}


    let fazer = parseInt(prompt("Digite 1 se deseja fazer uma busca de hotéis por categotoria, ou digite 2 para buscar sua reserva"))
      
       if(fazer === 1){

        demandaCategoria();

    }
       if(fazer === 2){

    
       let operacao = parseInt(prompt("Como você pretende fazer sua busca de reservas? Nome do responsável (1)? Nome do hotel digite (2)"))
             if(operacao === 1){

              demandaNome ();
}

                if(operacao === 2){

                  demanda();



}

    }