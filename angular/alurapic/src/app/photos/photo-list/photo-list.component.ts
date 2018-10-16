import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from './../photo/photo.service';

@Component({
	selector: 'app-photo-list',
	templateUrl: './photo-list.component.html',
	styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnChanges {

	allPhotos: Photo[] = []
	photos: Photo[] = []
	filter: string = ''
	
	constructor(private photoService: PhotoService,
				private activatedRoute: ActivatedRoute) { }
				
	ngOnInit():void {
		//recupera path param
		const username = this.activatedRoute.snapshot.params.username;

		this.photoService.listFromUser(username)
			.subscribe(
				photos => { 
					this.allPhotos = photos;
					this.filterPhotos();
				},
				err => console.log(err)
			);
	}

	ngOnChanges(changes: SimpleChanges): void {
		console.log('entra')
		if(changes.filter) {
			this.photos = this.filterPhotos();
		} 
	}

	filterPhotos(): any {
		if(this.filter.length > 2){
			let regex: RegExp = new RegExp(`*${this.filter}*`);			
			this.photos = this.allPhotos.filter(photo => regex.test(photo.description));
		} else {
			this.photos = this.allPhotos;
		}
	}

}
