import {Component, } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {environment} from '../environments/environment';
import {TranslateService} from '@ngx-translate/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	private _env = environment.name;
	protected titles: string;

	constructor(private titleService: Title, translate: TranslateService) {
		translate.setDefaultLang('en');
		translate.use('en');

		this.titles = this.titleService.getTitle();
		this.titles = (this._env !== 'LIVE') ? '[' + this._env + '] ' + this.titles : this.titles;
		titleService.setTitle(this.titles);
	}
}
