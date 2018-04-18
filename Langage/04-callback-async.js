setTimeout(() => {
  console.log('cb1');
}, 500);

setTimeout(() => {
  console.log('cb2');
}, 1000);

setTimeout(() => {
  console.log('cb3');
}, 500);

console.log('Fin');

// pile d'appels
// ^
// |
// |
// |
// |
// |                    idle    log   log
// |st - st - st - log ...⟳... cb1 - cb3 ...⟳... cb2
// +----------------------------0.5---------------1------------> temps
// Sortie :        Fin          cb1   cb3         cb2

// File d'attente (timer) :
