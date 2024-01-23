import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrl: './by-capital.component.css'
})
export class ByCapitalComponent {
  public term: string = '';
  public hasError: boolean = false;
  public countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  search(term: string) {
    this.hasError = false;
    this.term = term;

    this.countryService.searchByCapital(term).subscribe(
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

  suggests(event: any) {
    this.hasError = false;
  }
}
