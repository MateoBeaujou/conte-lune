import { Component } from '@angular/core';

@Component({
  selector: 'app-cover',
  standalone: true,
  template: `
    <div class="cover-root">
      <h1 class="cover-title">La Lune</h1>
      <p class="cover-authors">Les frères Grimm</p>
    </div>
  `,
  styles: [
    `
    .cover-root { display:flex; align-items:center; justify-content:center; height:70vh; flex-direction:column; gap:1rem }
    .cover-title { font-size:3rem }
    `
  ]
})
export class CoverComponent {}
