// SpeakGoodBye.js

// Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
( function (window) {
	
	var speakWord = "Good Bye";

	// Create an object, called 'byeSpeaker' to which you will attach
	// the "speak" method and which you will expose to the global context
	var byeSpeaker = {};

	//Rewrite the 'speak' function such that it is attached to the
	// byeSpeaker object instead of being a standalone function.
	byeSpeaker.speak = function (name) {

	  console.log(speakWord + " " + name);
	}

	//Expose the 'byeSpeaker' object to the global scope. Name it
	// 'byeSpeaker' on the global scope as well.
	window.byeSpeaker = byeSpeaker;

})(window);

