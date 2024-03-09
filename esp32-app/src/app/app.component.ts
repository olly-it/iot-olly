import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirebaseService } from './firebase.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'esp32-app';
  morseValue : string | undefined;
  morseId : string | undefined;
  morseText : string | undefined;
  saved : string = "";

  constructor(private firebaseservice: FirebaseService) {}

  ngOnInit(): void {
    this.firebaseservice.getMorse().then((x) => {
      // morse e.g.: {"id":"IaiWtskmDS7oOtaQVtwV","data":{"value":"-.-. .. .- ---"}}
      this.morseValue = x?.data.value;
      this.morseId = x?.id;
      this.setTextFromMorse(x?.data.value);
      // only for debug
      console.log('morse:', JSON.stringify(x));
    });
  }
  
  save(value:string):void {
    console.log("save: ",value);
    this.morseValue = value;
    this.firebaseservice.updateMorse(this.morseId,this.morseValue);
    this.setTextFromMorse(this.morseValue);
    this.saved="saved!";
    setTimeout(()=> {this.saved="";},1000);
  }


  // convertion method from string to morse
  alphabet = {
    'a': '.-',    'b': '-...',  'c': '-.-.', 'd': '-..',
    'e': '.',     'f': '..-.',  'g': '--.',  'h': '....',
    'i': '..',    'j': '.---',  'k': '-.-',  'l': '.-..',
    'm': '--',    'n': '-.',    'o': '---',  'p': '.--.',
    'q': '--.-',  'r': '.-.',   's': '...',  't': '-',
    'u': '..-',   'v': '...-',  'w': '.--',  'x': '-..-',
    'y': '-.--',  'z': '--..',  ' ': '/',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', 
    '9': '----.', '0': '-----'
  };
  
  setMorseFromText(str:string):void {
    let output = str.split('').map(e=> (this.alphabet as any)[e.toLocaleLowerCase()]||'').join(' ').replace(/ +/g, ' ');
    console.log(str+" -> "+output);
    this.morseValue = output;
  }

  morse = { 
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '/': ' ',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0'
  };

  setTextFromMorse(str:string):void {
    let output = str
    .split('/')
    .map(
      a => a
        .split(' ')
        .map(
          b => (this.morse as any)[b]
        ).join('')
    ).join(' ');
    this.morseText = output;
  }
}
