var rpio = require('rpio');
var sleep = require('sleep');

var date = new Date();
var current_hour = date.getHours();

var i2cdata = 3;
var i2cclock = 5;
var dhtdata = 11;
var photocelldata = 13;
var vanedata = 15;
var i = 0;
var y = 0;

/*init done*/

/*init GPIO*/
rpio.init({gpiomem: true});    /* Use /dev/mem for i²c/PWM/SPI */
rpio.init({mapping: 'physical'});   /* Use the GPIOxx numbering */
rpio.on('warn', function() {});
rpio.close(i2cdata, rpio.PIN_RESET);
rpio.close(i2cclock, rpio.PIN_RESET);
rpio.close(dhtdata, rpio.PIN_RESET);
rpio.close(photocelldata, rpio.PIN_RESET);
rpio.close(vanedata, rpio.PIN_RESET);
/*
 * Set the initial state to low.  The state is set prior to the pin
 * being actived, so is safe for devices which require a stable setup.
 */

rpio.open(i2cdata, rpio.INPUT);
rpio.open(i2cclock, rpio.OUTPUT, rpio.LOW);
rpio.open(dhtdata, rpio.INPUT);
rpio.open(photocelldata, rpio.INPUT);
rpio.open(vanedata, rpio.INPUT);
/*
 * The sleep functions block, but rarely in these simple programs does
 * one care about that.  Use a setInterval()/setTimeout() loop instead
 * if it matters.
 */
/*for (var i = 0; i < steps; i++) {
        // On for 1 second 
        rpio.write(pin, rpio.HIGH);
        rpio.write(pin2, rpio.HIGH);
        rpio.usleep(3); 
        // Off for half a second (500ms) 
        rpio.write(pin, rpio.LOW);
        rpio.write(pin2, rpio.LOW);
}
*/
//if(current_hour == 3 || current_hour == 6 || current_hour == 9 || current_hour == 12 || current_hour == 15 || current_hour == 18 || current_hour == 21 || current_hour == 24){

while(1){

console.log('i2cdata is currently ' + (rpio.read(i2cdata)));
console.log('dhtdata is currently ' + (rpio.read(dhtdata)));
console.log('photocelldata is currently ' + (rpio.read(photocelldata)));
console.log('vanedata is currently ' + (rpio.read(vanedata)));
}