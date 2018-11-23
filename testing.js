
// node.js modules
var importaBox = require('./box');

// creamos dos cajas: es la misma por singleton
var factoriaBox = importaBox.singletonBox();
var box = factoriaBox.get();
console.log(box.name);

var box2 = factoriaBox.get();
console.log(box2.name);

//  las cajas son la misma
console.assert(box === box2);
box2.name = "Jen's box";
console.log(box.name);


// creamos dos Meeseeks
// los Meeseeks son distintos
var mrMeeseeks = box.createMrMeeseeks();
// console.log(mrMeeseeks.speak());

var mrMeeseeks2 = box.createMrMeeseeks();
mrMeeseeks2.message = "el segundo";
// console.log(mrMeeseeks.speak());
console.assert(mrMeeseeks !== mrMeeseeks2);

var proto = box.getProtoMeeseks();
console.assert(proto.message == "I'm Mr Meeseeks! Look at meeee!");

// creamos Mr Meeseeks con la caja
var reality = [];
box.pushButton(reality);
box.pushButton(reality);
console.assert(reality.length == 2);
/*
for(let mrMee in reality) {
    console.log(reality[mrMee].speak());
}*/



