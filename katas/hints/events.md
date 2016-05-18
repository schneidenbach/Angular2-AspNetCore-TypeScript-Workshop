### HINT: Event handlers

Event handlers (such as click) can reference functions within the component OR run a tiny script.  Remember, event handlers use the () syntax to bind events to functions.  All of these are valid uses:

* This binds the click event to the `doSomething()` function within the component
```html
<button (click)="doSomething()">Click me!</button>
```
* This button sets the `employee` property in the component to the `emp` property from within the *ngFor loop
```html
<div *ngFor="let emp in employees">
	<button (click)="employee = emp;">Click me!</button>
</div>	<!-- end of ngFor -->
```