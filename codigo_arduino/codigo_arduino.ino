#include <Arduino_HTS221.h>
#include <Arduino_LPS22HB.h>
#include <Arduino_APDS9960.h>
#include <Arduino_LSM9DS1.h>


int proximity;
float x, y, z;

void setup() {
  Serial.begin(9600);
  while (!Serial);

  if (!HTS.begin()) {
    Serial.println("Failed to initialize humidity temperature sensor!");
    while (1);
  }
  if (!BARO.begin()) {
    Serial.println("Failed to initialize pressure sensor!");
    while (1);
  }
  if (!APDS.begin()) {
    Serial.println("Error initializing APDS-9960 sensor!");
  }
  if (!IMU.begin()) {
    Serial.println("Failed to initialize IMU!");
    while (1);
  }

  Serial.print("Temperatura(°C)");
  Serial.print(" ");
  Serial.print("Humidade(%)");
  Serial.print(" ");
  Serial.print("Pressão(kPa)");
  Serial.print(" ");
  Serial.print("Proximidade");
  Serial.print(" ");
  Serial.print("Aceleração(G)");
  Serial.print(" ");
  Serial.print("Temperatura Efetiva");
  Serial.print(" ");
  Serial.print("Temperatura na Pele");
  Serial.println(""); 
}

void loop() {
   // read all the sensor values
  float temperature = HTS.readTemperature(); //Arduino_HTS221 - Temperatura
  float humidity    = HTS.readHumidity();        //Arduino_HTS221 - Humidade
  float pressure = BARO.readPressure();          //Arduino_LPS22HB - Pressão Atmosferica
  if (APDS.proximityAvailable()) {
    proximity = APDS.readProximity();            //Arduino_APDS9960 - Proximidade
  }
  if (IMU.accelerationAvailable()) {
    IMU.readAcceleration(x, y, z);               //Arduino_LSM9DS1 - Aceleração
  }

  // print each of the sensor values
  Serial.print(temperature);
  Serial.print(" ");  
  Serial.print(humidity);
  Serial.print(" ");  
  Serial.print(pressure);
  Serial.print(" ");  
  Serial.print(proximity);  //0   => close; 255 => far; -1  => error
  Serial.print(" ");
  Serial.print(x);
  Serial.print(",");
  Serial.print(y);
  Serial.print(",");
  Serial.print(z);
  Serial.print(" ");
  Serial.print(temperature - 0.4 * (temperature - 10) * (1 - humidity/100));
  Serial.print(" ");
  Serial.print(temperature + (1/7 * 1/2 * 40) + (40 - 15 + (120 * 1) * (1 - 0.7)) / (2 + 9 * pow((0.1 + 6.9), 1/2)));
  // print an empty line
  Serial.println();
}
