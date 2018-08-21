import { Component } from '@angular/core';

@Component({
             selector: 'app-root',
             templateUrl: './app.component.html',
             styleUrls: [ './app.component.css' ],
           })
export class AppComponent {
  isRandom: boolean;

  onRandom() {
    this.isRandom = !this.isRandom;
  }
}
