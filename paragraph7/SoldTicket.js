const Passenger = require("./Passenger.js");
const Ticket = require("./Ticket.js");

//const SoldTicket = require("./SoldTicket.js");

class SoldTicket{

  constructor (options) {
    this.Passanger = options.Passanger; // ticket owner name
    this.Ticket = options.Ticket;
  }



}


module.exports = SoldTicket;
