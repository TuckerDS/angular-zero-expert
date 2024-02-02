import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { filter, switchMap, tap } from 'rxjs';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { HeroesService } from '../../services/heroes.service';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrl: './new-page.component.css'
})
export class NewPageComponent implements OnInit {
  public heroForm = new FormGroup({
    id: new FormControl(''),
    superhero: new FormControl('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl(''),
  });

  public publishers = [
    { id: 'DC Comics', label: 'DC - Comics' },
    { id: 'Marvel Comics', label: 'Marvel - Comics' }
  ]

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public snackbar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    console.log('INIT');

    if (this.router.url.includes('edit')) {
      this.activatedRoute.params
        .pipe(
          switchMap(({ id }) => this.heroesService.getHeroById(id))
        )
        .subscribe(hero => {
          console.log('hero---->', hero)
          if (!hero) return this.router.navigateByUrl('/');
          return this.heroForm.reset(hero);
        })
    }
    // throw new Error('Method not implemented.');
  }

  get currentHero(): Hero {
    return this.heroForm.value as Hero
  }

  onSubmit(): void {
    if (this.heroForm.valid) {
      if (this.currentHero.id) {
        this.heroesService.updateHeroById(this.currentHero)
          .subscribe(hero => {
            this.showSnackbar(`${hero.superhero} updated!`)
          });
      }
      this.heroesService.addHero(this.currentHero)
        .subscribe(hero => {
          this.showSnackbar(`${hero.superhero} created!`)
          this.router.navigate(['/heroes/edit', hero.id])
        });

    }
    console.log({
      formIsValid: this.heroForm.valid,
      value: this.heroForm.value
    })
  }

  onDelete() {
    if (!this.currentHero.id) throw Error('Hero id is required!')

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value,
    });

    dialogRef.afterClosed()
      .pipe(
        filter((result: boolean) => result),
        switchMap(() => this.heroesService.deleteHeroById(this.currentHero)),
        filter((wasDeleted: boolean) => wasDeleted),
        tap(result => console.log(result)),
      )
      .subscribe(() => {
        this.router.navigate(['/heroes']);
      })

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     this.heroesService.deleteHeroById(this.currentHero).subscribe(wasDeleted => {
    //       if (wasDeleted) this.router.navigate(['/heroes']);
    //     });
    //   }
    //   console.log('The dialog was closed', result);

    // });
  }

  showSnackbar(msg: string): void {
    this.snackbar.open(msg, 'done', {
      duration: 2500
    })
  }
}
