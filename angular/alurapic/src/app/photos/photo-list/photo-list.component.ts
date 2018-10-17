import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from './../photo/photo.service';
import { filterQueryId } from '@angular/core/src/view/util';

@Component({
	selector: 'app-photo-list',
	templateUrl: './photo-list.component.html',
	styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
	photos: Photo[] = []
	filter: string = ''
	
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
				photos => this.photos = photos,
				err => console.log(err)
			);
	}
}
