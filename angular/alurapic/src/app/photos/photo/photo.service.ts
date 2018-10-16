import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Photo } from "./photo";

const API = 'http://localhost:3000';

@Injectable({providedIn: 'root'})
export class PhotoService {
	//private torna propriedade da classe
	constructor(private http: HttpClient) {}

	listFromUser(username: string) {
		const url = `${API}/${username}/photos`;

		return this.http.get<Photo[]>(url);
	}
}