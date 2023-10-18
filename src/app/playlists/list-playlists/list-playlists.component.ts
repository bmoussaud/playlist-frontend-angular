import { Component, OnInit } from '@angular/core';
import { Playlist, PlaylistsService } from '../playlists.service';
import { Observable, catchError, of, startWith } from 'rxjs';

@Component({
  selector: 'app-list-playlists',
  templateUrl: './list-playlists.component.html',
  styleUrls: ['./list-playlists.component.css'],
})
export class ListPlaylistsComponent implements OnInit {
  columnsToDisplay = ['image',  'name', 'description', 'totalTracks'];

  dataSource: Observable<Playlist[]> = of([]);

  couldNotRetrieve: Boolean = false;

  constructor(private playlistService: PlaylistsService) {}

  ngOnInit(): void {
    this.dataSource = this.playlistService.getPlaylists().pipe(
      startWith([]),
      catchError((err) => {
        // Wait a turn because couldNotRetrieve already set once this turn
        setTimeout(() => (this.couldNotRetrieve = true));
        return [];
      })
    );
  }
}
