const females = ["سارة", "حفصة", "الهام","دولي","إسراة","آية","آلاء","سحر","اماني","امال","ستي نور","ستي عائشة","هند","منال باكريم","منال بافرط","عائشة","خديجة"];
const males = ["Yousef", "Qais", "Saeed", "Faisal"];

const codes = {
  "سارة": "1",
  "حفصة": "1",
  "الهام": "1",
  "دولي": "1",
  "إسراة": "1",
  "آية": "1",
  "آلاء": "1",
  "سحر": "1",
  "اماني": "1",
  "امال": "1",
  "ستي نور": "1",
  "ستي عائشة": "10",
  "هند": "1",
  "منال باكريم": "1",
  "منال بافرط": "1",
  "عائشة": "1",
  "خديجة": "1",
  Yousef: "456789",
  Qais: "567890",
  Saeed: "678901",
  Faisal: "789012"
};

// 🔒 FIXED ASSIGNMENTS
const femaleAssignments = {
  "سارة": "ستي عايشة",
  "حفصة": "آية",
  "الهام": "سارة",
  "دولي": "ستي نور",
  "إسراة": "سحر",
  "آية": "حفصة",
  "آلاء": "منال باكريم",
  "سحر": "دولي",
  "اماني": "آلاء",
  "امال": "خديجة",
  "ستي نور": "هند",
  "ستي عائشة": "امال",
  "هند": "إسراة",
  "منال باكريم": "منال بافرط",
  "منال بافرط": "الهام",
  "عائشة": "اماني",
  "خديجة": "عائشة",
};

const maleAssignments = {
  Yousef: "Faisal",
  Faisal: "Qais",
  Qais: "Saeed",
  Saeed: "Yousef"
};

let currentGender = "";

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
    ` ${name} حتهدي <strong>${assignments[name]}</strong> `;
}

function reset() {
  document.getElementById("resultSection").classList.add("hidden");
  document.getElementById("genderSection").classList.remove("hidden");
}
