import { CounterStandAloneComponent } from './counter-standalone.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterModule } from './app/counter/counter.module';
import { HeroesModule } from './app/heroes/heroes.module';
import { DbzModule } from './app/dbz/dbz.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CounterStandAloneComponent,
    CounterModule,
    HeroesModule,
    DbzModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
