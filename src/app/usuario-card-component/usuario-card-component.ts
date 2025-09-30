import { Component } from '@angular/core';
import {Input} from '@angular/core';
import {OnInit} from '@angular/core';
import {OnDestroy} from '@angular/core';

@Component({
  selector: 'app-usuario-card-component',
  standalone: false,
  templateUrl: './usuario-card-component.html',
  styleUrl: './usuario-card-component.css'
})
export class UsuarioCardComponent implements OnInit, OnDestroy {
@Input() nombreUsuario: string = '';
saludo: string = '';

  ngOnDestroy(): void {
    console.log('Componente Usuario destruido.');
  }

  ngOnInit(): void {
    this.saludo = 'Buenos días ' + this.nombreUsuario;
  }
}
