import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): string {


    return value ? 'Vuela' : 'No vuela';
  }
}


@Pipe({
  name: 'sortByPipe'
})
export class SortByPipe implements PipeTransform {
  // transform(value: string, ...args: any[]): string {
  transform(heroes: Hero[], sortBy: keyof Hero | null): Hero[] {
    console.log(heroes, sortBy)
    if (!sortBy) return heroes

    return heroes.sort((a: Hero, b: Hero) => (a[sortBy] > b[sortBy] ? 1 : -1))
  }
}

