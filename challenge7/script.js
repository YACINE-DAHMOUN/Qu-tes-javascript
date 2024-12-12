
function calcTip(bills) {
    let tip 

    if (bills <= 50 && bills >= 300) {
        tip = bills * 0.15;
    }else
    {
        tip = bills * 0.20;
    }
   let total = bills + tip;
   return [{'facture' : bills, 'pourboire' : tip, 'total' : total}];
    
}
const bills = [125, 555, 44];
for (let i = 0; i < bills.length; i++) {
    console.log(calcTip(bills[i]));
}