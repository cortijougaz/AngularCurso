import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Tarea {
  private tareas: { id: number, titulo: string }[] = [];
  private contador = 1;

  constructor() {
  }

  agregarTarea(titulo: string) {
    this.tareas.push({id: this.contador++, titulo});
  }

  listarTareas() {
    return this.tareas;
  }
}
