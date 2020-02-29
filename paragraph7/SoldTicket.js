class SoldTicket extends Ticket{

  constructor (options) {
    super(options);
    this.pass_name = options.pass_name; // ticket owner name
    this.pass_id = options.pass_id;
    this.t_id = options.t_id;
  }

  change_train(new_train_id){
    this.train_id = new_train_id;
    return sold_tickets;
  }


}


module.exports = SoldTicket;
