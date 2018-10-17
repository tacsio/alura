import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { FilterByDescription } from "./photo-list/filter-by-description.pipe";
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { PhotoComponent } from "./photo/photo.component";


@NgModule({
	declarations: [
		PhotoComponent,
		PhotoListComponent,
		PhotoFormComponent,
		PhotosComponent,
		FilterByDescription,
		LoadButtonComponent
	],
	exports: [PhotoListComponent],
	imports: [HttpClientModule, CommonModule]
})
export class PhotosModule { }