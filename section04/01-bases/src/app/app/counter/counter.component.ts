import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <h1>{{title}}</h1>
  <button (click)="accumulate(-1, count)">- 1</button>
  <span> {{count}} </span>
  <button (click)="accumulate(1, count)">+ 1</button>
  `,
  standalone: false
})
export class CounterComponent {
  public title: string = 'Contador';
  public count: number = 0;

  accumulate(value: number, count: number) {
    console.log(count);
    this.count += value;
  }
}
