# Katas

This part of the repo contains all of the code examples that you will be completing during the workshop.

## What is a kata?
According to Wikipedia:

> Kata (型 or 形 literally: "form"?), a Japanese word, are detailed choreographed patterns of movements practised either solo or in pairs. The term form is used for the corresponding concept in non-Japanese martial arts in general. ([source](https://en.wikipedia.org/wiki/Kata))

For our purposes, a kata is simply a coding exercise.  It's a term that's kind of in vogue, typically in scenarios for solving very specific problems with a specific output.

## What Katas are we doing?

Good question!

### Kata 1 - Hello World!
**Objectives:**

* Construct a basic Angular 2 component, including assigning a selector and template.
* Use interpolation (`{{ }}` expressions) to display data in your component.
* Start your Angular 2 application.

This one will be a follow-along kata!  No specific instructions per se.

### Kata 2 - Components and templating

**Objectives:**

* Learn about the advantages of Web Components and how they relate to Angular 2 components.
* Use either the `template` or `templateUrl` properties on a component to store your component HTML.
* Use the `*ngFor` directive to display lists of data.
* Hide and show elements conditionally using the `*ngIf` directive.
* Wire events to elements inside of your components.
* Learn about two-way binding with ngModel.

**Instructions:**
You've been tasked with working on a SPA that deals with expense reporting and approval!

* Display the array of expenses (the expenses property of your component) in your view.  The Amount, Amount Reimbursable, Approved By, Description, and Expense Date should be displayed.  (HINT: use the headers on the table to determine where properties go!)
* Add a button in each row that, when clicked, displays an element with the following information from the expense:
	* Expense amount
	* ApprovedBy name
	* Approval comment

**Hints:**

* [Component templates](hints/template.md "Component HTML can be stored in the `template` property of the @Component() declaration OR added to a separate file and referenced on the component using the templateUrl property.")
* [\*ngFor directive](hints/ngfor.md "*ngFor is case sensitive and the syntax is exactly like ES6/TypeScripts for loop: *ngFor="let obj of list".  Note the "of", not "in" like in C#! Click for an example.")
* [\*ngIf directive](hints/ngif.md "*ngIf evaluates an expression and if the expression is truthy, the element is rendered: *ngIf="firstName".  Click for more info!")
* [Event handlers](hints/events.md 'Events are bound to an element using the () syntax: (click)="doSomething()" Click for more info!')

### Kata 3 - Altering display with pipes and styles

**Objectives:**

* Use pipes to format dates, strings, and numbers.
* Use `ngStyle`, `ngClass`, the `style` property, and the `class` property to style your elements.

**Instructions:**

A junior programmer in your division started on an Angular 2 app to display expense data.  However, he didn't format the data inside the grid properly (we all know managers love properly formatted data), which means that you get to use your newfound knowledge of Angular 2 pipes to format the data!  You'll also get to change other aspects of the appearance of some elements, including coloring (we all know managers love colors.)

* Display all dollar amounts in USD using the currency pipe.
* Display all percent amounts using the percent pipe.
* For negative dollar amounts, color the Amount text red. (HINT: ternary expressions can be used to determine truthyness!)
* Apply the "warning" class to the expense row if the expense is unapproved.  (An expense is considered approved if the ApprovedBy property is truthy.)
* Display the Approved By first and last name, in uppercase.  (Replace that ugly JSON display!)  HINT: some ApprovedBy properties are undefined, so you will have to use a special operator inside of your expression to display them... 
* Format the Expense Date using the date pipe.
* At the top of the expense app, add a text box that binds (in a two-way fashion!) to the userName on your component.

**Hints:**

* [Pipes basics](hints/pipes.md "Pipes alter the display of interpolated expressions.  Click for more info!")
* [Styles and CSS classes](hints/styles.md "Too much goodness to put into a tooltip.  Click for more info!")
* [Two-way binding with ngModel](hints/ngmodel.md "ngModel expressions bind an input to a component property.  Remember to use the box of bananas syntax: [(ngModel)]="firstName" Click for an example!")

### Kata 4 - Child components

**Objectives:**

* Learn how to create child components for your Angular 2 application.
* Bind properties from your parent component to your child component.
* Emit events from your child component.
* Use the parent component to subscribe to events from your child component.

**Instructions:**

Your boss is so impressed with your skills with the expense app, he's asked you to make it even cooler - he wants a detail display for the expense that shows the amount and allows the user to approve the expense.  Of course, being the awesome programmer that you are, you've decided to take matters into your own hands and are making sure to separate concerns on the page so you don't end up with the dreaded monolith...

* Create a child component that with the following functionality:
	* An input property that takes an Expense.
	* A properly formatted display of the expense amount.
	* A display of the expense description.
	* An event that can be subscribed to called expenseApproved that transmits the Expense object.
	* A button that allows you to approve the selected expense.  Clicking the button will fire the expenseApproved event and transmit the Expense property that you inputted.
* Add the new child component below the parent component expense table.
* Add a button that selects that expense as the "current expense" (similar to what we did in kata 2.)
* Have the parent component subscribe to the expenseApproved event - when the transmitted expense is approved, set its ApprovedBy property to the `name` property. 

**Take it a step further:**

* Make the Expense Amount in the child component an input textbox.  THE CATCH?  No two-way binding, which means no ngModel!
* Instead, have two buttons - Save and Cancel.  Save will transmit an expenseAmountChanged event that the parent will subscribe to and use to change the amount.  Cancel resets the textbox to the original expense amount.

**Hints:**
* [Child components](hints/childcomponents.md "Child components are components that exist inside of other components.  Click for more info!")
* [@Input properties in child components](hints/inputproperties.md "@Input properties allow you to pass data from your parent to your child component!  Click for more info.")
* [Emitting events from child components using @Output](hints/outputproperties.md "@Output properties allow you to transmit events from the parent to the child!  Click for more info and an example!")

### Kata 5 - Services
**Objectives:**

* Learn how to leverage services inside of your Angular 2 application.
* Use dependency injection to add your service to your component.
* Use lifecycle hooks to perform actions when your components load/unload.

**Instructions**

You continue to impress by separating all of the concerns.  Your next task is to separate your expense data into a separate data store.

* Create a service that returns the expense data that is currently on your ExpenseList component.
* Inject the newly created service into the ExpenseList component.
* Modify your component to read the data from your new service and remove the old data.  HINT: lifecycle hooks would come in handy here!

**Hints:**

* [Services overview](hints/services.md "Services are a great way to provide data to components and enforce separation of concerns in your application.  Click for an example!")
* [Adding a service to a component](hints/addservicetocomponent.md "Services are very easy to add to a component once created.  Click to learn more!")
* [Lifecycle hooks](hints/lifecyclehooks.md "Lifecycle hooks allow you to run events related to your component's life cycle, including creation and destruction.  Click for more info!")

### Kata 6 - RxJS, Observables and HTTP

**Objectives:**

* Learn the differences between Observables and Promises.
* Learn how to use Observables in your Angular 2 application.
* Use the Angular 2 HTTP Service to communicate with an HTTP API.
* Use the async pipe to display data.

**Instructions**

Your data store from the previous example is cool, but your boss that it might not be the best idea to store expense data inside of an Angular 2 component OR service.  (Wild idea, huh?)

Expenses are now stored on a SQL database and are accessible by accessing the `/api/Expenses` endpoint.

(Ok, ok, expenses are actually stored directly in the controller and not in a SQL database - let your suspension of disbelief kick in, will ya?!)

* Remove all expenses from the ExpenseService.
* Add a reference to the angular/http and RxJS libraries.
* Using the HTTP library, make a method that makes a GET call to `/api/Expenses`.
* Using lifecycle hooks, call that service method when your main component loads and display the Expense data.

**Hints:**

* [Angular 2's Http service](hints/http.md "Angular's Http service allows you to make HTTP calls within your Angular 2 application.  Click to learn more!")
* [Async pipe](hints/asyncpipe.md "The async pipe makes it very easy to emit the result of an Observable or promise in your view.  Click for an example!")
