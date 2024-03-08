#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClientSecure.h>
#include <HTTPClient.h>

// ESP32 has ON=high, OFF=low, OUTPUT=2
// ESP32-C3 has ON=low, OFF=HIGH, OUTPUT=8
#define LED_ON LOW
#define LED_OFF HIGH
#define LED_OUTPUT 8

String data = "-.-. .. .- --- / .-. . -... ."; // CIAO REBE
bool error = false;
// message speed can be controller by "SLEEP_MULTIUPLIER"
const float SLEEP_MULTIPLIER = 0.8;

const char* ssid = "olly-a54-5g";
const char* password = "1234567890";

//Your Domain name with URL path or IP address with path
String url = "https://iot-olly.vercel.app";

void setup() {
  pinMode(LED_OUTPUT, OUTPUT);

  Serial.begin(115200);
  Serial.println();
  // Initialize Wi-Fi
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi ..");
  int t=0;
  while (WiFi.status() != WL_CONNECTED) {
    t++;
    Serial.print('.');
    delay(1000);
    if (t>10) {
      error = true;
      break;
    }
  }
  if (error) {
    Serial.println("NOT connected - ERROR");
  } else {
    Serial.print("connected - ");
    Serial.println(WiFi.localIP());

    getMessage();
  }
}

void getMessage() {
 WiFiClientSecure *client = new WiFiClientSecure;
  if (client) {
    // set secure client without certificate
    client->setInsecure();
    //create an HTTPClient instance
    HTTPClient https;

    //Initializing an HTTPS communication using the secure client
    Serial.print("[HTTPS] begin...\n");
    if (https.begin(*client, url)) {  // HTTPS
      Serial.print("[HTTPS] GET...\n");
      // start connection and send HTTP header
      int httpCode = https.GET();
      // httpCode will be negative on error
      if (httpCode > 0) {
        // HTTP header has been send and Server response header has been handled
        Serial.printf("[HTTPS] GET... code: %d\n", httpCode);
        // file found at server
        if (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_MOVED_PERMANENTLY) {
          // print server response payload
          String payload = https.getString();
          Serial.println(payload);
          data = payload;
          error = false;
        } else {
          Serial.printf("[HTTPS] GET... not 200: %s\n", https.errorToString(httpCode).c_str());
          error = true;
        }
      } else {
        Serial.printf("[HTTPS] GET... failed, error: %s\n", https.errorToString(httpCode).c_str());
        error = true;
      }
      https.end();
    }
  } else {
    Serial.printf("[HTTPS] Unable to connect\n");
  }
}

void hl(int high, int low) {
  if (high>0) {
    digitalWrite(LED_OUTPUT, LED_ON);
    delay(high);
  }
  if (low>0) {
    digitalWrite(LED_OUTPUT, LED_OFF);
    delay(low);
  }
}

void start() {
  for (int i=0;i<20;i++) {
    hl(50,50);
  }
}

void slash() {
  for (int i=0;i<6;i++) {
    hl(50,50);
  }
}


// main loop
void loop() {
  if (error) {
    data = "."; // infinite . . . . . . .
  } else {
    start();

    hl(0,4000*SLEEP_MULTIPLIER);
  }

  for(int i =0; i < data.length(); i++ ) {
    char c = data.charAt(i);
    if (c=='.') hl(100*SLEEP_MULTIPLIER,900*SLEEP_MULTIPLIER);
    if (c=='-') hl(600*SLEEP_MULTIPLIER,400*SLEEP_MULTIPLIER);
    if (c==' ') hl(0,2000*SLEEP_MULTIPLIER);
    if (c=='/') slash();
  }
  
  if (!error) {
    hl(0,4000*SLEEP_MULTIPLIER);
  }
}
