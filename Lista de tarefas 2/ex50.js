/*50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
deverá ser capaz de interagir com o usuário através do console do navegador e manter
um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
1. Estrutura de Dados:
○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
cidade, quartos totais e quartos disponiveis.
○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
nomeCliente.
2. Funcionalidades:
○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
disponíveis em uma cidade específica.
○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
deve diminuir o número de quartos disponiveis do hotel.
○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
aumentar o número de quartos disponiveis no hotel correspondente.
○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
cliente.
3. Regras de Negócio:
○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
○ As reservas devem ser identificadas por um ID único e associadas a um
único hotel.
4. Desafios Adicionais (Opcionais):
○ Implementar uma função de check-in e check-out que atualize a
disponibilidade de quartos.
○ Gerar relatórios de ocupação para um hotel.
○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
avaliações dentro do objeto do hotel.*/

const prompt = require('prompt-sync')();

class Hotel {
  constructor(id, nome, cidade, quartosTotais) {
    this.id = id;
    this.nome = nome;
    this.cidade = cidade;
    this.quartosTotais = quartosTotais;
    this.quartosDisponiveis = quartosTotais;
    this.reservas = [];
    this.avaliacoes = [];
  }

  fazerReserva(idReserva, nomeCliente) {
    if (this.quartosDisponiveis > 0) {
      this.quartosDisponiveis--;
      this.reservas.push({ idReserva, nomeCliente });
      return true;
    }
    return false;
  }

  cancelarReserva(idReserva) {
    const reservaIndex = this.reservas.findIndex(reserva => reserva.idReserva === idReserva);
    if (reservaIndex !== -1) {
      this.quartosDisponiveis++;
      this.reservas.splice(reservaIndex, 1);
      return true;
    }
    return false;
  }

  adicionarAvaliacao(avaliacao) {
    this.avaliacoes.push(avaliacao);
  }

  mostrarReservas() {
    return this.reservas;
  }
}

class SistemaReservaHoteis {
  constructor() {
    this.hotels = [];
  }

  adicionarHotel(id, nome, cidade, quartosTotais) {
    const hotel = new Hotel(id, nome, cidade, quartosTotais);
    this.hotels.push(hotel);
  }

  buscarHoteisPorCidade(cidade) {
    return this.hotels.filter(hotel => hotel.cidade === cidade && hotel.quartosDisponiveis > 0);
  }

  fazerReserva(idHotel, idReserva, nomeCliente) {
    const hotel = this.hotels.find(hotel => hotel.id === idHotel);
    if (hotel) {
      return hotel.fazerReserva(idReserva, nomeCliente);
    }
    return false;
  }

  cancelarReserva(idHotel, idReserva) {
    const hotel = this.hotels.find(hotel => hotel.id === idHotel);
    if (hotel) {
      return hotel.cancelarReserva(idReserva);
    }
    return false;
  }

  listarReservas() {
    const reservas = [];
    this.hotels.forEach(hotel => {
      reservas.push(...hotel.mostrarReservas().map(reserva => ({ hotel: hotel.nome, ...reserva })));
    });
    return reservas;
  }
}

function mostrarMenu() {
  console.log("1. Adicionar hotel");
  console.log("2. Buscar hotéis por cidade");
  console.log("3. Fazer reserva");
  console.log("4. Cancelar reserva");
  console.log("5. Listar reservas");
  console.log("0. Sair");
}

const sistemaReserva = new SistemaReservaHoteis();

let sair = false;
while (!sair) {
  console.log("\n### Menu Principal ###");
  mostrarMenu();
  const opcao = prompt("Escolha uma opção: ");

  switch (opcao) {
    case '1':
      const nomeHotel = prompt("Nome do hotel: ");
      const cidadeHotel = prompt("Cidade do hotel: ");
      const quartosHotel = parseInt(prompt("Número de quartos do hotel: "));
      const idHotel = sistemaReserva.hotels.length + 1;
      sistemaReserva.adicionarHotel(idHotel, nomeHotel, cidadeHotel, quartosHotel);
      console.log("Hotel adicionado com sucesso!");
      break;

    case '2':
      const cidadeBusca = prompt("Digite a cidade para buscar hotéis: ");
      const hoteisEncontrados = sistemaReserva.buscarHoteisPorCidade(cidadeBusca);
      if (hoteisEncontrados.length === 0) {
        console.log("Nenhum hotel encontrado nessa cidade.");
      } else {
        console.log("Hotéis encontrados:");
        hoteisEncontrados.forEach(hotel => {
          console.log(`- ${hotel.nome} (${hotel.quartosDisponiveis} quartos disponíveis)`);
        });
      }
      break;

    case '3':
      const idHotelReserva = parseInt(prompt("ID do hotel: "));
      const idReserva = parseInt(prompt("ID da reserva: "));
      const nomeCliente = prompt("Nome do cliente: ");
      const sucessoReserva = sistemaReserva.fazerReserva(idHotelReserva, idReserva, nomeCliente);
      if (sucessoReserva) {
        console.log("Reserva realizada com sucesso!");
      } else {
        console.log("Não foi possível realizar a reserva. Quartos indisponíveis ou hotel não encontrado.");
      }
      break;

    case '4': 
      const idHotelCancelamento = parseInt(prompt("ID do hotel: "));
      const idReservaCancelar = parseInt(prompt("ID da reserva a cancelar: "));
      const sucessoCancelamento = sistemaReserva.cancelarReserva(idHotelCancelamento, idReservaCancelar);
      if (sucessoCancelamento) {
        console.log("Reserva cancelada com sucesso!");
      } else {
        console.log("Não foi possível cancelar a reserva. Hotel ou reserva não encontrados.");
      }
      break;

    case '5': 
      const reservas = sistemaReserva.listarReservas();
      if (reservas.length === 0) {
        console.log("Nenhuma reserva encontrada.");
      } else {
        console.log("Reservas:");
        reservas.forEach(reserva => {
          console.log(`- Hotel: ${reserva.hotel}, ID: ${reserva.idReserva}, Cliente: ${reserva.nomeCliente}`);
        });
      }
      break;

    case '0': 
      sair = true;
      console.log("Saindo do programa...");
      break;

    default:
      console.log("Opção inválida. Por favor, escolha uma opção válida.");
  }
}