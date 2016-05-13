import {Component} from '@angular/core';
import {CourseListComponent} from './courses/courseList';

@Component({
    selector: 'my-app',
    template:`
  <course-list></course-list>
  `,
  directives: [CourseListComponent]
})
export class AppComponent {
    public title = 'Inquire within';
} 
