import { Photo } from './photo.model';

export interface Album {
  id: number;
  tourId: number;
  photos: Photo[];
}
