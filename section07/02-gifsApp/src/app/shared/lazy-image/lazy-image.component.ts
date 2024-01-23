import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  template: `
  <div class="d-flex justify-content-center">
    <img
      [src]="url"
      [alt]="alt"
      class="card-img-top animate__animated animate__fadeIn"
      (load)="onLoad()"
      [ngClass]="{display: hasLoaded ? '' : 'none' }"
    />
    <img
      *ngIf="!hasLoaded"
      src="assets/loader.svg"
      alt="loader"
      height="35"
      width="35"
      class="mt-3"
    />
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LazyImageComponent implements OnInit {
  @Input() public url!: string;
  @Input() public alt: string = '';
  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('url required.');
  }

  onLoad() {
    this.hasLoaded = true;
  }

}
