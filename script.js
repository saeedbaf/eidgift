const females = ["Sarah", "Hafsa", "Ohood"];
const males = ["Yousef", "Qais", "Saeed", "Faisal"];

const codes = {
  Sarah: "123456",
  Hafsa: "234567",
  Ohood: "345678",
  Yousef: "456789",
  Qais: "567890",
  Saeed: "678901",
  Faisal: "789012"
};

let femaleAssignments = {};
let maleAssignments = {};
let currentGender = "";

// Shuffle helper
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Generate assignments once
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

// Generate on load
femaleAssignments = generateAssignments(females);
maleAssignments = generateAssignments(males);

function selectGender(gender) {
  currentGender = gender;
  document.getElementById("genderSection").classList.add("hidden");
  document.getElementById("nameSection").classList.remove("hidden");

  const dropdown = document.getElementById("nameDropdown");
  dropdown.innerHTML = "";
  document.getElementById("error").textContent = "";
  document.getElementById("codeInput").value = "";

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
  const enteredCode = document.getElementById("codeInput").value;
  const error = document.getElementById("error");

  if (enteredCode !== codes[name]) {
    error.textContent = "Incorrect code ❌";
    return;
  }

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
