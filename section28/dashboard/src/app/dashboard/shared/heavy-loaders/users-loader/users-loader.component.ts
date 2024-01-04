import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-users-loader',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './users-loader.component.html',
  styleUrl: './users-loader.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersLoaderComponent {
  constructor() { }
}
