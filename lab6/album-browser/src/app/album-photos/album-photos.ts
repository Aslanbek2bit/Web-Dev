import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AlbumService, PhotoItem } from '../services/album';

@Component({
  selector: 'app-album-photos',
  imports: [CommonModule],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css'
})
export class AlbumPhotos implements OnInit {
  private route = inject(ActivatedRoute);
  private albumService = inject(AlbumService);
  private location = inject(Location);

  photos: PhotoItem[] = [];
  albumId = 0;
  loading = true;

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data) => {
        this.photos = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
}