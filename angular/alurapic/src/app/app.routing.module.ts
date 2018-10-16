import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
	{ path: '', component: PhotoListComponent },
	{ path: 'users/:username', component: PhotoListComponent },
	{ path: 'photos/add',  component: PhotoFormComponent },
	{ path: '**',  component: NotFoundComponent } //padrao quando nao casa com nenhuma rota (not found)
]

@NgModule({
	//importa as todas definidas para o router module configurado
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {

}