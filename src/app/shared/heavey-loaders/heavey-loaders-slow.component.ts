import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavey-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full h-[600px]', cssClass]">
      Heavy Loaders Slow
    </section>
  `
})
export class HeaveyLoadersSlowComponent {
  @Input({ required: true }) cssClass!: string;

  constructor() {
    console.log('Cargado');
    
    const start = Date.now();

    while (Date.now() - start < 3000) {  }
  }
}
