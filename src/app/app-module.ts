import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { Ciclo } from './ciclo/ciclo';
import { UsuarioCardComponent } from './usuario-card-component/usuario-card-component';
import { DirectivaEjemplo } from './directiva-ejemplo';
import { ProductosComponent } from './productos-component/productos-component';
import { TareaForm } from './tarea/tarea-form/tarea-form';
import { TareaList } from './tarea/tarea-list/tarea-list';
import { HomeComponent } from './prueba/home/home.component';
import { AboutComponent } from './prueba/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    Ciclo,
    UsuarioCardComponent,
    DirectivaEjemplo,
    ProductosComponent,
    TareaForm,
    TareaList,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
