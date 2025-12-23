let names = [];

function addName() {
  const input = document.getElementById("nameInput");
  const name = input.value.trim();

  if (name && !names.includes(name)) {
    names.push(name);
    updateList();
    input.value = "";
  }
}

function updateList() {
  const list = document.getElementById("nameList");
  list.innerHTML = "";
  names.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    list.appendChild(li);
  });
}

function generateSanta() {
  if (names.length < 2) {
    alert("Add at least 2 people!");
    return;
  }

  let shuffled = [...names];
  do {
    shuffled.sort(() => Math.random() - 0.5);
  } while (shuffled.some((name, i) => name === names[i]));

  let output = "";
  for (let i = 0; i < names.length; i++) {
    output += `${names[i]} ➝ ${shuffled[i]}<br>`;
  }

  document.getElementById("result").innerHTML = output;
}
