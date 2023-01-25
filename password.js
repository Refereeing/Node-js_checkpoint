var generator = require('generate-password');
var password = generator.generate({
	length: 7,
	numbers: true
});

// 'uEyMTw32v9'
console.log("The generated password is: "+password);
