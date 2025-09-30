import { Component } from '@angular/core';

interface producto{
  id: number;
  nombre: string;
  precio: number;
}

@Component({
  selector: 'app-productos-component',
  standalone: false,
  templateUrl: './productos-component.html',
  styleUrl: './productos-component.css'
})

export class ProductosComponent {

  productos: producto[] = [
    {id: 1, nombre: 'Gaseosa', precio: 100},
    {id: 2, nombre: 'Pan', precio: 30},
    {id: 3, nombre: 'Tocino', precio: 250}];
}
