### HINT: Lifecycle hooks

Lifecycle hooks allow you to run code as your component is constructed and destructed, among others.  For our example, we're going to focus on OnInit, which is triggered right after your component is constructed.

To use it, simply:

1. Import the OnInit interface.
2. Add it to your component.
3. Implement the ngOnInit() method.

#### Import
```typescript
import {OnInit} from "@angular/core";
```

#### Implement
```typescript
@Component({...})
export class MyComponent implements OnInit {
	ngOnInit() {

	}
}
```

**FUN FACT:** the first step is totally optional.  If your component has a method called ngOnInit (with that exact spelling!) that function will be executed when the component is loaded.  We use OnInit to provide compile-time checking.