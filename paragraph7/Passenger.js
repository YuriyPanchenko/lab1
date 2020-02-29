class Passenger {

  constructor (options) {
    this.id = options.id;
    this.name = options.name;
  }
  buy_ticket(train_id){
    sold_tickets.push(new SoldTicket({train_id: train_id,is_sold: true,pass_id:this.id ,pass_name:this.name, t_id: sold_tickets.length  }));
    return sold_tickets;
  }
}


module.exports = Passenger;
