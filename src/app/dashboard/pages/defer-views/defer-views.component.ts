import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaveyLoadersSlowComponent } from '@shared/heavey-loaders/heavey-loaders-slow.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, HeaveyLoadersSlowComponent, TitleComponent],
  templateUrl: './defer-views.component.html',
  styles: ``
})
export default class DeferViewsComponent {

}
