import {
  Component,
  // Input
} from '@angular/core';
import { Character } from '../interfaces/interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent {
  constructor(private dbzService: DbzService) { }

  // @Input() characters: Character[] = [];

  get characters(): Character[] {
    return this.dbzService.characters;
  }
}
