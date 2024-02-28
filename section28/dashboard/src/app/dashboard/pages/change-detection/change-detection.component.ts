import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ChangeDetectionComponent {

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016
  })

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016
  }

  public currentFramework = computed(() => `Change detection - ${this.frameworkAsSignal().name}`)

  constructor() {
    setTimeout(() => {
      this.frameworkAsSignal.update(value => ({ ...value, name: 'React' }))
      // this.frameworkAsProperty.name = 'React'
      this.frameworkAsProperty = {
        name: 'REACT',
        releaseDate: 2016
      }

      console.log('Hecho', this.frameworkAsProperty.name);

    }, 3000);
  }
}
