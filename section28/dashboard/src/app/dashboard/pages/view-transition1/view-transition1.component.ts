import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transition1',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
  templateUrl: './view-transition1.component.html',
  styleUrl: './view-transition1.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ViewTransition1Component { }
