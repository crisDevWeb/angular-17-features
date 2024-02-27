import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './change-detection.component.html'
})
export default class ChangeDetectionComponent {

  public currentFramework = computed( () => `Change detection - ${this.frameWorkAsSignal().name }`);

  public frameWorkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016
  });

  public frameWorkAsProperty = {
    name: 'Angular',
    releaseDate: 2016
  };

  constructor() {
    setTimeout(() => {
      // this.frameWorkAsProperty.name = 'React';
      this.frameWorkAsSignal.update(value => ({
        ...value,
        name: 'React'
      }))

      console.log("Hecho");
      
    }, 3000);
  }

}
