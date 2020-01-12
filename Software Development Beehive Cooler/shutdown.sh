#!/bin/bash

# Remember to make executable
# monitor GPIO pin 21 (bcm mode) for shutdown signal

# export pin 21 and set to input with pull-up
echo "21" > /sys/class/gpio/export
echo "in" > /sys/class/gpio/gpio21/direction
echo "high" > /sys/class/gpio/gpio21/direction

# Wait for pin 21 to go low
while [ true ]
do 
	if [ "$(cat /sys/class/gpio/gpio21/value)" == '0' ]
		then 
			echo "Shutting Down Pi"
			halt &
			exit 0
	fi
	sleep 5
done