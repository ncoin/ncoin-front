import {
    Component, HostListener, OnInit, ElementRef, AfterViewChecked, AfterContentInit, AfterContentChecked,
    AfterViewInit, ChangeDetectorRef
} from '@angular/core';
import { element } from 'protractor';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {
    scrollTop: number;
    windowHeight: number;

    @HostListener('window:scroll', [])
    @HostListener('window:resize', [])
    onWindowScroll() {
        this.windowHeight = window.innerHeight;
        this.scrollTop = window.pageYOffset;
    }

    isViewing(el: HTMLElement) {
        const h = el.offsetHeight;
        const t = el.offsetTop;
        const wh = this.windowHeight;
        const wt = this.scrollTop;

        return wt + wh * 0.8 > t && wt < t + h * 0.8;
    }

    constructor(private elementRef: ElementRef, private cd: ChangeDetectorRef) {
    }

    ngAfterViewInit() {
        this.cd.detectChanges();
    }

}
