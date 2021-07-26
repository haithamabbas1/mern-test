// // one
// console.log(hello);                                   
// var hello = 'world'; //predicted outcome is: undefined  

// // AFTER HOISTING BY THE INTERPRETER
// // var hello;
// // console.log(hello); // logs undefined

// //two
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// } //Predicted outcome is: magnet

// //three 
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }       
// console.log(brendan);
// //Predicted outocme is: Super cool

// // //Four 
// // var food = 'chicken';
// // console.log(food);
// // eat();
// // function eat(){
// //     food = 'half-chicken';
// //     console.log(food);
// //     var food = 'gone';
// // }//predicted outocme: Chicken, Half-Chicken


// //five
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// // var mean; // mean = undefined
// // mean(); // mean is not a function

//six
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);//predicted outcome: undefined, rock, r&b, disco

//seven 
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo); //predicted outcome: san jose, seattle, burbank, san jose


console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}//will not work
