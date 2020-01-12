#!/usr/bin/python

# Written by Alexander Lopez, with mentoring of Paul Berglund.
# Monitors and regulates temperature of a beehive for optimum
# conditions.
# Feb 2017

# Version 1.0


import Adafruit_DHT
import time
import RPi.GPIO as GPIO

# Temperature setpoints in *F
lowSetpoint = 70
hiSetpoint = 75

##### Functions #####

# Read the sensor
def readSensor():
	sensor = Adafruit_DHT.AM2302
	pin = 4
	humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)
	temperature = temperature * 9/5 + 32
	print(temperature)
	temperatureInterpreter(temperature)


def temperatureInterpreter(temperature):
	if temperature < lowSetpoint :
		#Do Nothing
		print("We're OK")
		(exit)
	elif temperature >= hiSetpoint :
		# Send Email
		fanControl('on')
		print("We're probably on fire")
	else: 
		fanControl('on') 
		print("Cooling Intialized")


def fanControl(state):
	if state == 'on':
		GPIO.output(16, GPIO.HIGH)
		print("Turning on fan")
	else :
		GPIO.output(16, GPIO.LOW)
		print("Fan is off")

GPIO.setmode(GPIO.BCM)
GPIO.setup(4, GPIO.IN)
GPIO.setup(16, GPIO.OUT)
GPIO.setup(20, GPIO.OUT)
GPIO.output(16, GPIO.LOW)
GPIO.output(20, GPIO.LOW)

readSensor()
time.sleep(5)
GPIO.cleanup()
print("End of Cycle")


