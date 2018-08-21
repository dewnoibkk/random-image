import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImageComponent } from './image/image.component';
import { FormsModule } from '@angular/forms';

@NgModule({
            declarations: [
              AppComponent,
              NavbarComponent,
              ImageComponent,
            ],
            imports: [
              BrowserModule,
              FormsModule,
            ],
            providers: [],
            bootstrap: [ AppComponent ],
          })
export class AppModule {
}
