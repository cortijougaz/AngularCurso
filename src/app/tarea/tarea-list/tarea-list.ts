import {Component} from '@angular/core';
import {Tarea} from '../../servicio/tarea';

@Component({
  selector: 'app-tarea-list',
  standalone: false,
  templateUrl: './tarea-list.html',
  styleUrl: './tarea-list.css'
})
export class TareaList {
  constructor(private tareaService: Tarea) {
  }

  get tareas() {
    return this.tareaService.listarTareas();
  }
}
