import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassificationButtonComponent } from './classification-button/classification-button.component';
import { PlayersService } from './players.service';


@NgModule({
  declarations: [
    AppComponent,
    ClassificationButtonComponent,

  ],
  imports: [
  BrowserModule,
    AppRoutingModule
  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
