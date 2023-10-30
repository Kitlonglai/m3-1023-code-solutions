# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  to write asynchronous functions that look like sychronous code
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  with await, js will pause function execution until promises settles, but with promises and then, the function will continue to execute but js wont execute then callback until promise settles
- When do you use `async`?
  used before a function statement to return a promise
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  inside a async function to pause function execution until promise is resolved/rejected, not used for synchronous functions
- How do you handle errors with `await`?
  using try/catch blocks
- What do `try`, `catch` and `throw` do? When do you use them?
  they are error handlers. try to test block for erros, catch to handle error, and throw to create error messages
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  execution wont wait for promise to be settled
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async await to be able to read and debug easier

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
