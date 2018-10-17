import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from './../photo/photo.service';

@Component({
	selector: 'app-photo-list',
	templateUrl: './photo-list.component.html',
	styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

	allPhotos: Photo[] = []
	photos: Photo[] = []
	
	constructor(private photoService: PhotoService,
				private activatedRoute: ActivatedRoute) { }
				
	ngOnInit():void {
		//recupera path param
		let username = this.activatedRoute.snapshot.params.username;
		if(!username){
			username = 'flavio';
		}

		this.photoService.listFromUser(username)
			.subscribe(
				photos => { 
					this.allPhotos = photos;
					this.photos = photos;
				},
				err => console.log(err)
			);
	}

	updateFilter(filterText: string): void {
		this.photos = (filterText.length > 2) ? this.filterPhotos(filterText) : this.allPhotos;
	}

	filterPhotos(filterText: string): any {
		let regex: RegExp = new RegExp(`.*${filterText}.*`, 'i');			
		return this.allPhotos.filter(photo => regex.test(photo.description));
	}

}
