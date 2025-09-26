import { Component, signal } from '@angular/core';
import { StoryComponent } from "./story/story.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StoryComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('conte-lune');
}
