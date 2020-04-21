class Train {

  constructor (options) {
    this.id = options.id;
    this.direction = options.direction;
    this.vagons = options.vagons;
  }
    /*tostring(){
    return "Train {" + "id = " + this.id+
        ", direction = " + this.direction+
        ", vagons = "+ this.vagons + "; "
    }*/
}

module.exports = Train;
