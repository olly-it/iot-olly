// ciao rebe
const char data[] = "-.-. .. .- --- / .-. . -... .";
// message speed can be controller by "SLEEP_MULTIUPLIER"
const float SLEEP_MULTIPLIER = 0.8;

// init
void setup() {
 pinMode(2, OUTPUT);
}

void hl(int high, int low) {
  if (high>0) {
    digitalWrite(2, HIGH);
    delay(high);
  }
  if (low>0) {
    digitalWrite(2, LOW);
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
  start();
  hl(0,4000*SLEEP_MULTIPLIER);
  for(int i =0; i < strlen(data); i++ ) {
    char c = data[i];
    if (c=='.') hl(100*SLEEP_MULTIPLIER,900*SLEEP_MULTIPLIER);
    if (c=='-') hl(600*SLEEP_MULTIPLIER,400*SLEEP_MULTIPLIER);
    if (c==' ') hl(0,2000*SLEEP_MULTIPLIER);
    if (c=='/') slash();
  }
  hl(0,4000*SLEEP_MULTIPLIER);
}
