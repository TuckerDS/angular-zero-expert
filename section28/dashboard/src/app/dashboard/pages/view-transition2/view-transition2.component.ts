import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transition2',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
  templateUrl: './view-transition2.component.html',
  styleUrl: './view-transition2.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ViewTransition2Component { }
