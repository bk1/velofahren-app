import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-photo-modal',
  templateUrl: './photo-modal.component.html',
  styleUrls: ['./photo-modal.component.scss']
})
export class PhotoModalComponent {
  @Input() photo!: Photo;
  @Output() close = new EventEmitter<void>();

  dismiss(): void {
    this.close.emit();
  }
}
