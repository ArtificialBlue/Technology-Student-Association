#!/usr/bin/python

# Written by Alexander Lopez, with mentoring of Paul Berglund.
# Monitors and regulates temperature of a beehive for optimum
# conditions.
# Feb 2017

# Version 2.0


import Adafruit_DHT
import time
import RPi.GPIO as GPIO
import smtplib
from email.MIMEMultipart import MIMEMultipart
from email.MIMEText import MIMEText

GPIO.setmode(GPIO.BCM)
GPIO.setup(4, GPIO.IN)
GPIO.setup(16, GPIO.OUT)
GPIO.setup(20, GPIO.OUT)
GPIO.output(16, GPIO.LOW)
GPIO.output(20, GPIO.LOW)



# Temperature setpoints in *F
lowSetpoint = 80
hiSetpoint = 110

##### Functions #####

# Read the sensor
def readSensor():
	sensor = Adafruit_DHT.AM2302
	pin = 4
	humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)
	if temperature is None: 
		print("Unable to read sensor, please check wiring")
		GPIO.cleanup()
		exit()
	temperature = temperature * 9/5 + 32
	print(temperature)
	temperatureInterpreter(temperature)


def temperatureInterpreter(temperature):
	if temperature < lowSetpoint :
		print("We're OK")
                fanControl('off')
                time.sleep(30)
                readSensor()
	elif temperature >= hiSetpoint :
		sendEmail("High temperatures detected, please check for abnormalities")
		fanControl('on')
		print("We're probably on fire")
		
	else: 
		fanControl('on') 
		print("Cooling Intialized")


def fanControl(state):
	if state == 'on':
		GPIO.output(16, GPIO.HIGH)
		print("Turning on fan")
		time.sleep(30)
		readSensor()
	else :
		GPIO.output(16, GPIO.LOW)
		print("Fan is off")
		time.sleep(30)
		readSensor()

def sendEmail(Message):
	fromaddr = "beehivecooler@gmail.com"
	toaddr = "oceantraveler201@gmail.com"
	msg = MIMEMultipart()
	msg['From'] = fromaddr
	msg['To'] = toaddr
	msg['Subject'] = "Temperature Anomaly"
 
	body = Message
	msg.attach(MIMEText(body, 'plain'))
 
	server = smtplib.SMTP('smtp.gmail.com', 587)
	server.starttls()
	server.login(fromaddr, "CoolGlasses202")
	text = msg.as_string()
	server.sendmail(fromaddr, toaddr, text)
	server.quit() 

# Main Program
# =============

readSensor()
GPIO.cleanup()