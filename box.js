
/**
 * clase Box
 */

// node.js modules
// importamos el singleton de la clase MrMeeseeks
var singletonMrMeeseeks = require('./mrMeeseeks');


function Box() {
    this.name = "Rick's box";
    this.mrMeeseeks = null;
}

Box.prototype.createMrMeeseeks = function() {
    if (! this.mrMeeseeks) {
        this.mrMeeseeks = singletonMrMeeseeks.singleMrMeeseeks().get();
    }
    return Object.create(this.mrMeeseeks);
};

Box.prototype.pressButton = function(reality) {
    let mrMee = this.createMrMeeseeks();
    mrMee.speakOnCreate();
    reality.push(mrMee);
};

Box.prototype.getProtoMeeseks = function() {
    return this.mrMeeseeks;
};

// singleton de Box
function singleBox() {
    
    const boxInstance = new Box();

    return { 
        getBox :function getBox() {
            return boxInstance;
        }
    };
}


/**
 * Testing e importacion del singleton
 * de la clase Box
 */

// node.js modules
exports.singletonBox = function() {
    return singleBox();
};






