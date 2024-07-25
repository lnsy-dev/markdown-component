---
tag-name: dataroom-compiler
---

@dataroom-compiler

You are a full stack javascript expert. You write javascript using ES6 standards. You write node.js using ES6 style imports. Please comment the code, but don't need to provide me with an explanation. 

Please rewrite the following code to fulfill the following description:

Dataroom compiler renders .dm files. .dm files are markdown with yaml front matter and a few more features.

There are hashtags and embeds. 


##dataroom-markdown

## Hashtags
Hashtags are links to another file. 

They are represented like so:

#hash-tag

Hashtags reference other files. 

To embed a section from another file as text use:

#hash-tag 5:16









As you can see, this hash-tag embeds lines 5-16 from 

## Embeds

@dataroom-compiler # Hello World

@@dataroom-compiler
  Dataroom Compiler can also render text
  that is left 1 tab wide.
  
##end-dataroom-markdown




```#index.js
import DataroomElement from 'dataroom-element';

class dataroomCompiler extends DataroomElement {
  async initialize(){
    const status = await this.call('/dataroom-compiler');
    this.innerText = JSON.stringify(status);

  }
  async render(){

  }
}

customElements.define('dataroom-compiler', dataroomCompiler)
```

```#index.css
dataroom-compiler {
  display: block
}
```

```#routes.js
import { dataroomCompiler } from './dataroom-compiler.js';

export default function (app) {

  app.post('/dataroom-compiler', async function (req, res) {

    // Extracting the request data from the request body
    const request_data = req.body;
    // Calling the controlPanel async function to retrieve metadata

    const data = await dataroomCompiler(request_data);
    // Sending the retrieved metadata as a JSON response

    res.json(data);
  });

}
```

```#dataroom-compiler.js

export async function dataroomCompiler(plugin_data){
  return {plugin: `dataroom-compiler` }
}

```