const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;


const avgDauphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);

const avgDauphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

const checkWinner = (avgDauphins, avgKoalas) => {
  if (avgDauphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDauphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDauphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDauphins})`);
  } 
};

checkWinner(avgDauphins1, avgKoalas1);
checkWinner(avgDauphins2, avgKoalas2);