#!/bin/bash
sudo apt-get install python-smbus
sudo apt-get install i2c-tools
sudo cat "i2c-bcm2708\ni2c-dev" >> /etc/modules
cd /etc/modprobe.d/
sudo sed -e 's/\#blacklist\ spi\-bcm2708/blacklist\ spi\-bcm2708/g' raspi-blacklist.conf > raspi-blacklist.conf.tmp && mv raspi-blacklist.conf.tmp raspi-blacklist.conf
sudo sed -e 's/\#blacklist\ i2c\-bcm2708/blacklist\ i2c\-bcm2708/g' raspi-blacklist.conf > raspi-blacklist.conf.tmp && mv raspi-blacklist.conf.tmp raspi-blacklist.conf
sudo su -
echo -n 1 > /sys/module/i2c_bcm2708/parameters/combined
exit