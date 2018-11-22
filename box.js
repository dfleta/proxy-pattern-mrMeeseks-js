

function Box() {
    this.name = "caja magica";

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

exports.singletonBox = function() {
    return getBox();
}





