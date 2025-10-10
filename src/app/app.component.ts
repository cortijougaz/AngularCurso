import {Component} from '@angular/core';
import {Usuario} from './servicio/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombre = '';
  usuario = '';

  constructor(private usuarioService: Usuario) {}
    guardar(){
      this.usuarioService.setUsuario(this.nombre);
      this.usuario = this.usuarioService.getUsuario();
    }

}
