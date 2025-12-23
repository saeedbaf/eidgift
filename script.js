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

// 🔒 FIXED ASSIGNMENTS
const femaleAssignments = {
  Sarah: "Ohood",
  Ohood: "Hafsa",
  Hafsa: "Sarah"
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
    `<strong>${assignments[name]}</strong> حتهدي   ${name} `;
}

function reset() {
  document.getElementById("resultSection").classList.add("hidden");
  document.getElementById("genderSection").classList.remove("hidden");
}
