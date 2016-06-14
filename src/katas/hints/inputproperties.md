### HINT: @Input properties in child components

Like elements inside of components, child components can have properties bound from the parent component.  There are two steps to adding a property:

1. Add an @Input property to the child component.
2. Bind the parent property to the child using the [] syntax.

Example:

We're celebrating the Fourth of July, and what better way to celebrate than to have fireworks?  Here we have a celebration app with some fireworks that need some color and a sound.  We'll give them these properties courtesy of the parent.

1. Add input property

```typescript
import {Input} from "@angular/core";

@Component({
	selector: "my-firework",
	template: `
This firework is <span [style.color]="color">{{ color }}</span>
and makes a {{ sound }} sound!
`
})
export class MyFireworkComponent {
	@Input() color: string;
	@Input() sound: string;
}
```

2. Bind the propert(ies) in the parent

```typescript
import {MyFireworkComponent} from "./myfirework.component";

@Component({
	selector: "my-app",
	directives: [MyFireworkComponent],		//don't forget to add it here!
	template: `
<h1>Fourth of July!</h1>
<my-firework [color]="myRedColor" [sound]="'boom'"></my-firework>
<my-firework [color]="'white'" [sound]="myWhooshSound"></my-firework>
<my-firework [color]="'blue'" [sound]="'bang'"></my-firework>

`
})
export class AppComponent {
	myRedColor: string = "red";
	myWhooshSound: string = "whoosh";
}
```