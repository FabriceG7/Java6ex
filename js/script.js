/ Création de la fonction de calcul et action onclick
document.getElementById('submit').onclick = function calculation() {
  // Récupération des valeurs
  let shoeSize = document.getElementById('shoeSize').value;
  let yearBirth = document.getElementById('yearBirth').value;
  let result = (shoeSize * 2 + 5) * 50 - yearBirth + 1769;
  let result1 = shoeSize * 2;
  result1 += 5;
  result1 *= 50;
  result1 -= yearBirth;
  result1 += 1769;
  // création de l'alerte
  alert(result1);
};
