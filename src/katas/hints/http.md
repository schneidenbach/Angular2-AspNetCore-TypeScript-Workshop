### HINT: Angular's HTTP Service

Angular provides an Http service that allows us to make HTTP calls asynchronously.  There are a few steps to implement them in your services.

1. Add the HTTP_PROVIDERS to your bootstrap function.
2. Import the Http service to your custom service.
3. Import a few RxJS-specific functions (Observable and map.)
4. Make the HTTP call.
5. Subscribe to the Observable!

#### Add HTTP_PROVIDERS to bootstrap
```typescript
import {HTTP_PROVIDERS} from "@angular/http";

bootstrap(AppComponent, [HTTP_PROVIDERS]);
```

#### Import the Http service to your custom service
```typescript
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class EmployeeService {
	constructor(private http: Http) {}
}
```

#### Import a few RxJS-specific functions.
```typescript
import {Observable} from "rxjs";
import "rxjs/add/operator/map";
```

#### Make the HTTP call
```typescript
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class EmployeeService {
	constructor(private http: Http) {}
	
	getEmployees(): Observable<Employee[]> {	//type hint
		return this.http.get("api/Employee")
						.map(response => response.json());
	}
}
```

Note that the type hint is not necessary, but it helps ensure your service consumer knows he's getting back an Observable containing an array of Employees, which is always useful for auto-completion and compile-time checking.

#### Inject and subscribe!
Using a [lifecycle hook](lifecyclehooks.md) to get data.

```typescript
@Component({
	providers: [EmployeeService]
})
export class MyComponent implements OnInit {
	employees: Employee[];
	constructor(private employeeService: EmployeeService) {}

	ngOnInit() {
		this.employeeService.getEmployees()
							.subscribe(emps => this.employees = emps);
	}
}
```