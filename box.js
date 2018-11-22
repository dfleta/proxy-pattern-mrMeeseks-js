
/**
 * Clase Mr Meeseeks
 */

function MrMeeseeks() {
    this.message = "I'm Mr Meeseeks! Look at meeee!";
}

MrMeeseeks.prototype.speak = function() {
    return this.message;
};

// singleton de MrMeeseeks

MrMeeseeks.singleton = function() {

    let prototipo = new MrMeeseeks();

    return {
        get : function() {
            return Object.create(prototipo);
        }
    };
};


/**
 * clase Box
 */

function Box() {
    this.name = "Rick's box";
}

Box.prototype.createMrMeeseeks = function() {
    return Object.create(MrMeeseeks.singleton().get());
};

Box.prototype.pushButton = function(reality) {
    reality.push(this.createMrMeeseeks());
};

// singleton de Box
function getBox() {
    
    const boxInstance = new Box();

    return { 
        get :function get() {
            return boxInstance;
        }
    };
}


/**
 * Testing
 */


// node.js modules
exports.singletonBox = function() {
    return getBox();
};









