### HINT: Number format strings in pipes

Several pipes take a number format as an argument.  Number formats are broken down into three parts:

* The minimum number of digits displayed before the decimal place
* The minimum number of digits displayed in the decimal place
* The maximum number of digits displayed in the decimal place

The first and second parts of the number format are separated by a decimal `.` and the second and third parts of the number format are separated by a hyphen `-`.

Example:

Component:
```typescript
@Component({...})
export class AppComponent {
	amount: number = 123.456;
}
```

Template:
```html
<div>
	Your amount is: {{ amount | decimal:"5.1-2" }}
</div>
``` 

This would display: 00,123.47

5 minimum digits before the decimal
At least 1 digit after the decimal
At most 2 digits after the decimal.

Thus, 5.1-2!