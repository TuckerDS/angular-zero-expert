import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css',
})
export class HeroeComponent {
  public name: string = 'Ironman';
  public age: number = 35;

  get getCapitalizedName(): string {
    return this.name.toUpperCase()
  }
  getName(): string {
    return `${this.name} - ${this.age}`
  }

}
