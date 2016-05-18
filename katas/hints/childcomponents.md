### HINT: Child components

Child components are components that exist inside another component.  These components can have properties that are bound from their parent.

There are three steps to creating a child component:

1. Declare the child component with a template and a selector.
2. Import it to your parent component and add it to the "directives" property.
3. Add the child component's selector to your parent component's template.

Example:

1. Declare

```typescript
@Component({
	selector: "my-child-component",
	template: "<h2>This is a great child component!</h2>"
})
export class MyChildComponent {}
```

2. Import

```typescript
import {MyChildComponent} from "./mychild.component";	//import here!

@Component({
	selector: "my-app",
	template: "<h1>My first Angular 2 app!</h1>"
})
export class AppComponent { }
```

3. Add

```typescript
import {MyChildComponent} from "./mychild.component";

@Component({
	selector: "my-app",
	directives: [MyChildComponent],									//add type reference here!
	template: `
<h1>My first Angular 2 app!</h1>

With our special guest, <my-child-component></my-child-component>`	//selector here!
})
export class AppComponent { }
```