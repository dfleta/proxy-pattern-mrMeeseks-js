
/**
 * Clase Mr Meeseeks
 */

function MrMeeseeks() {
    this.message = "I'm Mr Meeseeks! Look at meeee!";
}

MrMeeseeks.prototype.toString = function() {
    return this.message;
};

/**
 * clase Box
 */

function Box() {
    this.name = "Rick's box";
}

Box.prototype.createMrMeeseeks = function() {
    let prototipo = new MrMeeseeks();
    return Object.create(prototipo);
};

Box.prototype.pushButton = function(reality) {
    reality.push(this.createMrMeeseeks());
};

// singleton de Box
function getBox() {
    
    let boxInstance = new Box();

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





