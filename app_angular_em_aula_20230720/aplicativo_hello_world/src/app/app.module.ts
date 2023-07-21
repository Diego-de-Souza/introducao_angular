import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuadroComponent } from './components/quadro/quadro.component';
import { QuadroImagemComponent } from './components/quadro-imagem/quadro-imagem.component';

@NgModule({
  declarations: [
    AppComponent,
    QuadroComponent,
    QuadroImagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
