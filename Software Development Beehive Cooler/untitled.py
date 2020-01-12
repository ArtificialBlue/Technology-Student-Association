lowSetpoint = 60
hiSetpoint = 90
#Temperature reader function
def readsensor():
	

#Decision maker function
def temperatureinterpeter():
	if temperature > lowsetpoint : 
		fancontrol()
	else:



#Fan control function
def fancontrol():

#Email alert in case of extreme temperature