### HINT: \*ngFor directive
ngFor is case sensitive and the syntax is exactly like ES6/TypeScripts for loop: `let obj of list`.  Note the "of", not "in" like in C#!

Example:

Component:
```typescript
@Component({...})
export class AppComponent {
	employees: Employee[] = [{FirstName: "Spencer", LastName: "S."},
							  {FirstName: "George", LastName: "G."}];
}
```

Template:
```html
<div *ngFor="let employee of employees">
	{{ employee.FirstName }} {{ employee.LastName }}
</div>
```