import { Component } from "@angular/core";

@Component({
  selector: 'app-counter-standalone',
  template: `
  <h1>{{title}}</h1>
  <button (click)="accumulate(-1, count)">- 1</button>
  <span> {{count}} </span>
  <button (click)="accumulate(1, count)">+ 1</button>
  `,
  standalone: true
})
export class CounterStandAloneComponent {
  public title: string = 'Contador Standalone';
  public count: number = 0;

  accumulate(value: number, count: number) {
    console.log(count);
    this.count += value;
  }
}
