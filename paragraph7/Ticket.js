const Train = require("./Train.js");
class Ticket {

  constructor (options) {
    this.Train = options.Train;
    this.place = options.place;
    this.vagon = options.vagon;
    this.is_sold = options.is_sold;
  }
}

module.exports = Ticket;
