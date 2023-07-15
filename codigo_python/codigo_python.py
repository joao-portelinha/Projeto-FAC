import sys
import os
import time
import serial
import matplotlib.pyplot as plt
import matplotlib.gridspec as gridspec
import numpy as np
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
x_acc = []
y_acc = []
z_acc = []

data = data[1:] # Skip primeira linha

for line in data:
    temp, hr, p, prox, acc = line.split()
    temp_data.append(float(temp))
    hr_data.append(float(hr))
    p_data.append(float(p))
    prox_data.append(float(prox))
    acc_data.append(acc)
    acc_string = acc.split(",")
    x_acc.append(float(acc_string[0]))
    y_acc.append(float(acc_string[1]))
    z_acc.append(float(acc_string[2]))

print("Dados lidos com sucesso!")

# Initialise the subplot function using number of rows and columns
figure, axis = plt.subplots(2, 2)
  
# Grafico da temperatura
axis[0, 0].set_title("Temperatura (°C)")
axis[0, 0].set_xlabel("Tempo")
axis[0, 0].set_ylabel("Temperatura (°C)")
axis[0, 0].plot(temp_data)

# Grafico da humidade
axis[0, 1].set_title("Humidade Relativa (%)")
axis[0, 1].set_xlabel("Tempo")
axis[0, 1].set_ylabel("HR (%)")
axis[0, 1].plot(hr_data)

# Grafico da Pressão Atmosferica
axis[1, 0].set_title("Pressão Atmosférica - (hPa)")
axis[1, 0].set_xlabel("Tempo")
axis[1, 0].set_ylabel("Pressão Atmosférica - (hPa)")
axis[1, 0].plot(p_data)

# Grafico de Proximidade
axis[1, 1].set_title("Proximidade (255 -> Longe, 0 -> Perto)")
axis[1, 1].set_xlabel("Tempo")
axis[1, 1].set_ylabel("Proximidade")
axis[1, 1].plot(prox_data)

maximize = plt.get_current_fig_manager()
maximize.window.state('zoomed')
plt.show()

# Grafico de Aceleração
plt.figure()
plt.subplot(3, 1, 1)
plt.plot(x_acc)
plt.title('Aceleração (G)')
plt.ylabel('Aceleracao em X')

plt.subplot(3, 1, 2)
plt.plot(y_acc)
plt.xlabel('Tempo (s)')
plt.ylabel('Acelearacao em Y')

plt.subplot(3, 1, 3)
plt.plot(z_acc)
plt.xlabel('Tempo (s)')
plt.ylabel('Acelearacao em Z')