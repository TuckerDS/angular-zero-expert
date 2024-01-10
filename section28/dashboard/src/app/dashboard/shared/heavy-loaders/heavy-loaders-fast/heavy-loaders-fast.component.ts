import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
  templateUrl: './heavy-loaders-fast.component.html',
  styleUrl: './heavy-loaders-fast.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeavyLoadersFastComponent {
  @Input({ required: true }) cssClass!: string;

  constructor() {
    console.log('Heavy Loader Fast created');

  }
}
