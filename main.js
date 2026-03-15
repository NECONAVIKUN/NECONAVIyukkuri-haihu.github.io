"use strict";
document.getElementById("marisa").addEventListener('click", function() {
  var s = document.getElementById("#marisa_s");
  s.currentTime = 0;
  s.play();
});

document.getElementById("reimu").addEventListener("click", function() {
  var s = document.querySelector("reimu_s");
  s.currentTime = 0;
  s.play();
});
