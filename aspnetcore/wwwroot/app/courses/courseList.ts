import {Component, OnInit} from '@angular/core';
import {CourseService} from './courseService';
import {Course} from './course';

@Component({
    selector: 'course-list',
    template:`
    <div>
        <h3>Course List</h3>
        <div *ngFor="let course of courses">
            {{course.Name}}
        </div>
    </div>
  `,
  providers: [CourseService]
})
export class CourseListComponent implements OnInit {
    courses: Array<Course>;
    constructor(private courseService: CourseService) {}
    
    ngOnInit () {
        this.courseService.getCourses().subscribe(courses => this.courses = courses);
    }
}