import {Component} from '@angular/core';
import {Workshop} from './workshop';

@Component({
    selector: 'course-app',
    template: `
        <table class="table">
            <tr>
                <th>
                    Workshop Name
                </th>
                <th>
                    Author
                </th>
                <th>
                    Number
                </th>
                <th>
                    Start Time
                </th>
                <th>Actions</th>
            </tr>
            <tr>
                <td colspan="4">
                    <h2>TODO: add workshop data</h2>
                </td>
                <td>
                    TODO: add show student list button
                </td>
            </tr>
        </table>
        
        <div>
            <h2>TODO: show student data when workshop is selected</h2>
        </div>
        `
})
export class AppComponent {
    //TODO: set this property when a workshop is selected
    selectedWorkshop: Workshop;
    
    workshops: Workshop[] = [{ Name: "Using QBASIC on the Web", Speaker: "Barney S.", Number: "WS883", StartTime: "10:00 AM", Students: ["Frankie D.", "Marcus D.", "Kenny O."] },
                             { Name: "JavaScript: the better parts", Speaker: "Adam S.", Number: "WS112", StartTime: "8:00 AM", Students: ["Gary L.", "Travis G.", "David P."] },
                             { Name: "Using Waterfall over Agile", Speaker: "Alton B.", Number: "WS311", StartTime: "10:00 AM", Students: ["Jordie F.", "Margie T.", "John B."] },
                             { Name: "Building SPAs with Angular 2", Speaker: "Spencer S.", Number: "WS100", StartTime: "11:00 AM", Students: ["George D.", "Alan T.", "Janey W."] },];
}
