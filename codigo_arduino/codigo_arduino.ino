#include <Arduino_HTS221.h>
#include <Arduino_LPS22HB.h>
#include <Arduino_APDS9960.h>
#include <Arduino_LSM9DS1.h>


int proximity;
float x, y, z;
unsigned long previousMillis = 0;
const long intervalSlow = 1000;   // Slow blink interval in milliseconds
const long intervalMedium = 500;  // Medium blink interval in milliseconds
const long intervalFast = 200;    // Fast blink interval in milliseconds

int blinkSpeed = intervalSlow; // Initial blink speed

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

  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);

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
  unsigned long currentMillis = millis();

   // read all the sensor values
  float temperature = HTS.readTemperature(); //Arduino_HTS221 - Temperatura
  float humidity    = HTS.readHumidity();        //Arduino_HTS221 - Humidade
  float pressure = BARO.readPressure();          //Arduino_LPS22HB - Pressão Atmosferica
  if (APDS.proximityAvailable()) {
    proximity = APDS.readProximity();            //Arduino_APDS9960 - Proximidade

    if (proximity >= 255) {
      digitalWrite(LED_BUILTIN, LOW); // Turn off LED when proximity is not detected
    } else {
      if (proximity < 50) {
        blinkSpeed = intervalFast;
      } else if (proximity < 100) {
        blinkSpeed = intervalMedium;
      } else if (proximity < 200) {
        blinkSpeed = intervalSlow;
      }

      if (currentMillis - previousMillis >= blinkSpeed) {
        previousMillis = currentMillis;
        digitalWrite(LED_BUILTIN, !digitalRead(LED_BUILTIN)); // Toggle LED state
      }
    }
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
  // IA PRECISAR DE THREADS
 /* if(proximity < 200){
    digitalWrite(LED_BUILTIN, HIGH);  // turn the LED on (HIGH is the voltage level)
    delay(1000);                      // wait for a second
    digitalWrite(LED_BUILTIN, LOW);   // turn the LED off by making the voltage LOW
    delay(1000);                      // wait for a second
  }else if(proximity < 100){
    digitalWrite(LED_BUILTIN, HIGH);  // turn the LED on (HIGH is the voltage level)
    delay(500);                      // wait for a second
    digitalWrite(LED_BUILTIN, LOW);   // turn the LED off by making the voltage LOW
    delay(500);                      // wait for a second    
  }else if(proximity < 50){
    digitalWrite(LED_BUILTIN, HIGH);  // turn the LED on (HIGH is the voltage level)
    delay(100);                      // wait for a second
    digitalWrite(LED_BUILTIN, LOW);   // turn the LED off by making the voltage LOW
    delay(100);                      // wait for a second     
  }*/
  Serial.print(proximity);  //0   => close; 255 => far; -1  => error
  if(proximity < 200){
    digitalWrite(LED_BUILTIN, HIGH);  // turn the LED on (HIGH is the voltage level)
  }else{
    digitalWrite(LED_BUILTIN, LOW);  // turn the LED on (HIGH is the voltage level)
  }
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
