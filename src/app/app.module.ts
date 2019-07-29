import { ClimaTempoService } from './clima-tempo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { GraphicsComponent } from './graphics/graphics.component';
@NgModule({
  declarations: [
    AppComponent,
    GraphicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [ClimaTempoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
