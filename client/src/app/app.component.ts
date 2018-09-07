import {Component,} from '@angular/core';
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

	constructor(private titleService: Title, translate: TranslateService) {
		translate.setDefaultLang('en');
		translate.use('en');

		const titles = (this._env !== 'LIVE') ? '[' + this._env + '] NCoin' : 'NCoin';
		titleService.setTitle(titles);
	}
}
