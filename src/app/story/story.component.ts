import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SLIDES, Slide } from '../shared/datas/slides.data';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent {
  slides: Slide[] = SLIDES;

  // current slide index
  page = signal(0);

  get total() {
    return this.slides.length;
  }

  ngOnInit() {
    window.addEventListener('keydown', this.onKey);
  }

  ngOnDestroy() {
    window.removeEventListener('keydown', this.onKey);
  }

  private onKey = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') this.next();
    if (e.key === 'ArrowLeft') this.prev();
    if (e.key === 'Home') this.go(0);
    if (e.key === 'End') this.go(this.total - 1);
  }

  next() {
    if (this.page() < this.total - 1) this.page.update(n => n + 1);
  }

  prev() {
    if (this.page() > 0) this.page.update(n => n - 1);
  }

  go(i: number) {
    if (i >= 0 && i < this.total) this.page.set(i);
  }
}
