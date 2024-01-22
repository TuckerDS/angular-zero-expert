import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {

  }
  // search(text: string) {
  search() {

    // console.log(text);
    const value = this.txtSearch.nativeElement.value

    if (value.trim().length !== 0) {
      this.gifsService.search(value);
      this.txtSearch.nativeElement.value = '';
    }
  }
}
