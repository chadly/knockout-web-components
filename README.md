Knockout with Web Components
==================

A small hello-world application that shows how [knockout.js](http://knockoutjs.com/) can be used inside of web components.

##Why?

It's hard to share code between different MVVM implementations. It would be nice to be able to use web components as the "glue" between different MVVM implementations. Imagine using [knockout](http://knockoutjs.com/) components together with [react](http://facebook.github.io/react/) components. It works as long as each component is encapsulated and speaks the same "language", e.g. web components.

This is an attempt to get knockout.js working inside of a pure, native web component -- no polyfills.

##How to Run

You will need [grunt-cli](http://gruntjs.com/) installed globally if you don't already have it:

```
npm install grunt-cli -g
```

Install dependencies and start the local web server:

```
npm install
npm start
```

This will open a browser to `localhost:8000` where you can see the demo page.
