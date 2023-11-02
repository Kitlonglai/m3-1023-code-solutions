# http-messages-recap-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a client?
  request content/service from server, initiate communication sessions with servers and await incoming requests
- What is a server?
  runs one or more server programs that share resources with clients
- Which HTTP method does a browser issue to a web server when you visit a URL?
  the get method
- What is on the first line of an HTTP **request** message?
  request start line line with the http method, request target, and http version
- What is on the first line of an HTTP **response** message?
  status line with protocol version, status code, and status text
- What are HTTP headers?
  allow client and server to pass info with http request or response. consists of case-insensitive name followed by colon and value.
- Is a body required for a valid HTTP message?
  no it is not required such as for the get method, that only request for resource, but is needed for post and put, where the body is needed to send data to server, specified by headers content type and length.

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
