import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { JediListSevice } from './app.jedilist.service';
import { SithListSevice } from './app.sithlist.service';
import { LightSaberComponent } from './light-saber/light-saber.component';

@NgModule({
  declarations: [
    AppComponent,
    LightSaberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [JediListSevice, SithListSevice],
  bootstrap: [AppComponent]
})
export class AppModule { }
