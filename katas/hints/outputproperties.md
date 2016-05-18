### HINT: Child component events using @Output properties

Child components are able to send events up to their parent, if the parent is subscribed to them!  Child components can have properties decorated with the @Output decorator that are of type EventEmitter.  EventEmitter can have 0 or 1 type parameters that determine the type of the event being transmitted.

Let's improve upon the Firework example from the [@Input properties hint](inputproperties.md) by adding a button that allows us to set the firework alight!  Once that's done, the parent will record that we set off that firework.  (We'll also wrap the color and sound properties into a Firework interface so that we are able to transmit both properties to the parent.  Remember, EventEmitter can have 0 or 1 event properties!

1. Import the EventEmitter and Output class in your child component.
2. Add an EventEmitter property to the child component with an @Output() decorator.
3. Declare a function in the parent that takes a Firework as a parameter - this will be the function that is triggered when the child event is triggered.  (I call it a subscriber function!)
3. Bind the parent event to the child using the () syntax.  (The event parameter is always $event within the () syntax.)

[See the full demo here](http://plnkr.co/edit/D0Id3ZZo3U1IhAhxVoop?p=preview)

Example:

1. Import EventEmitter and Output
2. Add EventEmitter property

```typescript
import {Input, Output} from "@angular/core";

@Component({
	selector: "my-firework",
	template: `
This firework is <span [style.color]="color">{{ color }}</span>
and makes a {{ sound }} sound!

<button (click)="setOff()">Set off firework!</button>
`
})
export class MyFireworkComponent {
	@Input() color: string;
	@Input() sound: string;
	@Output() fireworkSetOff = new EventEmitter<Firework>();

	setOff() {
		this.fireworkSetOff.emit({
			color: this.color,
			sound: this.sound
		});
	}
}

export interface Firework {
	color: string;
	sound: string;
}
```

3. Declare subscribing function
4. Bind subscribing function to child component

```typescript
import {MyFireworkComponent, Firework} from "./myfirework.component";

@Component({
	selector: "my-app",
	directives: [MyFireworkComponent],		//don't forget to add it here!
	template: `
<h1>Fourth of July!</h1>

<my-firework [color]="myRedColor" [sound]="'boom'" (fireworkSetOff)="onFireworkSetOff($event)"></my-firework>
<my-firework [color]="'white'" [sound]="myWhooshSound" (fireworkSetOff)="onFireworkSetOff($event)"></my-firework>
<my-firework [color]="'blue'" [sound]="'bang'" (fireworkSetOff)="onFireworkSetOff($event)"></my-firework>
<hr>
<div *ngFor="let explodedFirework of explodedFireworks">
	{{ explodedFirework | uppercase }}
</div>
`
})
export class AppComponent {
	myRedColor: string = "red";
	myWhooshSound: string = "whoosh";
	explodedFireworks: string[] = [];

	onFireworkSetOff(firework: Firework) {
		explodedFireworks.push(`A ${firework.color} firework exploded and made a ${firework.sound} sound!`);
	}
}
```