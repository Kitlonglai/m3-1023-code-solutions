# express-hello-world-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Express middleware?
  functions that have access to request and response objects and the next middleware function in the cycle.
- What is Express middleware useful for?
  executes any code, makes changes to request and response objects, ends request-response cycle, and calls the next middleware function in the stack
- How do you mount a middleware with an Express application?
  using app.use method to add middleware to the app and app.use method to execute the functions
- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  request object for properties and methods sent by the request, response object http response from the request, and next function for executing the next middleware

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
