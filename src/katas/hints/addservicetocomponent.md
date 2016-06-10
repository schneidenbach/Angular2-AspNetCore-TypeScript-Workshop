### HINT: Add a service to a component

Once created, services are very simple to add to components.

1. Import your newly created service.
2. Add it to the list of providers on the component.
3. Add the service to the component's constructor.

#### Import
```typescript
import {MyService} from "./myservice";
```

#### Add to providers
```typescript
@Component({
	providers: [MyService]
})
export class MyComponent {}
```

#### Add the service to the component's constructor
```typescript
@Component({
	providers: [MyService]
})
export class MyComponent {
	constructor(private myService: MyService) {}
}
```
