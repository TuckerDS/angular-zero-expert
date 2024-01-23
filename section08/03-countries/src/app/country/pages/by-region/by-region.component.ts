import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrl: './by-region.component.css'
})
export class ByRegionComponent {
  public regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  public activeRegion: string = '';
  public countries: Country[] = [];

  constructor(private countryService: CountryService) {

  }

  activateRegion(region: string) {
    if (region !== this.activeRegion) {
      this.activeRegion = region;
      console.log(this.activeRegion);

      this.countryService.searchByRegion(region).subscribe(
        (res: Country[]) => {
          console.log('res:', res)
          this.countries = res;
        },
        (err: any) => {
          this.countries = [];
        }
      )
    }

  }

  getClassCss(region: string) {
    return (region === this.activeRegion)
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

}
