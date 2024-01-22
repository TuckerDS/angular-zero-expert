import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ViewCountryComponent } from './pages/view-country/view-country.component';



@NgModule({
  declarations: [
    ByCapitalComponent,
    ByRegionComponent,
    ByCountryComponent,
    ViewCountryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ByCapitalComponent,
    ByRegionComponent,
    ByCountryComponent,
    ViewCountryComponent
  ]
})
export class CountryModule { }
