import {Component} from '@angular/core';
import {Usuario} from './servicio/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  nombre = '';
  usuario = '';

  constructor(private usuarioService: Usuario) {}
    guardar(){
      this.usuarioService.setUsuario(this.nombre);
      this.usuario = this.usuarioService.getUsuario();
    }

}
