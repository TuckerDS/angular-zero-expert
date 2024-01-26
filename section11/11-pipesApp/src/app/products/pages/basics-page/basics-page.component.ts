import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'fernando';
  public nameUpper: string = 'FERNADO'
  public nameTitle: string = 'feRnAndo ramon'
  public customDate: Date = new Date();

}
