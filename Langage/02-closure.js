function externe(msg) {
  // Portée de Closure (portée sauvegardée)
  // 2 conditions :
  // 1 - 2 fonction imbriquées (ou une fonction dans un bloc ES6)
  // 2 - la fonction interne soit appelée en dehors
  function interne() {
    console.log(msg);
  }
  return interne;
}

const helloFct = externe('Hello');



helloFct();

// pile d'appels
// ^
// |
// |
// |
// |
// |
// |externe - interne/hello
// +---------------------------------------------------------> temps
//


/*
function createButton(value) {
  const btn = document.createElement('button');
  btn.innerText = value;
  btn.addEventListener('click', () => {
    // btn et value existent toujours
  });
}
*/

// Dans 1 sec : 3 3 3
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// Dans 1 sec : 0 1 2
for (var i = 0; i < 3; i++) {
  setTimeout(externe(i), 1000);
}

// Dans 1 sec : 0 1 2
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
