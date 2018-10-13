import { Component, OnInit } from '@angular/core';

import { PhotoService } from './photos/photo/photo.service';
import { Photo } from './photos/photo/photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'alurapic';
  photos:Photo[] = []

  constructor(private photoService :PhotoService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    
    this.photoService.listFromUser('flavio')
      .subscribe(
        photos => this.photos = photos,
        err => console.log(err))
  }
}
