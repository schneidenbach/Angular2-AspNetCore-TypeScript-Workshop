### HINT: Two-way binding with ngModel

`ngModel` is a directive that allows you to bind the view with a property on your component.  It uses the "box of bananas" syntax on the element to bind to an expression.

Component:
```typescript
@Component({...})
export class AppComponent {
	firstName: string = "Spencer";
}
```

Template:
```html
<div>
	What is your name? <br>
	<input type="text" [(ngModel)]="firstName" />
</div>
<div>
	Your name is: {{ firstName }}
</div>
``` 

In this example, every time the input text is changed, the property of the component is updated.  That change is then reflected in the view in the `{{ firstName }}` expression.