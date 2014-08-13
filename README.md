Knockout with Web Components
==================

A small hello-world application that shows how [knockout.js](http://knockoutjs.com/) can be used inside of web components.

##Why?

It's hard to share code between different MVVM implementations. It would be nice to be able to use web components everywhere and to be able to use different MVVM implementations inside each web component. This is an attempt to get knockout.js working inside of a web component.

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
