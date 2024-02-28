import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../interfaces/interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  // @Output() onAdd: EventEmitter<Character> = new EventEmitter();

  private default: Character = {
    name: '',
    power: 0
  }

  public newCharacter: Character = this.default;

  constructor(private dbzService: DbzService) { }

  add(): void {
    if (this.newCharacter.name.trim().length === 0) {
      return;
    }

    this.dbzService.add(this.newCharacter)
    console.log('Adding', this.newCharacter);
    // this.onAdd.emit(this.newCharacter);

    this.newCharacter = this.default

  }
}
