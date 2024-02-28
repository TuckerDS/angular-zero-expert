import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  public heroes: string[] = ['Spiderman', 'Thor', 'Ironman', 'Hulk'];
  public deletedHero?: string;

  constructor() {
    console.log('Constructor')
  }

  ngOnInit(): void {
    console.log('OnInit')
  }

}
