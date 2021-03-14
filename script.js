/*
Ohne diese beiden Variablen würde der score nicht erhöht werden, sondern immer auf 0 bleiben. 
*/
var block = document.getElementById("block");
var counter = 0;

/*
Hier wird die Funktion jump erzeugt. Man kann jetzt sozusagen unendlich oft springen. Die 300 sind die Millisekunden, wie lange unsere Figur springt, also 0.3 Sekunden, wie vorher angegeben. 
*/
function jump() {
  if (character.classList == "animate") {
    return;
  }
  character.classList.add("animate");
  setTimeout(function() {
    character.classList.remove("animate");
  }, 300);
}

/*
Diese Funktion kontrolliert alle 10 Millisekunden, also fast durchgehend, ob du verloren hast, oder ob du noch am Leben bist. 
*/
var checkDead = setInterval(function() {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
    block.style.animation = "none";
    alert("You lost. score: " + Math.floor(counter / 100));
    counter = 0;
    block.style.animation = "block 1s infinite linear";
  } else {
    counter++;
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
  }
}, 10);
