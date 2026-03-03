import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AlbumItem {
  userId: number;
  id: number;
  title: string;
}

export interface PhotoItem {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private http = inject(HttpClient);
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  getAlbums(): Observable<AlbumItem[]> {
    return this.http.get<AlbumItem[]>(`${this.apiUrl}/albums`);
  }

  getAlbum(id: number): Observable<AlbumItem> {
    return this.http.get<AlbumItem>(`${this.apiUrl}/albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<PhotoItem[]> {
    return this.http.get<PhotoItem[]>(`${this.apiUrl}/albums/${id}/photos`);
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/albums/${id}`);
  }

  updateAlbum(album: AlbumItem): Observable<AlbumItem> {
    return this.http.put<AlbumItem>(`${this.apiUrl}/albums/${album.id}`, album);
  }
}