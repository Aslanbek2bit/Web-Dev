import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService, AlbumItem } from '../services/album';

@Component({
  selector: 'app-album-detail',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css'
})
export class AlbumDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private albumService = inject(AlbumService);
  private location = inject(Location);

  album: AlbumItem | null = null;
  loading = true;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  save(): void {
    if (!this.album) return;

    this.albumService.updateAlbum(this.album).subscribe({
      next: (updated) => {
        this.album = updated;
        alert('Album title saved (simulated).');
      },
      error: (err) => {
        console.error(err);
        alert('Failed to save album');
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
}