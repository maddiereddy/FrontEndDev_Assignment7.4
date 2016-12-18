import { Component } from '@angular/core';

@Component({
    selector: 'my-header',
    templateUrl: './header.component.html',
    styleUrls: ['../app.component.css']
})
export class HeaderComponent {
    title: string = "Select a Role:"
}

