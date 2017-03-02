# scrollStop
A simple function for detecting when someone stops scrolling.

[Download scrollStop](https://github.com/cferdinandi/scrollStop/archive/master.zip)


## Getting Started

Compiled and production-ready code can be found in the `dist` directory. The `src` directory contains development code.

### 1. Include scrollStop on your site.

Include the code in your script, or load it as an external file.

```js
var scrollStop = function ( callback ) {
	...
}
```

### 2. Run your code when scrolling stops as a callback

```js
// Example
scrollStop(function () {
	console.log( 'Scrolling has stopped.' );
});
```



## Browser Compatibility

scrollStop works in all modern browsers, and IE 9 and above. You can test browser compatibility by checking for `addEventListener` support.

```js
if ( 'addEventListener' in window ) {
	// Your code...
}
```



## How to Contribute

Please review the [contributing guidelines](CONTRIBUTING.md).



## License

The code is available under the [MIT License](LICENSE.md).
