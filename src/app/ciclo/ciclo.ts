import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  standalone: false,
  templateUrl: './ciclo.html',
  styleUrl: './ciclo.css'
})
export class Ciclo implements OnInit, OnChanges, OnDestroy {
  @Input() nombre: string = '';

  constructor() {
    console.log('Constructor -> el componente fue creado');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges -> hago un cambio en @Input', changes);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy -> el componente será destruido');
  }

  ngOnInit(): void {
    console.log('ngOnInit -> inicializao el componente');
  }

}
