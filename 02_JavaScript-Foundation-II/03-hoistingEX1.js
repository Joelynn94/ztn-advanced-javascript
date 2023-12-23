a();

// function declaration gets hoisted
function a() {
	console.log("Hi");
}

// function declaration get rewritten in memory
function a() {
	console.log("Bye");
}
