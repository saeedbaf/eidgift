const females = ["Sarah", "Hafsa", "Ohood"];
const males = ["Yousef", "Qais", "Saeed", "Faisal"];

function shuffleAndAssign(group) {
  let shuffled;
  do {
    shuffled = [...group].sort(() => Math.random() - 0.5);
  } while (shuffled.some((name, i) => name === group[i]));

  return shuffled;
}

function selectGroup(gender) {
  const group = gender === "female" ? females : males;
  const assignments = shuffleAndAssign(group);

  // Pick a random person to reveal
  const index = Math.floor(Math.random() * group.length);
  const giver = group[index];
  const receiver = assignments[index];

  document.getElementById("choice").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  document.getElementById("assignment").innerHTML =
    `${giver}, you are buying a gift for <br>🎁 <strong>${receiver}</strong>`;
}

function reset() {
  document.getElementById("result").classList.add("hidden");
  document.getElementById("choice").classList.remove("hidden");
}
