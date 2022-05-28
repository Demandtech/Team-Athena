//Number 1
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
let adjective = "big"
 
const sentence1 = "The"+" " + adjective +" "+ noun ;
const sentence2 = `The ${adjective} ${noun}  ${verb}`
const sentence3 = "The" + " " + adjective + " " + noun +" "+ "can "+ verb;
const sentence4 = `The ${adjective} ${noun} ${verb} away`;
const sentence5 = `I have a ${adjective} ${noun}  ${verb}`;

//Number 5
function myFunction(a, b){
    console.log(a%b)
}

myFunction(20, 3);

//Number 6

function quadratic(a, x, y){
     a= x + y;
     x = a;
     y = a + x;
     console.log(a);
     console.log(x);
      console.log(y);
}

quadratic(5, 10, 2);

//Number 7

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks =
    "The" + " " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb; 

console.log(wordBlanks);









   


