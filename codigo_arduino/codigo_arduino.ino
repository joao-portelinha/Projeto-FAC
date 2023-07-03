#include <Arduino_HTS221.h>
#include <Arduino_LPS22HB.h>
#include <Arduino_APDS9960.h>

int proximity;

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
}

void loop() {
   // read all the sensor values
  float temperature = HTS.readTemperature() - 5;
  float humidity    = HTS.readHumidity();
  float pressure = BARO.readPressure();
  if (APDS.proximityAvailable()) {
    proximity = APDS.readProximity();
  }


  // print each of the sensor values
  Serial.print("Temperatura = ");
  Serial.print(temperature);
  Serial.println(" °C");

  Serial.print("Humidade    = ");
  Serial.print(humidity);
  Serial.println(" %");

  Serial.print("Pressão = ");
  Serial.print(pressure);
  Serial.println(" kPa");

  Serial.print("Proximidade = ");
  Serial.println(proximity);  //0   => close; 255 => far; -1  => error


  // print an empty line
  Serial.println();

  // wait 1 second to print again
  delay(100);
}
