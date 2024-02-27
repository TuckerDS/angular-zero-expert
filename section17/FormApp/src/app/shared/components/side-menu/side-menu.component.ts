import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {
  public reactiveMenu: MenuItem[] = [
    { title: 'Basics', route: './reactive/basic' },
    { title: 'Dynamics', route: './reactive/dynamic' },
    { title: 'Switches', route: './reactive/switches' },
  ];

  public authMenu: MenuItem[] = [
    { title: 'Register', route: './auth' },
  ];
}
