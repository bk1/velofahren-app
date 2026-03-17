import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumRoutingModule } from './album-routing.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PhotoModalComponent } from './components/photo-modal/photo-modal.component';

@NgModule({
  declarations: [CarouselComponent, PhotoModalComponent],
  imports: [CommonModule, AlbumRoutingModule]
})
export class AlbumModule {}
