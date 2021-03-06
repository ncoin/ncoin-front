import {Component} from '@angular/core';


@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	public isOpen: boolean;

	constructor() {
		this.isOpen = false;
	}

	toggleMenu() {
		this.isOpen = !this.isOpen;
	}

	closeMenu() {
		this.isOpen = false;
	}
}
