import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {MainComponent} from './main/main.component';

const appRoutes: Routes = [
	{path: '', component: HeaderComponent, outlet: 'header'},
	{path: '', component: FooterComponent, outlet: 'footer'},
	{path: '', component: MainComponent, outlet: 'main'}
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {
}
