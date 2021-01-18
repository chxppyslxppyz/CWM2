//? Object Literals
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log('draw');
    }
};
circle.draw();

//? FACTORIES - uses "return" in function to return the classes
// FACTORY function 
circle.draw();

function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}
const circle = createCircle(1)
circle.draw();

//? CONSTRUCTORS - applies the "this" and "new" operators to organize classes and object
// uppercase . removing "new" will show the Window object. 
function Circle(radius) {
    console.log('this', this); 
this.radius = radius; 
this.draw = function() {
    console.log('draw'); 
}
    }
const anotherOne = new Circle(1); 

/* this = Circle {
draw: ()
radius: 1
*/

//* when we call a "new" operator to call a function 3 things happen 
/* 
1. creates empty object 
2. set "this" to point to that object
3. return the object from the Circle function
*/ 
//* both patterns work. 