import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeavyLoadersFastComponent } from '@shared/heavy-loaders/heavy-loaders-fast/heavy-loaders-fast.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-defer-options',
  standalone: true,
  imports: [
    CommonModule, TitleComponent, HeavyLoadersFastComponent
  ],
  templateUrl: './defer-options.component.html',
  styleUrl: './defer-options.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeferOptionsComponent {
}
