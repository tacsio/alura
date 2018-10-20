import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Photo } from "../photo/photo";
import { PhotoService } from "../photo/photo.service";

// Resolver é utilizado para resolver dados do componente antes do componente ser ativado
@Injectable({ providedIn: 'root' })
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {

    constructor(private photoService: PhotoService) {}

    resolve(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const username = router.params.username;
        return this.photoService.listFromUserPaginated(username, 1);
    }
}