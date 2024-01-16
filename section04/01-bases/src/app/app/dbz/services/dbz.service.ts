import { Injectable } from "@angular/core";
import { Character } from "../interfaces/interfaces";

@Injectable()
export class DbzService {
  private _characters: Character[] = [
    {
      name: 'Krillin',
      power: 700
    },
    {
      name: 'Goku',
      power: 1500
    },
    {
      name: 'Vegeta',
      power: 9500
    },
  ]

  constructor() {
    console.log('Service Started');
  }

  get characters(): Character[] {
    return this._characters;
  }

  add(character: Character): void {
    this.characters.push(character);
  }
}
