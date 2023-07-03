#include <Arduino_HTS221.h>
#include <Arduino_LPS22HB.h>

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
}

void loop() {
   // read all the sensor values
  float temperature = HTS.readTemperature();
  float humidity    = HTS.readHumidity();
  // read the sensor value
  float pressure = BARO.readPressure();

  // print each of the sensor values
  Serial.print("Temperature = ");
  Serial.print(temperature - 5);
  Serial.println(" °C");

  Serial.print("Humidity    = ");
  Serial.print(humidity);
  Serial.println(" %");

  // print the sensor value
  Serial.print("Pressure = ");
  Serial.print(pressure);
  Serial.println(" kPa");

  // print an empty line
  Serial.println();

  // wait 1 second to print again
  delay(1000);
}
