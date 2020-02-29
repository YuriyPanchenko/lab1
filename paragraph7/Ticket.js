class Ticket {

  constructor (options) {
    this.train_id = options.train_id;
    // this.number = options.number; //ticket id
    this.is_sold = options.is_sold;
  }
}

module.exports = Ticket;
