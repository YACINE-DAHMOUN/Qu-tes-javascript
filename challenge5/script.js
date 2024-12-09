function calCulerPourboir(note) {
  
    let porboire = (note >= 50 && note <= 300) ? note * 0.15 : note * 0.20;

    let totalFacture = note + porboire;

    console.log (`La note est de ${note}, le pourboire est de ${porboire} et le total de la facture est de ${totalFacture}`);
}
calCulerPourboir(275);
calCulerPourboir(40);
calCulerPourboir(430);