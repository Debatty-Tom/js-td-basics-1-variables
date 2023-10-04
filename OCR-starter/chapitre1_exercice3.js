// Prédiction de résultat
/*
Affichez dans la console le résutat de l'opérateur "+" dans les différentes cas de figure
avec les valeurs 4 et 5 selon qu'elles sont de type nombre ou de type chaîne  :
- 4 et 5 sont toutes deux de type nombres :
	* quelle opération réalise l'opérateur "+" dans ce cas ?
	* quel est le résulat de l'opération ?
- 4 et 5 sont toutes deux de type chaîne :
	* quelle opération réalise l'opérateur "+" dans ce cas ?
	* quel est le résulat de l'opération ?
- 4 est de type chaîne et 5 est de type nombre :
	* quelle opération réalise l'opérateur "+" dans ce cas ?
	* quel est le résulat de l'opération ?
- que se passe-t-il si on entoure toute l'expression (VALEUR OPÉRANDE VALEUR) de guillemets ? Pourquoi ?
*/

const somme = 4+5;
console.log(`l'opération est alors une somme et le résultat est ${somme}`)
const chaine = '4' + '5';
console.log(`l'opération met alors les 2 caractères les uns à cotés des autres ce qui donne ${chaine}`)
const mixte = '4' + 5;
console.log(`l'opération ne donne rien car on ne doit pas mélanger 2 types de valeurs, le résultat est donc ${mixte}`);
const test = 'const mixte = \'4\' + 5;';
console.log(`si on entoure toute l'expression par des guillemets, elle devient alors une chaine de caractères car les guillemets permettent au programme de reconnaitre une chaine de caractères. Cela donne donc ${test}`)
