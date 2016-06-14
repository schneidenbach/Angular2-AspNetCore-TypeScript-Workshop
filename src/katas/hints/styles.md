### HINT: Styles and CSS classes

You can adjust the style or add/remove classes on an element easily!

#### Styles

Styles can be bound to a property of an element, like so:

Component:
```typescript
@Component({...})
export class AppComponent {
	myColor: string = "red";
}
```

Template:
```html
<div [style.color]="myColor">
	Hello world!
</div>
```

This binds the value of the `myColor` expression to the `style.color` property on the element - in this case, it returns the color `red`.

#### CSS Classes
Assume you have a CSS class called `highlighted`.

```css
.highlighted {
	background-color: #999999;
}
```

Classes can be bound to elements one of two ways:

* using the property binding syntax (`[class.highlighted]="hasName"`) where `hasName` is an expression which is evaluated for truthyness.  If the expression is truthy, the class is added to that element.

Component:
```typescript
@Component({...})
export class AppComponent {
	hasName: string = true;
}
```

Template:
```html
<div [class.highlighted]="hasName">
	Hello world!
</div>
```

* using ngClass, which takes an object whose key is the class name and whose value is an expression that is evaluated for truthyness.

Component:
```typescript
@Component({...})
export class AppComponent {
	hasName: string = true;
}
```

Template:
```html
<div [ngClass]="{highlighted: hasName}">
	Hello world!
</div>
```