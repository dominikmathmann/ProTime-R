import {Component, Input} from '@angular/core'
import {Router} from '@angular/router'

@Component({
    template: `<fieldset><legend>{{header}}<a class="button" [routerLink]="navigateTo">{{navLabel}}</a></legend><ng-content></ng-content></fieldset>`,
    styles: [
        `fieldset{margin-top: 2em;}`,
        `legend{line-height: 1.6em;}`,
        `legend>a{float: right; height: 2em; line-height: 1em; padding-top: 0.5em}`,
    ],
    selector: 'nav-panel'
})
export class NavButtonPanelComponent {

    @Input()
    navigateTo: string;

    @Input()
    navLabel: string;

    @Input()
    header: string;

    constructor() {
        this.navigateTo = "/";
        this.navLabel = "home";
        this.header = "missing-header-label";
    }
}