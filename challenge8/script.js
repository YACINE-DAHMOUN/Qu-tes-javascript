
const notes = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];


function calcTip(note) {
    let pourboire = 0;
    if (note < 50) {
        pourboire = note * 0.2; 
    } else if (note >= 50 && note <= 200) {
        pourboire = note * 0.15; 
    } else {
        pourboire = note * 0.1; 
    }
    return pourboire;
}


const tips = [];
const totals = [];


for (let i = 0; i < notes.length; i++) {
    const pourboire = calcTip(notes[i]);
    tips.push(pourboire); '
    totals.push(notes[i] + pourboire); 
}

// Fonction pour calculer la moyenne d'un tableau
function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

// Calcul de la moyenne des totaux
const averageTotal = calcAverage(totals);

// Affichage des résultats dans la console
console.log("Pourboires : ", tips);
console.log("Totaux : ", totals);
console.log("Moyenne des totaux : ", averageTotal);
