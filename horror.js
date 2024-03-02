document.addEventListener("DOMContentLoaded", function() {
  const intentosMaximos = 5;
  let intentos = intentosMaximos;
  const palabras = [
    "Ghost", "Witch", "Coven", "Bones", "Haunt", "Scream", "Spook", "Curse", "Blood", "Gloom",
    "Grave", "Shadow", "Grim", "Creep", "Eerie", "Howls", "Crypt", "Wails", "Demons", "Fiend",
    "Chills", "Scare", "Death", "Clown", "Fear", "Ghouls", "Vamp", "Mummy", "Warts", "Beads",
    "Fangs", "Shriek", "Gory", "Ogres", "Skele", "Chasm", "Hexes", "Slime", "Freak", "Wound",
    "Oozes", "Stare", "Creak", "Wreck", "Chops", "Gorge", "Phant", "Grues", "Snarl", "Fiery",
    "Hades", "Wight", "Abhor", "Abode", "Agony", "Beady", "Hound", "Spine", "Spire", "Quirk",
    "Jolts", "Caged", "Manic", "Taint", "Evoke", "Mired", "Feral", "Gored", "Scald", "Quell",
    "Stalk", "Vexed", "Snuff", "Wroth", "Wreak", "Abyss", "Shred", "Reeks", "Beast", "Blare",
    "Brute", "Choke", "Crone", "Gaunt", "Leech", "Mirth", "Nixes", "Ogre", "Prowl", "Quake",
    "Risen", "Slink", "Talon", "Wrack", "Magic", "Virus", "Haste", "Heart", "Night", "Piran",
    "Plagu", "Screw", "Shade", "Shark", "Shook", "Siren", "Skull", "Sneak", "Squid", "Storm",
    "Terror", "Thorn", "Troll", "Vampy", "Zombi"
  ];
  let palabra = "";

  function getWord() {
    const randomIndex = Math.floor(Math.random() * palabras.length);
    palabra = palabras[randomIndex].toLowerCase();

    iniciarJuego();
  }

  function iniciarJuego() {
    const guessButton = document.getElementById("guess-button");
    guessButton.addEventListener("click", intentar);

    function intentar() {
      const input = document.getElementById("guess-input");
      const valor = input.value.toLowerCase();
      input.value = "";

      if (valor === palabra) {
        terminar("¡GANASTE!");
        return;
      }

      const grid = document.getElementById("grid");
      const row = document.createElement("div");
      row.className = "row";

      for (let i = 0; i < palabra.length; i++) {
        const span = document.createElement("span");
        span.className = "letter";

        if (i < valor.length) {
          if (valor[i] === palabra[i]) {
            span.innerHTML = valor[i];
            span.style.backgroundColor = "green";
          } else if (palabra.includes(valor[i])) {
            span.innerHTML = valor[i];
            span.style.backgroundColor = "orange";
          } else {
            span.innerHTML = valor[i];
            span.style.backgroundColor = "gray";
          }
        }

        row.appendChild(span);
      }

      grid.appendChild(row);

      intentos--;
      if (intentos === 0) {
        terminar("¡PERDISTE! La palabra era: " + palabra);
      }
    }

    function terminar(mensaje) {
      const input = document.getElementById("guess-input");
      input.disabled = true;
      guessButton.disabled = true;
      const guesses = document.getElementById("grid");
      const message = document.createElement("p");
      message.textContent = mensaje;
      message.style.color = "red";
      guesses.appendChild(message);
    }
  }

  getWord();
});