/**
 * Additionne 2 nombre
 * @param {number} a Le premier nombre
 * @param {number} b Le 2e nombre
 * @returns {number} La somme
 */
const sum = (a, b) => a + b;

/** @param {string} prenom */
function hello(prenom) {
  return 'Hello ' + prenom.toUpperCase();
}

for (let i = 0; i < 3; i++) {
  console.log(sum(i, i));
  console.log(hello('Toto'));
}
