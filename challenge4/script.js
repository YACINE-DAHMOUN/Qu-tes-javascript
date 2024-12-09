let scoreDauphine = [96, 108, 89];
let scoreKoalas = [88, 91, 110,];

let winner = "";

moyDauphine = (scoreDauphine[0] + scoreDauphine[1] + scoreDauphine[2]) / 3;
moyKoalas = (scoreKoalas[0] + scoreKoalas[1] + scoreKoalas[2]) / 3;

if (moyDauphine > moyKoalas) {
    winner = "Dauphine";
}
else if (moyDauphine < moyKoalas) {
    winner = "Koalas";
}
else {
    winner = "Egalité";
}

console.log("Le gagnant est : " + winner);


scoreDauphine = [97, 112, 101];
scoreKoalas = [109, 95, 123];


moyDauphine = (scoreDauphine[0] + scoreDauphine[1] + scoreDauphine[2]) / 3;
moyKoalas = (scoreKoalas[0] + scoreKoalas[1] + scoreKoalas[2]) / 3;

if (moyDauphine > moyKoalas && moyDauphine >= 100) {
    winner = "Dauphine";
}
else if (moyDauphine < moyKoalas && moyKoalas >= 100) {
    winner = "Koalas";
}
else {
    winner = "Egalité";
}

console.log("Le gagnant est : " + winner);

scoreDauphine = [97, 112, 101];
scoreKoalas = [109, 95, 106];

moyDauphine = (scoreDauphine[0] + scoreDauphine[1] + scoreDauphine[2]) / 3;
moyKoalas = (scoreKoalas[0] + scoreKoalas[1] + scoreKoalas[2]) / 3;

if (moyDauphine > moyKoalas && moyDauphine >= 100) {
    winner = "Dauphine ";
}else if (moyDauphine < moyKoalas && moyKoalas >= 100) {
    winner = "Koalas ";
}else {
    winner = "Egalité";
}

console.log("Le gagnant est : " + winner);