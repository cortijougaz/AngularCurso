import {Directive} from '@angular/core';
import {ElementRef} from '@angular/core';
import {Router} from '@angular/router';
import {Renderer2} from '@angular/core';
import {HostListener} from '@angular/core';

@Directive({
  selector: '[appDirectivaEjemplo]',
  standalone: false
})
export class DirectivaEjemplo {

  constructor(private el: ElementRef, private rendered: Renderer2) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.rendered.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.rendered.removeStyle(this.el.nativeElement, 'backgroundColor')
  }
}
