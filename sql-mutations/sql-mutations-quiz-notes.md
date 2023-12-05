# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?
  create read update delete
- How do you add a row to a SQL table?
  insert keyword
- How do you add multiple rows to a SQL table at once?
  with the values keyword followed by having 2 or more tuples of values wrapped in parenthesis seperated by commas
- How do you update rows in a database table?
  update keyword
- How do you delete rows from a database table?
  delete keyword
- Why is it important to include a `where` clause in your `update` and `delete` statements?
  so you dont accidentally delete or update the entire table
- How do you accidentally delete or update all rows in a table?
  if you forget the where clause
- How do you get back the modified row without a separate `select` statement?
  returning \*
- Why did you get an error when trying to delete certain films?
  due to some films being referenced in other tables within the database

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
