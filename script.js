const females = ["Sarah", "Hafsa", "Ohood"];
const males = ["Yousef", "Qais", "Saeed", "Faisal"];

let femaleAssignments = {};
let maleAssignments = {};
let currentGender = "";

// Shuffle helper
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Generate assignments ONCE
function generateAssignments(group) {
  let shuffled;
  do {
    shuffled = shuffle([...group]);
  } while (shuffled.some((name, i) => name === group[i]));

  let assignments = {};
  group.forEach((name, i) => {
    assignments[name] = shuffled[i];
  });

  return assignments;
}

// Generate when page loads
femaleAssignments = generateAssignments(females);
maleAssignments = generateAssignments(males);

function selectGender(gender) {
  currentGender = gender;

  document.getElementById("genderSection").classList.add("hidden");
  document.getElementById("nameSection").classList.remove("hidden");

  const dropdown = document.getElementById("nameDropdown");
  dropdown.innerHTML = "";

  const group = gender === "female" ? females : males;

  group.forEach(name => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    dropdown.appendChild(option);
  });
}

function revealAssignment() {
  const name = document.getElementById("nameDropdown").value;
  const assignments =
    currentGender === "female" ? femaleAssignments : maleAssignments;

  document.getElementById("nameSection").classList.add("hidden");
  document.getElementById("resultSection").classList.remove("hidden");

  document.getElementById("resultText").innerHTML =
    `${name}, you are buying a gift for <br>🎁 <strong>${assignments[name]}</strong>`;
}

function reset() {
  document.getElementById("resultSection").classList.add("hidden");
  document.getElementById("genderSection").classList.remove("hidden");
}
