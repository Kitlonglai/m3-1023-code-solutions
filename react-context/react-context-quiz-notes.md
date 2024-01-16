# react-context-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of React "context"?
  to be able to pass info from parent component to any component in the tree below it without using props
- What values can be stored in context?
  objects, strings, functions
- How do you create context and make it available to the components?
  use createContext() to create context object, wrap component tree with context.provider component, pass value prop
- How do you access the context values?
  useContext hook or context provider and warp component tree where you want context to be accessible
- When would you use context? (in addition to the best answer: "rarely")
  to avoid prop drilling and when many components on different nest levels need to access data

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
