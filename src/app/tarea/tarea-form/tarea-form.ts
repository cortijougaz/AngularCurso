import {Component} from '@angular/core';
import {Tarea} from '../../servicio/tarea';

@Component({
  selector: 'app-tarea-form',
  standalone: false,
  templateUrl: './tarea-form.html',
  styleUrl: './tarea-form.css'
})
export class TareaForm {
  nuevaTarea: string = '';

  constructor(private tareaService:Tarea) {}
    agregar(){
    if(this.nuevaTarea.trim() !== ''){
      this.tareaService.agregarTarea(this.nuevaTarea);
      this.nuevaTarea = '';
    }
  }
}
