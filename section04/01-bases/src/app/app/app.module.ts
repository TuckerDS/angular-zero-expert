import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesModule } from './heroes/heroes.module';



@NgModule({
  imports: [
    CommonModule,
    HeroesModule
  ],
})
export class AppModule { }
