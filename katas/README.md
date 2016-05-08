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

### Kata 2 - Components and templating

**Objectives:**

* Learn about the advantages of Web Components and how they relate to Angular 2 components.
* Use either the template or templateUrl properties on a component to store your component HTML.
* Use the ngFor directive to display lists of data.
* Hide and show elements conditionally using the ngIf directive.
* Wire events to HTML elements inside of your components.
* Bind to attributes and properties on HTML elements inside of your components, including `class` and `style`.

**Instructions:**
You've been asked to make a small SPA that displays course data for an upcoming conference.

* Move the component HTML from the component definition into a separate HTML file and point the component to that HTML file.
* Display the array of courses (the courses property of your component) in your view.  The course name, start date, author and course number should be displayed.
* Add a button in each row that, when clicked, displays an element with a list of students from that course.
* Highlight the course's row a different color when that course is selected. 

HINT: Components can be stored in HTML files and referenced using the templateHtml property in the Component decorator.
HINT: \*ngFor is case sensitive and the syntax is exactly like ES6/TypeScripts: var *obj* of *list*
HINT: Event handlers (such as click) reference functions within the component.  Also, you must use 

### Kata 3 - Built-in directives and pipes

**Objectives:**

* Use the ngClass directive to change what classes are attached to an element.
* Learn about two-way binding with ngModel.
* Use ngStyle to style HTML elements within components.
* Use pipes to format dates, strings, and numbers.

**Instructions:**

A junior programmer in your division started on an Angular 2 app to display expense data.  However, he didn't format the data inside the grid properly (we all know managers love proper formats), which means that you get to use your newfound knowledge of Angular 2 pipes to format it for them!

* Display all dollar amounts using the currency pipe.
* Display all percent amounts using the percent pipe.
* For negative dollar amounts, color the dollar amount text red. 
* Apply the "danger" class to the expense row if the expense is unapproved.  (An expense is considered approved if the approvedBy property is truthy.)
* Display the Approved By property in uppercase.
* Format the Expense Date like this: MM-dd-yyyy

### Kata 4 - Nested components

**Objectives:**

* Learn how to create child components for your Angular 2 application.
* Bind properties from your parent component to your child component.
* Emit events from your child component.
* Use the parent component to subscribe to events from your child component.

**Instructions:**

Your boss is so impressed with your skills with the expense app, he's asked you to make it even cooler.  Being the awesome programmer that you are, you've decided to take matters into your own hands and start separating concerns on the page.  

### Kata 5 - Services
**Objectives:**

* Learn how to leverage services to read and write data inside of your Angular 2 application.
* Use dependency injection to add your service to your component.


### Kata 6 - ASP.NET Core
**Objectives:**

* Use models to represent and store your data.
* Use controllers to send and receive data using HTTP.

### Kata 7 - RxJS, Observables and HTTP

**Objectives:**

* Learn the differences between Observables and Promises.
* Learn how to use Observables in your Angular 2 application.
* Create a RESTful API using ASP.NET Core.
* Use the Angular 2 HTTP Service to communicate with an HTTP API.
* Use the async pipe to display data.
* Use component lifecycle hooks to trigger events when components are created and destroyed. 