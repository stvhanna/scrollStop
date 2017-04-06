/*! scrollStop.js | (c) 2017 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/scrollStop */
/**
 * Run functions after scrolling has stopped
 * @param  {Function} callback The function to run after scrolling
 */
var scrollStop = function ( callback ) {

	// Make sure a valid callback was provided
	if ( !callback || Object.prototype.toString.call( callback ) !== '[object Function]' ) return;

	// Setup scrolling variable
	var isScrolling;

	// Listen for scroll events
	window.addEventListener('scroll', function ( event ) {

		// Clear our timeout throughout the scroll
		window.clearTimeout( isScrolling );

		// Set a timeout to run after scrolling ends
		isScrolling = setTimeout(function() {

			// Run the callback
			callback();

		}, 66);

	}, false);

};
