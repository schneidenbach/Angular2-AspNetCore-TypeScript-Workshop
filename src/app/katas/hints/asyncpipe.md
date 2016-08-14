#### HINT: Async pipe

The async pipe will automatically subscribe to and emit the result of an Observable or promise attached to it.

```typescript
@Component({
	providers: [EmployeeService],
	template: `
		<div *ngFor="let employee in employeesObservable | async">
			...display some info...
		</div>
`
})
export class MyComponent implements OnInit {
	employeesObservable: Observable<Employee>;
	constructor(private employeeService: EmployeeService) {}

	ngOnInit() {
		this.employeesObservable = this.employeeService.getEmployees();
	}
}
```