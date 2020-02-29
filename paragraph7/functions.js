const Passenger = require("./Passenger.js");
/*const Ticket = require("./Ticket.js");
const Train = require("./Train.js");
const SoldTicket = require("./SoldTicket.js");*/




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

function findPassengerById(id, passengersList){
  return passengersList.filter(pas => pas.id === id)
}


console.log(deletePassenger(4, passengers));
console.log(findPassengerById(3, passengers));



