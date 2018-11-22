

function Box() {
    this.name = "Rick's box";

}


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





