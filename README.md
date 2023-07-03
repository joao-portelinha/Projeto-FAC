# TODO  
- [ ] Gerar dados de todos os sensores do Arduino. (**C**)
- [ ] Programa para calcular médias, desvios padrão, max e min. (**Python**)
    - [ ] Cada série é visualizada através do matplotlib.
    - [ ] Dados gravados em ficheiro JSON que contem os campos para cada sensor e as grandezas calculadas.
    - [ ] Opção de enviar o ficheiro via email.
- [ ] Localmente apresentar numa página web os dados dos dois nanos -> crição de gráficos em **Javascript**. (usar github pages maybe)  

## Sensores
[Arduino Nano 33 BLE Sense](https://docs.arduino.cc/hardware/nano-33-ble-sense)  

- [ ] IMU for Motion Detection. (?) [[Library](https://www.arduino.cc/reference/en/libraries/arduino_lsm9ds1/) | [Documentation](https://docs.arduino.cc/tutorials/nano-33-ble-sense/imu-accelerometer)]
    - [ ] Accelerometer range is set at ±4 g with a resolution of 0.122 mg.
    - [ ] Gyroscope range is set at ±2000 dps with a resolution of 70 mdps.
    - [ ] Magnetometer range is set at ±400 uT with a resolution of 0.014 uT.
    - [ ] Accelerometer and gyrospcope output data rate is fixed at 119 Hz.
    - [ ] Magnetometer output data rate is fixed at 20 Hz.
- [ ] Proximity and Gesture Detection. [[Library](https://www.arduino.cc/reference/en/libraries/arduino_apds9960/) | [Documentation](https://docs.arduino.cc/tutorials/nano-33-ble-sense/gesture-sensor)]
    - [ ] Gestures.
    - [ ] Color.
    - [x] Proximity.
- [ ] Barometric Pressure Sensor. [[Library](https://www.arduino.cc/reference/en/libraries/arduino_lps22hb/) | [Documentation](https://docs.arduino.cc/tutorials/nano-33-ble-sense/barometric-sensor)]
    - [x] Pressure.
- [ ] Temperature and Humidity Sensor. [[Library](https://www.arduino.cc/reference/en/libraries/arduino_hts221/) | [Documentation](https://docs.arduino.cc/tutorials/nano-33-ble-sense/humidity-and-temperature-sensor)]
    - [x] Humidity.
    - [X] Temperature.

