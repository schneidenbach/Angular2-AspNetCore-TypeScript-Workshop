import { Component } from "@angular/core";

@Component({
    template: `
    <h1>Angular 2 Katas</h1>

    <table class="table">
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Link</th>
            <th>Completed</th>
            <th>Instructions</th>
        </tr>
        <tr>
            <td>1 - Hello World</td>
            <td>An introductory kata that does the bare minimum amount of Angular 2-esque things.</td>
            <td><a href="katas/1">Hello World!</a></td>
            <td><a href="katas/1">View completed</a></td>
            <td>
                <a href="https://github.com/schneidenbach/Angular2-AspNetCore-TypeScript-Workshop/tree/master/src/katas#kata-1---hello-world">Instructions</a>
            </td>
        </tr>
        <tr>
            <td>2 - Components and templating</td>
            <td>Test your component and template making skills!</td>
            <td><a href="katas/2">Components and templating</a></td>
            <td><a href="katas/2-completed">View completed</a></td>
            <td>
                <a href="https://github.com/schneidenbach/Angular2-AspNetCore-TypeScript-Workshop/tree/master/src/katas#kata-2---components-and-templating">Instructions</a>
            </td>
        </tr>
        <tr>
            <td>3 - Pipes and styles</td>
            <td>Fancy up your views with interpolation expression-alterin' pipes and stylings.  Also a nice intro to ngModel.</td>
            <td><a href="katas/3">Pipes and Styles</a></td>
            <td><a href="katas/3-completed">View completed</a></td>
            <td>
                <a href="https://github.com/schneidenbach/Angular2-AspNetCore-TypeScript-Workshop/tree/master/src/katas#kata-3---altering-display-with-pipes-and-styles">Instructions</a>
            </td>
        </tr>
        <tr>
            <td>4 - Child components</td>
            <td>Create a child component.  Put properties in their place.  Subscribe to events.</td>
            <td><a href="katas/4">Child components</a></td>
            <td><a href="katas/4-completed">View completed</a></td>
            <td>
                <a href="https://github.com/schneidenbach/Angular2-AspNetCore-TypeScript-Workshop/tree/master/src/katas#kata-4---child-components">Instructions</a>
            </td>
        </tr>
        <tr>
            <td>5 - Services</td>
            <td>Enforce separation of concerns with data fetchin' services.</td>
            <td><a href="katas/5">Services</a></td>
            <td><a href="katas/5-completed">View completed</a></td>
            <td>
                <a href="https://github.com/schneidenbach/Angular2-AspNetCore-TypeScript-Workshop/tree/master/src/katas#kata-5---services">Instructions</a>
            </td>
        </tr>
        <tr>
            <td>6 - RxJS and Http</td>
            <td>Supercharge your service usin' story with the ability to make HTTP calls from Angular 2.</td>
            <td><a href="katas/6">RxJS and Http</a></td>
            <td><a href="katas/6-completed">View completed</a></td>
            <td>
                <a href="https://github.com/schneidenbach/Angular2-AspNetCore-TypeScript-Workshop/tree/master/src/katas#kata-6---rxjs-observables-and-http">Instructions</a>
            </td>
        </tr>
    </table>
    `
})
export class HomeComponent {}