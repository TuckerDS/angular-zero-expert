import { CounterStandAloneComponent } from './counter-standalone.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterModule } from './app/counter/counter.module';
import { HeroeModule } from './app/heroes/heroe/heroe.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CounterStandAloneComponent, CounterModule, HeroeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
