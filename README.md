# TODO  
- [x] Gerar dados de todos os sensores do Arduino. (**C**)
- [x] Programa para calcular médias, desvios padrão, max e min. (**Python**)
    - [x] Cada série é visualizada através do matplotlib.
    - [x] Dados gravados em ficheiro JSON que contem os campos para cada sensor e as grandezas calculadas.
    - [x] Opção de enviar o ficheiro via email.
- [ ] Localmente apresentar numa página web os dados dos dois nanos -> crição de gráficos em **Javascript**. (usar github pages maybe)  

## Sensores
[Arduino Nano 33 BLE Sense](https://docs.arduino.cc/hardware/nano-33-ble-sense)  

- [x] IMU for Motion Detection. (?) [[Library](https://www.arduino.cc/reference/en/libraries/arduino_lsm9ds1/) | [Documentation](https://docs.arduino.cc/tutorials/nano-33-ble-sense/imu-accelerometer)]
    - [x] Accelerometer.
- [x] Proximity and Gesture Detection. [[Library](https://www.arduino.cc/reference/en/libraries/arduino_apds9960/) | [Documentation](https://docs.arduino.cc/tutorials/nano-33-ble-sense/gesture-sensor)]
    - [x] Proximity.
- [x] Barometric Pressure Sensor. [[Library](https://www.arduino.cc/reference/en/libraries/arduino_lps22hb/) | [Documentation](https://docs.arduino.cc/tutorials/nano-33-ble-sense/barometric-sensor)]
    - [x] Pressure.
- [x] Temperature and Humidity Sensor. [[Library](https://www.arduino.cc/reference/en/libraries/arduino_hts221/) | [Documentation](https://docs.arduino.cc/tutorials/nano-33-ble-sense/humidity-and-temperature-sensor)]
    - [x] Humidity.
    - [X] Temperature.

