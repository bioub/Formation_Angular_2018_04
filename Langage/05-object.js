// Les objets JS sont des systèmes clés / valeurs comme
// - map
// - dictionnary
// - struct
// - associative array
// et pas du tout un concept statique comme en Java ou C#

// on manipule souvent des objets déjà instanciés

// Dans le langage
console.log(typeof Math); // object
console.log(typeof JSON); // object

// Dans le navigateur
console.log(typeof document); // object
console.log(typeof navigator); // object
console.log(typeof window); // object

// Dans Node.js
console.log(typeof process); // object
console.log(typeof global); // object

// Dans MongoDB
console.log(typeof db); // object

// Dans le navigateur et Node.js
console.log(typeof console); // object


// Ajouter des clés / valeurs (extension d'objet)
console.log(Math.sum); // undefined
Math.sum = (a, b) => a + b;
console.log(Math.sum(1, 2)); // 3

// Modifier des clés / valeurs
Math.sum = (a, b) => Number(a) + Number(b);
console.log(Math.sum('1', '2')); // 3

// Supprimer des clés / valeurs
delete Math.sum;
console.log(Math.sum); // undefined

// object literal
// Utilisation :
// objet mono-instancié
// très simple à créer

const coords = {
  x: 10,
  y: 20,
};
coords.z = 30;

console.log(coords.x);

// factory function
// Utilisation :
// objet multi-instancié
// un peu plus sofistiqués
// sans méthodes
// sans types

function getCoords(x, y, z) {
  x = x || 0;
  y = y || 0;
  z = z || 0;

  return {
    x: x,
    y: y,
    z: z,
    getX: function() { return this.x },
  };
}

// ES6
// const getCoords = (x = 0, y = 0, z = 0) => ({x, y, z});

const coords3dA = getCoords(10, 20, 30);
console.log(coords3dA.z); // 30

const coords3dB = getCoords();
console.log(coords3dB.z); // 0

console.log(coords3dA.getX === coords3dB.getX); // false


// constructor function
// Utilisation :
// objet multi-instancié
// un peu plus sofistiqués
// avec méthodes
// avec types
/*
function Coords(x, y, z) {
  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 0;
}

Coords.prototype.getX = function() { return this.x; };
*/
class Coords {
  constructor(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
  }
  getX() { return this.x; }
}

console.log(typeof Coords); // function
console.log(typeof Coords.prototype.getX); // function

const coords3d1 = new Coords(10, 20, 30);
console.log(coords3d1.z); // 30
console.log(coords3d1.getX()); // 10

const coords3d2 = new Coords();
console.log(coords3d2.z); // 0
console.log(coords3d2.getX()); // 0

console.log(coords3d1.getX === coords3d2.getX); // true

console.log(coords3d1 instanceof Coords); // true
console.log(coords3d1 instanceof Object); // true

console.log(coords3d1.hasOwnProperty('x')); // true
console.log(coords3d1.hasOwnProperty('getX')); // false
