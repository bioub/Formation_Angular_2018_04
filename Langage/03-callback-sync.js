const nbs = [2, 3, 4];

// ES5.1 (functionnal programming)
nbs
  .filter((nb) => nb % 2 === 0)
  .map((nb) => nb ** 2)
  .forEach((nb, i) => console.log(nb, i));

console.log('Fin');

function setTimeoutSync(cb, delay) {
  const debut = Date.now();

  while (Date.now() - debut < delay);

  cb();
}

for (var i = 0; i < 3; i++) {
  setTimeoutSync(() => {
    console.log(i);
  }, 1000);
}

// pile d'appels
// ^
// |
// |
// |
// |                         log   log
// |=> - => - =>   => - =>   =>  - =>
// |filter       - map     - forEach - log
// +---------------------------------------------------------> temps
// Sortie :                  4     16  Fin
