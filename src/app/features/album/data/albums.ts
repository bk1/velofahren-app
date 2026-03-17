// example. Will be generated from HTML
import { Album } from '../models/album.model';

export const ALBUMS: Album[] = [
  {
    id: 1,
    tourId: 1,
    tourTitle: 'Tour Zürich - Bern',
    photos: [
      { id: 1, filename: 'assets/album/tour1/photo1.jpg', title: 'Start in Zürich' },
      { id: 2, filename: 'assets/album/tour1/photo2.jpg', title: 'Unterwegs im Mittelland' },
      { id: 3, filename: 'assets/album/tour1/photo3.jpg', title: 'Ankunft in Bern' },
    ]
  },
  {
    id: 2,
    tourId: 2,
    tourTitle: 'Tour Luzern - Basel',
    photos: [
      { id: 4, filename: 'assets/album/tour2/photo1.jpg', title: 'Abfahrt Luzern' },
      { id: 5, filename: 'assets/album/tour2/photo2.jpg', title: 'Entlang der Aare' },
    ]
  }
];
