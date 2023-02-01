// var creates a variable
var a = 25;
a = a - 13;
// note that this is not a-13, becayse it doesnt reassign the value of a
// a now has a value of 12
console.log(a/2);
// a noow has a value of 6
a = "hello";
// a is now being changed to hello
console.log(a + " hello");
Printed: 6 hello hello

for(var i=0; i<10; i++) {
    console.log(i);
    i = i + 3; 
}
    
console.log("outside of the loop " + i);
Output: 0, 4, 8, 12
Printed: outside of the loop 12