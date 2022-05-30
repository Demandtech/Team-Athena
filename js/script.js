///Number 1
document.getElementById("team").style.color = "#03446a";

//Number 2
const athena = ["Toba", "Demand", "Jhena", "Obums", "shytemi", "Emmanuel", "Mitems" ];
console.log(athena[1]);

//Number 3
let  info = {
   firstName: "Rasheed",
   lastName: "Adekunle",
   bestMovie: "The Wire",
   bestFood: "Rice",
   complexion: "fair skin",
   birthMonth: "September",
   state: "Osun State",
   groupName: "Athena"
};

console.log(info.bestMovie);

//Number 4
let noun = "dog";
let verb  =  "ran"
let adjective = "small"
 
console.log( "The"+" " + adjective +" "+ noun );
console.log(`The ${adjective} ${noun}  ${verb}`);
console.log( "The" + " " + adjective + " " + noun + " " + verb + " " + "home");
console.log(`The ${adjective} ${noun} ${verb} away`);
console.log(`I have a ${adjective} ${noun}`);

//Number 5
function myFunction(a, b){
   console.log(a%b)
}

myFunction(20, 3);

//Number 6

let root1 
let root2
function quad(a,b,c) {
       let numerator = b+b-(4 * a * c);
       if (numerator>0){
            root1 = (-b + Math.sqrt(numerator)/(2*a))
             root2 = (-b - Math.sqrt(numerator) / (2 * a))
             console.log(root1,  root2);
       }
       else{
           console.log("unsolved numerator is equal to" +" " + numerator)
       }
       
    }

quad(9, 4, 6);

//Number 7

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks =
    "The" + " " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb; 

console.log(wordBlanks);

//number 8
function circleArea(radius){
    const PI = 3.142
    const area = radius * Math.PI
     console.log(area);
}

circleArea(9)

//number 9

function simpleInterest(x, y, z){
     console.log((x  * y * z) /100)
}

simpleInterest(2400, 5, 6)

// number 10

console.log(10%4)

//number 11
let meritWeight = 78;
let nutjobWeight = 92;

let meritHeight = 1.69;
let nutjobHeight = 1.95;

function bmi(m1, h1, m2, h2){
    meritBMI = m1 / h1 **2;
    nutjobBMI = m2 / h2 ** 2;
    if(meritBMI>nutjobBMI){
         console.log("true")
    }
    else(console.log("false"))
}
    answer = bmi(meritWeight, meritHeight, nutjobHeight,nutjobWeight);





   


