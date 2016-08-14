import { Component } from "@angular/core";

@Component({
    template: `
    <nav class="navbar navbar-inverse">
        <div class="navbar-header">
            <a class="navbar-brand" routerLink="/">Angular 2 Workshop</a>
        </div>
        <ul class="nav navbar-nav">
            <li routerLinkActive="active" routerLink="/kata-one">
                <a href="#">Kata 1</a>
            </li>
            <li routerLinkActive="active" routerLink="/kata-two">
                <a href="#">Kata 2</a>
            </li>
            <li routerLinkActive="active" routerLink="/kata-three">
                <a href="#">Kata 3</a>
            </li>
            <li routerLinkActive="active" routerLink="/kata-four">
                <a href="#">Kata 4</a>
            </li>
            <li routerLinkActive="active" routerLink="/kata-five">
                <a href="#">Kata 5</a>
            </li>

        </ul>
    </nav>

    <router-outlet></router-outlet>
    `,
    selector: 'my-app'
}) 
export class AppComponent {
    
}