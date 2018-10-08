/** 
 * @author Yan Bobrus
 */

//CONSTANTS//
const TEXT = [
    "This is an apple.",
    "Text will go here...",
    "And repeat.",
    "But if you set const \"REPEAT\" to false, then it ends."
];

const FIELD = document.getElementById("text");

const REPEAT = true; //FREE to change.

//VARIABLES//
let textNumber = -1;

//FUNCTIONS//
function print(text) {
    FIELD.innerHTML = text;
}

function setOpacity(opacity) {
    FIELD.style.opacity = opacity;
}

function appleHandler() {
    textNumber++;
    if (REPEAT) {
        if (textNumber >= TEXT.length)
            textNumber = 0;
    } else {
        // TODO: end code
    }
    setOpacity(0);
    setTimeout(function(){
        print(TEXT[textNumber]);
        setOpacity(1);
    }, 200);
}

//MAIN CODE//
appleHandler();