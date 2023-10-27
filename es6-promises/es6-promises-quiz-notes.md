# es6-promises-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the Event Queue model of Promises?
  handling asynchronous operations using event loop and task queue, which measns that promises will have a result in the future and when created, will be appended to the promise queue. Callbacks are queued to be executed later on, once promise settles.
- What are the three states a Promise can be in?
  pending, fulfilled, and rejected
- How do you handle the fulfillment of a Promise?
  with the then method which is executed immediated after promise is fulfilled with resolve
- How do you handle the rejection of a Promise?
  using catch which is executed immediately after a promise's reject method is called

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
