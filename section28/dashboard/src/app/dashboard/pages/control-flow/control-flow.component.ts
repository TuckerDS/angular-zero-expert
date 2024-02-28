import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'F';
@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [
    CommonModule, TitleComponent
  ],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ControlFlowComponent {
  public showContent = signal(true);
  public grade = signal<Grade>('A')
  public frameworks = signal(['Angular', 'Vue', 'React', 'Flutter', 'Backbone'])
  public frameworks2 = signal([])

  public toggleContent() {
    this.showContent.update(value => !value)
    this.grade.set('A')
  }


}
