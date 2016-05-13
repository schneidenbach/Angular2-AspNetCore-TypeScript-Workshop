import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Course} from './course';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CourseService {
    constructor(private http: Http){}
    
    getCourses(): Observable<Array<Course>> {
        var get = this.http.get("api/Courses");        
        return get.map(r => r.json())
    }
}