import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPlaylistsComponent } from './playlists/list-playlists/list-playlists.component';

const routes: Routes = [
  { path: 'playlist/list', component: ListPlaylistsComponent },

  { path: '', redirectTo: '/playlist/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
