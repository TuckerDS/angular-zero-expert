import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    ResultsComponent,
    GifsPageComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ResultsComponent,
    GifsPageComponent,
    SearchComponent,
  ],
})
export class GifsModule { }
