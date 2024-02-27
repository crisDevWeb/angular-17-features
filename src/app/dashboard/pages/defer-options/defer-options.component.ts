import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaveyLoadersFastComponent } from '@shared/heavey-loaders/heavey-loaders-fast.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, HeaveyLoadersFastComponent, TitleComponent],
  templateUrl: './defer-options.component.html'
})
export default class DeferOptionsComponent {

}
