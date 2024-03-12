const letters = ['a', 'b', 'c'];

letters.forEach(letter => {
  const btn = document.getElementById(`${letter}-btn`);
  const hideBtn = document.getElementById(`${letter}-hide-btn`);
  const card = document.getElementById(`${letter}-card`);

  btn.addEventListener("click", function () {
    card.style.visibility = "inherit";
  });

  hideBtn.addEventListener("click", function () {
    card.style.visibility = "hidden";
  });
});
