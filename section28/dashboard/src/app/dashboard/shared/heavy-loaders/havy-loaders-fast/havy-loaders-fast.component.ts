import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-havy-loaders-fast',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './havy-loaders-fast.component.html',
  styleUrl: './havy-loaders-fast.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HavyLoadersFastComponent { }
