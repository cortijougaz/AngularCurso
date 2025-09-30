import { Component } from '@angular/core';
import {empty} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {

  mostrar :boolean = false;
  usuario :string = '';
  frutas: string[] = ['Manzana', 'Bananas', 'Peras']
  color = 'amarillo'

  esActivo:boolean = true;
}
