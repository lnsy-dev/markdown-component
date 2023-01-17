# markdown-component
A simple HTML Component for rendering unsanitized markdown.

## Caution
As I said: for ease of use I do not sanitize the markdown -- use appropriately. 

## How to use

Markdown component uses the Marked library to parse markdown in a tidy web component. Include the markdown-component.js file in a script tag and use the 
mark-down tag. 

```html
  <script type="module" src="./markdown-component.js"></script>
  <mark-down>
    # Rendered Markdown 
    This is some markdown you want to render
  </mark-down>
``` 

### External Markdown

Use the src tag to load an external file and render it like so: 


```html
  <mark-down src="./test-markdown.md"></mark-down>
```
