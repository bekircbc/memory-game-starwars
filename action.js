//Randoming card order
var randoming = document.getElementsByName("memory");
for (var i = 0; i < randoming.length; i++) {
  var num = Math.floor(Math.random() * 12);
  randoming[i].style.order = num;
}

// Variable declerations
var frontface = document.querySelectorAll(".frontface");
var memorycards = document.getElementsByClassName("memorycard");
var hover = document.querySelectorAll(".memorycard");
var source = "";
var flipped = false;
var count = 0;
var firstone;
var win = 0;
var backCount = 26;

//Main Function
function myFunction(b) {
  if (count == 0 || count == 1) {
    makeUnvisible(b);
    //Counting back
    backCount--;
    document.getElementById("backCounter").innerHTML = backCount;

    // Assigning first stone to use for the next step
    if (flipped == false) {
      firstone = b;
    }

    // When matching is true or false conditions
    if (flipped == true && source == b.nextElementSibling.src) {
      source = "";
      flipped = false;
      count = 0;
      win += 2;
      removeListener(b);
      removeListener(firstone);
    } else {
      source = b.nextElementSibling.src;
      count += 1;
      flipped = true;
      //Delaying the card flipping when it is wrong
      if (count == 2) {
        setTimeout(function() {
          makeVisible(b);
          makeVisible(firstone);
          count = 0;
          flipped = false;
        }, 700);
      }
    }
    // Condition to win the game
    if (win == 16) {
      document.getElementById("backCounter").innerHTML = "YOU WIN!!";
    }
    // Deciding game is over
    if ((backCount == 0) & (win != 16)) {
      for (var i = 0; i < frontface.length; i++) {
        hover[i].className = "memorycardGameOver";
        frontface[i].onclick = "";
      }

      return (document.getElementById("backCounter").innerHTML = "YOU LOSE!!");
    }
  }
}
// Visibility functions
function makeVisible(a) {
  a.style.zIndex = 3;
}
function makeUnvisible(a) {
  a.style.zIndex = -3;
}
// Remove listener function
function removeListener(b) {
  b.removeEventListener("click", myFunction);
}

// Reseting function
function resetme() {
  window.location.reload(false);
}
