# Katas

This part of the repo contains all of the code examples that you will be completing during the workshop.

## What is a kata?
According to Wikipedia:

> Kata (型 or 形 literally: "form"?), a Japanese word, are detailed choreographed patterns of movements practised either solo or in pairs. The term form is used for the corresponding concept in non-Japanese martial arts in general. ([source](https://en.wikipedia.org/wiki/Kata))

For our purposes, a kata is simply a coding exercise.  It's a term that's kind of in vogue, typically in scenarios for solving very specific problems with a specific output.

## What Katas are we doing?

Good question!

### Kata 1 - Hello World Plus
**Objectives:**

* Construct a basic Angular 2 component, including assigning a selector and template.
* Use interpolation (`{{ }}` expressions) to display data in your component.
* Start your Angular 2 application.

This one will be a follow-along kata!  No specific instructions per se.

### Kata 2 - Components and templating

**Objectives:**

* Learn about the advantages of Web Components and how they relate to Angular 2 components.
* Use either the `template` or `templateUrl` properties on a component to store your component HTML.
* Use the `\*ngFor` directive to display lists of data.
* Hide and show elements conditionally using the `\*ngIf` directive.
* Wire events to elements inside of your components.
* Learn about two-way binding with ngModel.

**Instructions:**
You've been asked to update a small SPA that displays workshop data for an upcoming conference.

* Move the component HTML from the component definition into a separate HTML file and point the component to that HTML file.
* Display the array of workshops (the workshops property of your component) in your view.  The workshop name, start time, speaker and course number should be displayed.
* Add a button in each row that, when clicked, displays an element with the list of students from that course.

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
* For negative dollar amounts, color the dollar amount text red. (HINT: ternary expressions can be used to determine truthyness!)
* Apply the "warning" class to the expense row if the expense is unapproved.  (An expense is considered approved if the ApprovedBy property is truthy.)
* Display the Approved By first and last name, in uppercase.  (Replace that ugly JSON display!)
* Format the Expense Date like this: MM-dd-yyyy
* At the top of the expense app, add a text box that binds (in a two-way fashion!) to the userName on your component.

**Hints:**

* [Pipes basics](hints/pipes.md "Pipes alter the display of interpolated expressions.  Click for more info!")
* [Styles and CSS classes](hints/styles.md "Too much goodness to put into a tooltip.  Click for more info!")
* [Two-way binding with ngModel](hints/ngmodel.md "ngModel expressions bind an input to a component property.  Remember to use the box of bananas syntax: [(ngModel)]="firstName" Click for an example!")

### Kata 4 - Nested components

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
* Have the parent component subscribe to the expenseApproved event - when the transmitted expense is approved, set its ApprovedBy property to the `name` property. 

**Take it a step farther**

* Make the Expense Amount in the child component an input textbox.  THE CATCH?  No two-way binding, which means no ngModel!
* Instead, have two buttons - Save and Cancel.  Save will transmit an expenseAmountChanged event that can be subscribed to.  Cancel resets the textbox to the original expense amount.

### Kata 5 - Services
**Objectives:**

* Learn how to leverage services inside of your Angular 2 application.
* Use dependency injection to add your service to your component.

**Instructions**

You continue to impress by separating all of the concerns.  Your next task is to separate your expense data into a separate data store.

* Create a service that returns the expense data that is currently on your ExpenseList component.
* Inject the newly created service into the ExpenseList component.
* Modify your component to read the data from your new service and remove the old data.

### Kata 6 - RxJS, Observables and HTTP

**Objectives:**

* Learn the differences between Observables and Promises.
* Learn how to use Observables in your Angular 2 application.
* Use the Angular 2 HTTP Service to communicate with an HTTP API.
* Use the async pipe to display data.