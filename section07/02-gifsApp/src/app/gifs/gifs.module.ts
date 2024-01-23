import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ResultsComponent,
    GifsPageComponent,
    SearchComponent,
    GifsCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ResultsComponent,
    GifsPageComponent,
    SearchComponent,
    GifsCardComponent
  ],
})
export class GifsModule { }
