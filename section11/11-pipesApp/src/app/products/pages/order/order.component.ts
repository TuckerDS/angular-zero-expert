import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  public isUpperCase: boolean = true;

  public orderBy: keyof Hero | null = null;
  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Barman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Spiderman',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robbin',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Green Lanter',
      canFly: true,
      color: Color.red
    },
    {
      name: 'Hulk',
      canFly: false,
      color: Color.green
    }
  ]
}
