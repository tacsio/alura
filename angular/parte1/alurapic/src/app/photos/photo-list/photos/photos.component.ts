import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {
  //inboud properties só mudam através de atribuição
  @Input() photos: Photo[] = []
  rows: any[] = []

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
	  //se houver mudança, haverá uma property com mesmo nome da inbound property (@Input)
	  if(changes.photos) {
		  this.rows = this.groupColumns(this.photos);
	  }
  }

  groupColumns(photos: Photo[]): any {
	const newRows = []

	for (let index = 0; index < photos.length; index+=3) {
	  newRows.push(this.photos.slice(index, index+3))
	}

	return newRows;
  }
}
