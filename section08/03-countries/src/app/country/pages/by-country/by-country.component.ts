import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrl: './by-country.component.css'
})
export class ByCountryComponent {
  public term: string = '';
  public hasError: boolean = false;
  public showSuggested: boolean = false;
  public countries: Country[] = [];
  public suggestedCountries: Country[] = [];

  constructor(private countryService: CountryService) { }

  search(term: string) {
    this.hasError = false;
    this.term = term;

    this.countryService.searchByName(term).subscribe(
      (res: Country[]) => {
        console.log('res:', res)
        this.hasError = false;
        this.countries = res;
      },
      (err: any) => {
        this.countries = [];
        this.hasError = true;

      }
    )
    console.log(this.term);
  }

  suggests(term: string) {
    this.hasError = false;
    this.showSuggested = true;
    this.term = term;

    this.countryService.searchByName(term).subscribe(
      countries => this.suggestedCountries = countries.splice(0, 5),
      err => this.suggestedCountries = []
    )
  }

  searchSuggested(term: string) {
    this.search(term);
    this.showSuggested = false;
  }
}
