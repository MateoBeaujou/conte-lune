import { Routes } from '@angular/router';
import { StoryComponent } from './story/story.component';
import { CoverComponent } from './cover/cover.component';
import { BackCoverComponent } from './backcover/backcover.component';

export const routes: Routes = [
	{ path: '', component: CoverComponent },
	{ path: 'story', component: StoryComponent },
	{ path: 'back', component: BackCoverComponent },
	{ path: '**', redirectTo: '' }
];
