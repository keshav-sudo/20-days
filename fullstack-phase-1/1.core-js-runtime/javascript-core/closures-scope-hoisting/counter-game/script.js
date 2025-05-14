(() => {
  var count = 0;

  var countdisplay = document.getElementById("count");
  var incbtn = document.getElementById("increment");
  var dcbtn = document.getElementById("decrement");
  var resetbtn = document.getElementById("reset");

  update();

  function update() {
    countdisplay.textContent = count;
  }

  function increment() {
    count++;
    update();
  }

  function decrement() {
    count--;
    update();
  }

  function reset() {
    count = 0;
    update();
  }

  incbtn.addEventListener("click", increment);
  dcbtn.addEventListener("click", decrement);
  resetbtn.addEventListener("click", reset);
})();
