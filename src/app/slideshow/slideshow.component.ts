import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slideshow',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="slideshow-root">
      <div class="frame">
        <button class="nav prev" (click)="prev()" aria-label="Précédent">‹</button>
        <div class="image-wrap">
          <img [src]="images[current()]" [alt]="'slide ' + (current() + 1)" />
        </div>
        <button class="nav next" (click)="next()" aria-label="Suivant">›</button>
      </div>
      <div class="thumbs">
        <img *ngFor="let img of images; let i = index" [src]="img" [class.active]="i === current()" (click)="go(i)" />
      </div>
    </div>
  `,
  styles: [
    `
    .slideshow-root { width:100%; max-width:900px; margin:0 auto; }
    .frame { position:relative; display:flex; align-items:center; }
    .image-wrap { flex:1; display:flex; justify-content:center; }
    .image-wrap img { width:100%; max-height:520px; object-fit:contain; border-radius:8px; box-shadow:0 10px 30px rgba(0,0,0,0.5); }
    .nav { background:rgba(0,0,0,0.4); color:#fff; border:0; font-size:2rem; width:48px; height:48px; border-radius:50%; cursor:pointer }
    .nav:disabled { opacity:0.4; cursor:default }
    .thumbs { display:flex; gap:0.5rem; margin-top:0.75rem; overflow-x:auto; padding-bottom:0.25rem }
    .thumbs img { width:80px; height:56px; object-fit:cover; border-radius:4px; cursor:pointer; opacity:0.7; border:2px solid transparent }
    .thumbs img.active { opacity:1; border-color:var(--moon, #fff) }
    `
  ]
})
export class SlideshowComponent {
  @Input() images: string[] = ['/assets/illustrations/placeholder.svg'];
  current = signal(0);

  prev() {
    if (this.current() > 0) this.current.update(n => n - 1);
  }

  next() {
    if (this.current() < this.images.length - 1) this.current.update(n => n + 1);
  }

  go(i: number) {
    if (i >= 0 && i < this.images.length) this.current.set(i);
  }
}
