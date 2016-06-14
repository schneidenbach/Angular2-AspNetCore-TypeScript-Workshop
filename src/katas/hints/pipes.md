### HINT: Pipe basics

Pipes are used to modify the output of interpolated expressions.  For example, they can be used to format numbers with currency symbols or change the display of dates.

For example, here is a date that is being modified by the `date` pipe.

```html
{{ myDate | date }}
```

Several of the built-in pipes require arguments other than the interpolated expression.  For example, the currency pipe takes up to three additional arguments: the currency type, whether or not to display the associated currency symbol, and a number formatter (see [this hint](numberformatting.md) for how the number formatting string works.)  Arguments are separated by colons `:`.

```html
{{ myNumber | currency:"USD":true:"4.2-2" }}
```

Note that arguments are expressions - they can be bound to component properties or given literals (the example above uses literals.)

#### Common pipes

| Pipe      | Description                                                       | Arguments                                                                                                                                                                                  | Example                                      |
|-----------|-------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------|
| uppercase | Transforms text to uppercase.                                     | None                                                                                                                                                                                       | `{{ "Spencer" | uppercase }}`                |
| lowercase | Transforms text to lowercase                                      | None                                                                                                                                                                                       | `{{ firstName | lowercase }}`                |
| number    | Alters how a number is displayed                                  | [Number format string](numberformatting.md) (e.g. 1.2-3)                                                                                                                                                          | `{{ amount | number:"1.2-3" }}`              |
| currency  | Alters the display of a number to conform to a currency standard. | <ul><li>The currency standard (e.g. USD.) Conforms to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).</li><li>Expression to determine whether or not to display the currency symbol (defaults to false.)</li><li>[Number format string](numberformatting.md) (e.g. 1.2-3)</li></ul> | `{{ amount | currency:"USD":true:"1.2-3" }}` |

Pipes can also be chained.  This is useful but will not be demonstrated in this workshop.

```html
{{ mydate | date | uppercase }}
```