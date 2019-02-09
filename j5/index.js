const Raspi = require('raspi-io');
const five = require('johnny-five');
const board = new five.Board({
  io: new Raspi()
});

board.on('ready', () => {

 var altitude = new five.Altimeter({
    controller: "MPL3115A2",
    // Change `elevation` with whatever is reported
    // on http://www.whatismyelevation.com/.
    // `12` is the elevation (meters) for where I live in Brooklyn
    elevation: 10,
  });

  altitude.on("data", function() {
    console.log("Altitude");
    console.log("  feet   : ", this.feet);
    console.log("  meters : ", this.meters);
    console.log("--------------------------------------");
  });

});