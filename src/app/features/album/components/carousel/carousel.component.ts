import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../../models/album.model';
import { Photo } from '../../models/photo.model';
import { ALBUMS } from '../../data/albums';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  album: Album | undefined;
  currentIndex = 0;
  selectedPhoto: Photo | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const tourId = Number(this.route.snapshot.paramMap.get('tour_id'));
    this.album = ALBUMS.find(a => a.tourId === tourId);
  }

  get current(): Photo | null {
    return this.album?.photos[this.currentIndex] ?? null;
  }

  prev(): void {
    if (!this.album) return;
    this.currentIndex = (this.currentIndex - 1 + this.album.photos.length) % this.album.photos.length;
  }

  next(): void {
    if (!this.album) return;
    this.currentIndex = (this.currentIndex + 1) % this.album.photos.length;
  }

  openModal(photo: Photo): void {
    this.selectedPhoto = photo;
  }

  closeModal(): void {
    this.selectedPhoto = null;
  }
}
