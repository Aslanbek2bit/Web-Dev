import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumService, AlbumItem } from '../services/album';

@Component({
  selector: 'app-albums',
  imports: [CommonModule],
  templateUrl: './albums.html',
  styleUrl: './albums.css'
})
export class Albums implements OnInit {
  private albumService = inject(AlbumService);
  private router = inject(Router);

  albums: AlbumItem[] = [];
  loading = true;

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  openAlbum(id: number): void {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(id: number): void {
    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums = this.albums.filter(a => a.id !== id);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}