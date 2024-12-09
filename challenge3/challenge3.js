// exercise 1 :
let poidDeBernard = 78;
let tailleDeBernard = 1.69;
let poidDemarcel = 92;
let tailleDemarcel = 1.95;

let imcDeBernard = poidDeBernard / (tailleDeBernard * tailleDeBernard);
let imcDemarcel = poidDemarcel / (tailleDemarcel * tailleDemarcel);

let bernardHigherImc = ((imcDeBernard > imcDemarcel) ? true : false);
console.log(bernardHigherImc);

poidDeBernard = 95;
tailleDeBernard = 1.88;
poidDemarcel = 85;
tailleDemarcel = 1.76;

imcDeBernard = poidDeBernard / (tailleDeBernard * tailleDeBernard);
imcDemarcel = poidDemarcel / (tailleDemarcel * tailleDemarcel);

bernardHigherImc = ((imcDeBernard > imcDemarcel) ? true : false);

console.log(bernardHigherImc);


//exercise 2 :

if (bernardHigherImc) {
    console.log("Bernard a un IMC :" + imcDeBernard + " plus élevé que l'IMC de Marcel: " + imcDemarcel);
} else {    
    console.log ("Marcel a un IMC :" + imcDemarcel + " plus élevé que l'IMC de Bernard: " + imcDeBernard);
}

//exeercice 3 :

if(imcDeBernard < 27) {
    console.log('Bernard : poid normal')
}
if(imcDemarcel > 27) {
    console.log('Marcel : surpoid ')
}
