import sys
import os
import time
import serial
import matplotlib.pyplot as plt
import subprocess

print('Portas COM disponível:')
subprocess.run(["python", "-m", "serial.tools.list_ports"])
arduino = serial.Serial()
arduino.baudrate = 9600
arduino.port = 'COM5'   # SUBSTITUIR PELA PORTA ENCONTRADA ANTERIORMENTE
arduino.timeout = 5

print("Connexão à porta " + arduino.port + " com sucesso\n")

#########################################################################

iterations = int(input('Número de séries de aquisição: '))
#iterations = 200

arduino.open()
#arduino.write(bytes([1]))

data = []
data.append("Temperatura(°C) Humidade(%) Pressão(kPa) Proximidade Aceleração(G)")
count = 0

print('A adquirir os dados...')

task = True

time_start = time.time()

while task:

    line = str(arduino.readline())
    reading = line[2:-5]

    data.append(reading)
    count +=1
    if (count == iterations):
        print("\nDados obtidos com sucesso.".format(iterations))
        task = False

time_end = time.time()
arduino.close()

#########################################################################

temp_data = []
hr_data = []
p_data  = []
prox_data = []
acc_data = []

data = data[1:]

for line in data:
    temp, hr, p, prox, acc = line.split()
    temp_data.append(float(temp))
    hr_data.append(float(hr))
    p_data.append(float(p))
    prox_data.append(float(prox))
    #acc_data.append(float(acc))

print("Dados lidos com sucesso!")

# Grafico da temperatura
plt.title('Temperatura (°C)')
plt.xlabel("Tempo")
plt.ylabel("Temperatura °C")
plt.plot(temp_data)
plt.show()

# Grafico da humidade
plt.title('Humidade Relativa (%)')
plt.xlabel("Tempo")
plt.ylabel("HR (%)")
plt.plot(hr_data)
plt.show()

# Grafico da Pressão Atmosferica
plt.title('Pressão Atmosférica - (hPa) ')
plt.xlabel("Tempo")
plt.ylabel("Pressão Atmosférica - (hPa) ")
plt.plot(p_data)
plt.show()

# Grafico de Proximidade
plt.title('Proximidade (255 -> Longe, 0 -> Perto)')
plt.xlabel("Tempo")
plt.ylabel("Proximidade")
plt.plot(prox_data)
plt.show()

# Grafico de Aceleração
# TODO