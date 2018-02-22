import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '../environments/environment';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private _env = environment.name;
    title = 'app';

    constructor (private titleService: Title) {
        const titles = (this._env !== 'LIVE') ? '[' + this._env + '] NCoin' : 'NCoin';
        titleService.setTitle(titles);
    }

    ngOnInit() {

    }
}
