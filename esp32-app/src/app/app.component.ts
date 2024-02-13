import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirebaseService } from './firebase.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'esp32-app';

  constructor(private firebaseservice: FirebaseService) {}

  ngOnInit(): void {
    // only for debug
    this.firebaseservice.getMorse().then((x) => {
      console.log('morse:', JSON.stringify(x));
    });
  }
}
