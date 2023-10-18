import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPlaylistsComponent } from './list-playlists/list-playlists.component';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PlaylistsService } from './playlists.service';


@NgModule({
  declarations: [
    ListPlaylistsComponent
  ],
  exports: [
    ListPlaylistsComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PlaylistsService
  ]
})
export class PlaylistsModule { }
