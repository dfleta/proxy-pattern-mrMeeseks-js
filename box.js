


function MrMeeseeks() {
    this.id = "the one";
}

MrMeeseeks.prototype.toString = function() {
    return this.id;
}

/**
 * clase Box
 */

function Box() {
    this.name = "Rick's box";
}

Box.prototype.createMrMeeseeks = function() {
    let prototipo = new MrMeeseeks();
    return Object.create(prototipo);
}

Box.prototype.pushButton = function(reality) {
    reality.push(this.createMrMeeseeks());
}

// singleton
function getBox() {
    
    let boxInstance = new Box();

    return { 
        get :function get() {
            return boxInstance;
        }
    }
}

/**
 * Testing
 */

// node.js modules
exports.singletonBox = function() {
    return getBox();
}





