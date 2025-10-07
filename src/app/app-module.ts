import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import {FormsModule} from '@angular/forms';
import { Ciclo } from './ciclo/ciclo';
import { UsuarioCardComponent } from './usuario-card-component/usuario-card-component';
import { DirectivaEjemplo } from './directiva-ejemplo';
import { ProductosComponent } from './productos-component/productos-component';
import { TareaForm } from './tarea/tarea-form/tarea-form';
import { TareaList } from './tarea/tarea-list/tarea-list';

@NgModule({
  declarations: [
    App,
    Ciclo,
    UsuarioCardComponent,
    DirectivaEjemplo,
    ProductosComponent,
    TareaForm,
    TareaList
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
