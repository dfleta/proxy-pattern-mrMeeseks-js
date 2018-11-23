
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
// el prototipo no cambia
var mrMeeseeks = box.createMrMeeseeks();
// console.log(mrMeeseeks.speak());

var mrMeeseeks2 = box.createMrMeeseeks();
mrMeeseeks2.message = "el segundo";
// console.log(mrMeeseeks.speak());
console.assert(mrMeeseeks !== mrMeeseeks2);
console.assert(mrMeeseeks.message != mrMeeseeks2.message);

var proto = box.getProtoMeeseks();
console.assert(proto.message == "I'm Mr Meeseeks! Look at meeee!");

// creamos Mr Meeseeks con la caja
var reality = [];

box.pushButton(reality);
console.assert(reality.length == 1);

console.log("Rick: Open Jerry's stupid mayonnaise jar");

/*
var accion = function open(object) {
    let local = object;
    function execute() {
            return "open " + object;
    }
    return execute;
};

var deseo = accion("tarro");
console.log(deseo());
*/

var lastMrMeeseeks = reality.length - 1;
reality[lastMrMeeseeks].formulateRequest(
                            function open(object) {
                                let local = object;
                                function execute() {
                                        return "open " + object;
                                }
                                return execute;
                            },        
                            "Jerry's stupid mayonnaise jar");

reality[lastMrMeeseeks].fulfillRequest();

/*
box.pushButton(reality);
console.assert(reality.length == 2);*/
/*
for(let mrMee in reality) {
    reality[mrMee].speak();
}*/






