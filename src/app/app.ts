import { Component, signal } from '@angular/core';

export interface Tarea{
id: number;
titulo: string;
completada: boolean;
}

class GestorTareas{
  private tareas: Tarea[] = [];

  agregarTarea(tarea: Tarea){
    this.tareas.push(tarea);
  }

  listarTareas(): Tarea[] {
    return this.tareas;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
lista: Tarea[] = [];
gestor = new GestorTareas();

ngOnInit(): void{
  this.gestor.agregarTarea({
    id: 1,
    titulo: 'Estudiar Angular',
    completada: false
  });
  this.gestor.agregarTarea({
    id: 2,
    titulo: 'Practicar TypeScript',
    completada: true
  });
   this.gestor.agregarTarea({
    id: 3,
    titulo: 'Aprender BackEnd',
    completada: false
  });
   this.gestor.agregarTarea({
    id: 4,
    titulo: 'Aprender BBDD',
    completada: false
  });
  this. lista = this.gestor.listarTareas();
}

}
