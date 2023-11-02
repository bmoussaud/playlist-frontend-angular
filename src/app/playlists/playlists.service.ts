import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

export class Playlist {
  constructor(
    public index: string | null,
    public name: string | null,
    public description: string | null,
    public image: string | null,
    public totalTracks: string | 0,
    public duration: string | 0
  ) {}

  valid(): boolean {
    return true;
  }
}

export class Configuration {
  constructor(
    public url: string | null,
    public username: string | null,
    public hostname: string | null,
    public password: string | null,
    public driver: string | 0,
    public color: string | 0
  ) {}
}

interface PlaylistDTO {
  index: string;
  name: string;
  description: string;
  image: string;
  totalTracks: string;
  duration: string;
}

@Injectable({
  providedIn: 'root',
})
export class PlaylistsService {
  constructor(private http: HttpClient) {}

  getPlaylists(): Observable<Playlist[]> {
    return this.http.get<PlaylistDTO[]>('/api/playlist').pipe(
      map((dtos) => {
        return dtos.map(
          (dto) =>
            new Playlist(
              dto.index,
              dto.name,
              dto.description,
              dto.image,
              dto.totalTracks,
              dto.duration
            )
        );
      })
    );
  }

  getConfiguration(): Observable<Configuration> {
    return this.http.get<Configuration>('/api/config').pipe(
      map((result) => {
        return result;
      })
    );
  }
}
