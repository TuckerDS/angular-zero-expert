import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../interfaces/hero.interface';
import { delay, switchMap } from 'rxjs';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent implements OnInit {
  public hero?: Hero;

  constructor(
    private heroService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router

  ) {

  }
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        delay(3000),
        switchMap(({ id }) => this.heroService.getHeroById(id))
      ).subscribe(
        hero => {
          if (!hero) return this.router.navigate(['/heroes/list'])
          return this.hero = hero
        })
  }

  goBack(): void {
    this.router.navigate(['/heroes/list']);
  }
}
