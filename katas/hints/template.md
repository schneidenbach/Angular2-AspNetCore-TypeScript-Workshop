### HINT: Components and template/templateHtml

Component HTML can be stored in the `template` property of the `@Component()` declaration OR added to a separate file and referenced on the component using the `templateUrl` property.

If you use the `templateUrl` property, make sure your URL is relative to the path your app is being served from.  For example, if the main page of your app is /index.html and your component and component HTML file are in /app/component/, the URL you will use is still relative from where it's been served from - in this case, it would be:

```
templateUrl: "./app/component/component.html"
```