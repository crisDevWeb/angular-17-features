import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavey-loaders-fast',
  standalone: true,
  imports: [CommonModule],
  template: `
   <section [ngClass]="['w-full', cssClass]">
      <ng-content />
   </section>
  `
})
export class HeaveyLoadersFastComponent {
  @Input({ required: true }) cssClass!: string;
}
