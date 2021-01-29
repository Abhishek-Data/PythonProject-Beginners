# This is a Alarm Clock Python script.
# If User input time in format i.e. 102030am, then alarm will be rang at given time.

from datetime import datetime
from playsound import playsound


def op(alarm_time):
    alarm_hour = alarm_time[0:2]
    alarm_minute = alarm_time[2:4]
    alarm_second = alarm_time[4:6]
    alarm_period = alarm_time[6:8].upper()
    print("Setting up alarm..")

    while True:
        now = datetime.now()
        current_hour = now.strftime("%I")
        current_minute = now.strftime("%M")
        current_seconds = now.strftime("%S")
        current_period = now.strftime("%p")

        if alarm_period == current_period:
            if alarm_hour == current_hour:
                if alarm_minute == current_minute:
                    if alarm_second == current_seconds:
                        print("Wake up!")
                        playsound('C:/Users/Abhishek/Downloads/alarm_tune.mp3')
                        break


# Main
if __name__ == '__main__':
    alarm_time = input("Enter the time of alarm to be set:HH:MM:SS\n")
    while len(alarm_time) != 8:
        alarm_time = input("Invalid time format! Renter time as HH:MM:SS i.e. 102030am\n")

    op(alarm_time)
