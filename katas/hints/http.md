### HINT: Angular's HTTP Service

Angular provides an Http service that allows us to make HTTP calls asynchronously.  There are a few steps to implement them in your services.

1. Add the HTTP_PROVIDERS to your bootstrap function.
2. Import the Http service to your custom service.
3. Import a few RxJS-specific functions (Observable and map.)
4. Subscribe to the Observable!

#### Add HTTP_PROVIDERS to bootstrap
```typescript
import {HTTP_PROVIDERS} from "@angular/http";

bootstrap(AppComponent, [HTTP_PROVIDERS]);
```

#### Import the Http service to your custom s
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
