### HINT: Services overview

Services are a great way to provide data to components and enforce separation of concerns in your application.  They are essentially classes with one slight modification: a decorator to indicate to Angular 2 that the service is available for injection into other services and components.

1. Create your service class
2. Import the @Injectable decorator and add it to your service class

#### Create
```typescript
export class EmployeeService {
	getEmployees(): Employee[] {
		return [
			{FirstName:"Spencer", LastName: "Schneidenbach"},
			{FirstName:"Gary", LastName: "Dell'abate"},
		];
	}
}
```

#### Decorate
```typescript
import {Injectable} from "@angular/core";

@Injectable()
export class EmployeeService {...}
```

You can then use your service on a component, as in [this example](addservicetocomponent.md).