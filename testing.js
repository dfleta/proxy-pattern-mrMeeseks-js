
// node.js modules
var importaBox = require('./box');

var factoriaBox = importaBox.singletonBox();
var box = factoriaBox.get();
console.log(box.name);

var box2 = factoriaBox.get();
console.log(box2.name);

//  las cajas son la misma
console.assert(box === box2);
box2.name = "Jen's box";
console.log(box.name);

var mrMeeseeks = box.createMrMeeseeks();
console.log(mrMeeseeks.message);

// los Meeseeks son distintos
var mrMeeseeks2 = box.createMrMeeseeks();
mrMeeseeks2.message = "el segundo";
console.log(mrMeeseeks.speak());

var reality = [];
box.pushButton(reality);
console.log(reality.length);




