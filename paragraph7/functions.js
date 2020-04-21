const Passenger = require("./Passenger.js");
const Ticket = require("./Ticket.js");
const Train = require("./Train.js");
const SoldTicket = require("./SoldTicket.js");




function createListOfPassengers (i) {

  let passengers = [new Passenger({id:0, name:"passanger number 0"})];
  for (let j = 1; j < i; j++){
    passengers.push(new Passenger({id:j, name:"passenger number " + j.toString()}))
  }
  return passengers;
}
let passengers = createListOfPassengers(20);
/*console.log(passengers)*/


function addNewPassenger (name, passengersList) {
  passengersList.push(new Passenger({id:passengersList.length, name:name}));
}

addNewPassenger("Sasha", passengers);
/*console.log(passengers);*/

function refactorPassenger (id, newName, passengersList) {
  passengersList.map(passenger => {
    if (passenger.id === id) {
      passenger.name = newName;
    }
  });
}
refactorPassenger(4, "bbb", passengers);
// console.log(passengers)

function deletePassenger (id, passengerList) {
  return passengerList = passengerList.filter(passenger => passenger.id !== id);
  /*passengerList = passengerList.map(passenger =>{
    if(passenger.id > id){
      passenger.id--;
    }
  })*/
}
passengers = deletePassenger(6, passengers)
//console.log(passengers)

function findPassengerById(id, passengersList){
  return passengersList.filter(pas => pas.id === id)
}


//console.log(findPassengerById(3, passengers));

cities = ["Lviv", "Kyiv", "Kharkiv", "Odessa", "Dnipro", "Donetsk", "Mykolaiv", "Chernivtsi"]

function createListOfTrains (i) {

    let trains = [new Train({id:0, direction:"lviv - odessa", vagons: 12})];
    for (let j = 1; j < i; j++){
      city1 = cities[Math.floor((Math.random() * cities.length))];
      do {
        city2 = cities[Math.floor((Math.random() * cities.length))];
      } while (city1 == city2);
        trains.push(new Train({id:j, direction: city1 + " - " + city2, vagons: Math.floor((Math.random() * 10))+5}))
    }
    return trains;
}
trains = createListOfTrains(20);

//console.log(trains);


function addNewTrain (direction, numberOfVagons, trainsList) {
    trainsList.push(new Train({id:trainsList.length, direction:direction, vagons:numberOfVagons}));
}

addNewTrain("lviv - drogobych", 2, trains);
//console.log(trains);

function refactorTrain (id, newDirection, newNumberOfVagons, trainsList) {
    trainsList.map(train => {
        if (train.id === id) {
          train.direction = newDirection;
          train.vagons = newNumberOfVagons;
        }
    });
}

refactorTrain(0, "lviv - berlin", 33, trains);
//console.log(trains);


function deleteTrain (id, trainsList) {
    return trainsList = trainsList.filter(passenger => passenger.id !== id);
    /*passengerList = passengerList.map(passenger =>{
      if(passenger.id > id){
        passenger.id--;
      }
    })*/
}
trains = deleteTrain(0, trains);
//console.log(trains);

function findTrainById(id, trainsList){
    return trainsList.filter(train => train.id === id)
}

//console.log(findPassengerById(4, trains));

function byeTicket(passanger, train, tickets, soldTicketsList) {
  for(i = 0; i < tickets.length; i++){
    if(tickets[i].Train === train && tickets[i].is_sold === false){
        tickets[i].is_sold = true;
        soldTicketsList.push(new SoldTicket({Passanger: passanger, Ticket: tickets[i]}));
        return;
    }
  }
     console.log("All tickets for this train were sold");
}



tickets = [new Ticket({Train: trains[12], place: 6, vagon: 3, is_sold:false}),
    new Ticket({Train: trains[12], place: 1, vagon: 3, is_sold:false}),
    new Ticket({Train: trains[12], place: 2, vagon: 3, is_sold:false}),
    new Ticket({Train: trains[12], place: 3, vagon: 3, is_sold:false}),
    new Ticket({Train: trains[12], place: 4, vagon: 3, is_sold:false}),
    new Ticket({Train: trains[12], place: 5, vagon: 3, is_sold:false}),
    new Ticket({Train: trains[14], place: 1, vagon: 3, is_sold:false}),
    new Ticket({Train: trains[14], place: 2, vagon: 3, is_sold:false}),
    new Ticket({Train: trains[14], place: 3, vagon: 3, is_sold:false}),
    new Ticket({Train: trains[14], place: 4, vagon: 3, is_sold:false}),
    new Ticket({Train: trains[14], place: 5, vagon: 3, is_sold:false})
];
//console.log(tickets);

soldTickets = [new SoldTicket({Passanger: passengers[17], Ticket:tickets[9]})];
//console.log(soldTickets);
byeTicket(passengers[13], trains[12], tickets, soldTickets);
byeTicket(passengers[14], trains[12], tickets, soldTickets);
byeTicket(passengers[15], trains[12], tickets, soldTickets);
byeTicket(passengers[16], trains[12], tickets, soldTickets);
//console.log(soldTickets);


function changeTicket(soldTicket, newTrain) {
    for(i = 0; i < tickets.length; i++){
        if(tickets[i].Train === newTrain && tickets[i].is_sold === false){
          soldTicket.Ticket.is_sold = false;
          tickets[i].is_sold = true;
          soldTicket.Train = newTrain;
          return;
        }
    }
    console.log("All tickets for new train were sold");
}

changeTicket(soldTickets[1], trains[14] );
//console.log(soldTickets);


function deleteSoldTicket(soldTicket, soldTickets) {
    soldTicket.Ticket.is_sold = false;
    for(i = 0; i < soldTickets.length; i++){
      if(soldTickets[i] === soldTicket){
        soldTickets.splice(i, 1);
      }
    }
}

deleteSoldTicket(soldTickets[1], soldTickets);
//console.log(soldTickets);

function NumberOfMostUsefullTrains (soldTickets) {
    const myMap = new Map();
    for (let i = 0; i < soldTickets.length; i++) {
        if (myMap.has(soldTickets[i].Train) === false)
            myMap.set(soldTickets[i].Train, 1);
        else
        {
            let newNumber = myMap.get(soldTickets[i].Train);
            myMap.set(soldTickets[i].Train, ++newNumber)
        }


    }
    //console.log(myMap);

    console.log([...myMap.entries()].reduce((a, e ) => e[1] > a[1] ? e : a))

}
NumberOfMostUsefullTrains(soldTickets);
