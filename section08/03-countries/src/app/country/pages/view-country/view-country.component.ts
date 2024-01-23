import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styleUrl: './view-country.component.css'
})
export class ViewCountryComponent implements OnInit {
  public country!: Country;

  constructor(
    private activateRoute: ActivatedRoute,
    private countryService: CountryService
  ) { }
  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({ code }) => this.countryService.searchByCode(code)),
        tap(res => console.log(res))
      )
      .subscribe(res => this.country = res[0] || null)

  }

}
