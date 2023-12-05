![Splash](./splash.jpg)
# markdown-component
A simple HTML Component for rendering unsanitized markdown.

## Caution
As I said: for ease of use I do not sanitize the markdown -- use appropriately. 

## How to use

Markdown component uses the [Marked](https://github.com/markedjs/marked) library to parse markdown in a tidy web component. Include the markdown-component.js file in a script tag and use the mark-down tag. 

```html
  <script type="module" src="https://lnsy-dev.github.io/markdown-component/dist/mark-down-component.min.js"></script>
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

## Github

https://github.com/lnsy-dev/markdown-component

## Hire Me 

https://lnsy.dev

## Prior Work

Uses Marked library: https://github.com/markedjs/marked

