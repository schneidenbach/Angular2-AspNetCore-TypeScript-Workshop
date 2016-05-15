### HINT: \*ngIf directive

\*ngIf takes one argument: an expression.  The element is  rendered if the expression is truthy; otherwise, the element is not rendered.

Example:

Component:
```typescript
@Component({...})
export class AppComponent {
	name: string = "Spencer";
	job: string = undefined;
}
```

Template:
```html
<div *ngIf="name">
	{{ name }} says hello!
</div>
<div *ngIf="job">
	My job is {{ job }}!
</div>
```

In this example, the first element will be rendered because the `name` property on the component is truthy.  The second element will not.