#code on ESP32 board (made with ArduinoIDE)

## my ESP-32
my board is:  
ESP32 WROOM-32 Development Board TYPE-C CH340C/ CP2102 WiFi+Bluetooth Ultra-Low Power Consumption Dual Core Wireless Module  

- Chip is ESP32-D0WD-V3 (revision v3.1)  
- Features: WiFi, BT, Dual Core, 240MHz, VRef calibration in efuse, Coding Scheme None  
- Crystal is 40MHz  

## install & config arduino
- Install Arduino IDE (v.2.3.0)  
- add libraries for esp32: Tools -> Boards Manager: add esp32 (by expressif)
- try a simple code like:
    void setup() {
     // put your setup code here, to run once:
     pinMode(2, OUTPUT);
    }
    void loop() {
     // put your main code here, to run repeatedly:
     digitalWrite(2, HIGH);
     delay(500);
     digitalWrite(2, LOW);
     delay(500);
    }

- connect the esp32 board to pc's usb-c. 
NOTE: With direct usbc-usbc cable it doesn't turn-on. you've to use usba -> usbc cable to let it turns-on

- select the correct board and port on arduino ide:
- board (Tools -> Board -> esp32 -> ESP32 Dev Module)
- port (Tools -> Port -> /dev/cu.usbserial-14130 or anyway that one with “cu.usbserial”)

Probabily when you try to upload the sketch it goes to error:
    "A fatal error occurred: Unable to verify flash chip connection (Invalid head of packet (0xE0): Possible serial noise or corruption.)"

To solve it, just reduce the upload speed frequency like:
Tools -> Upload Speed: invece che 921600 mettere 115200
