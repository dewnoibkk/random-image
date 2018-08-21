import { Component } from '@angular/core';

@Component({
             selector: 'app-root',
             templateUrl: './app.component.html',
             styleUrls: [ './app.component.css' ],
           })
export class AppComponent {
  isRandom: boolean;
  delay: number;

  constructor() {
    this.delay = 500;
  }

  onRandom() {
    this.isRandom = !this.isRandom;
  }

  onRandomChanged(random: boolean) {
    this.isRandom = random;
  }
}
