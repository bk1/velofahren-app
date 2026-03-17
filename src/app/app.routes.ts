import { Routes } from '@angular/router';

import { AlbumComponent } from './features/album/album';
import { ToursComponent } from './features/tours/tours';
import { SearchComponent } from './features/search/search';

export const routes: Routes = [
  { path: 'albums', loadChildren: () => import('./features/album/album.module').then(m => m.AlbumModule) },
  { path: 'album/:id', component: AlbumComponent },
  { path: 'tours',     component: ToursComponent },
  { path: 'search',    component: SearchComponent },
  { path: '',          redirectTo: 'tours', pathMatch: 'full' },
];



