"use strict";

// Weird Javascript #1 - it asks global scope for height. Global scope says: ummm... no but here I just created it for you.
// ps this isn't allowed in strict mode. We call this leakage of global variables.

// JS is Weird...
function weird() {
	height = 50;
	return console.log(height);
}

weird();

var heyhey = function doodle() {
	//do something
	return console.log("hhhhh");
};

heyhey();
doodle();
