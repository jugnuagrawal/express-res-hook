# express-res-hook
A middleware that gets executed before sending response


## Install

```sh
$ npm i --save express-res-hook
```


## Import

```javascript
const express = require('express');
const resHook = require('express-res-hook');

const app = express();

app.use(resHook(function (data, finish) {
    // Your code, this will execute before sending response
    finish(data);// Needs to be called
}));


app.listen(3000, function () {
    console.log('Server is listening at port', 3000);
});
```