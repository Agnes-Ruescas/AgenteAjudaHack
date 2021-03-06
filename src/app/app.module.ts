import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http' 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LocalComponent } from './local/local.component';
import { FamiliaComponent } from './familia/familia.component';
import { PostFamiliaComponent } from './post-familia/post-familia.component';
import { FormsModule } from '@angular/forms';
import { JogoComponent } from './jogo/jogo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocalComponent,
    FamiliaComponent,
    PostFamiliaComponent,
    JogoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
