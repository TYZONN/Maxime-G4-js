//exercice if esle

var a = 4;
var b = 4;
var c = 3;

if (a === b) {
    console.log("c’est égal");
} else if (c < b && a + c !== 3) {
    console.log("ok");
} else {
    console.log("raté");
}


//exercice switch

var a = 4;
var b = 4;
var c = 3;

switch (a) {
    case b:
        console.log("égal à b");
        break;
    case c:
        console.log("égal à c");
        break;
    default:
        console.log("égal à rien");
}


//exercice for

var a = 5

for (var i = 0; i < a; i++) {
    console.log("oklm");
}


// exercice While:

var a = 3;
while (a < 9) {
    if (a === 7) {
        a++;
        continue; 
    }

    if (a === 8) {
        break; 
    }

    console.log(a);
    a++;
}
console.log('j ai cassé la boucle au bout de '+ a +'tours')


// exercice fonction

var a = "Jean";
var b = "Paul";
var result;

function checkName(name1, name2) {
    if (name1 === name2) {
        return true;
    } else {
        return false;
    }
}

result = checkName(a, b);
console.log(result);


//exercice tableau

var names = [];

names.push('Vincent','Paul','Arthur');

names.forEach(name=> {
    name += "va à la pêche"
    console.log(name);
})

//exercice objet

var student = {
    name: "Kevin",
    favoriteFood: "Sushi",
    city: "Montigny le Bretonneux"
}

var values = Object.values(student);
var count = values.reduce((acc,value)=>acc+value.length,0)

console.log(count)

