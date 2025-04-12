let secret = generateSecret();
let attempts = [];

function generateSecret() {
  const digits = [];
  while (digits.length < 4) {
    const num = Math.floor(Math.random() * 10);
    if (!digits.includes(num)) {
      digits.push(num);
    }
  }
  return digits.join('');
}

function makeGuess() {
  const input = document.getElementById("guessInput");
  const guess = input.value;

  if (!/^\d{4}$/.test(guess) || new Set(guess).size !== 4) {
    alert("Digite 4 dígitos diferentes!");
    return;
  }

  const result = checkGuess(secret, guess);
  attempts.unshift(`${guess} - ${result.bulls} bulls, ${result.cows} cows`);
  renderAttempts();
  input.value = "";
}

function checkGuess(secret, guess) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (guess[i] === secret[i]) {
      bulls++;
    } else if (secret.includes(guess[i])) {
      cows++;
    }
  }

  return { bulls, cows };
}

function renderAttempts() {
  const list = document.getElementById("attemptsList");
  list.innerHTML = "";
  attempts.forEach(attempt => {
    const li = document.createElement("li");
    li.textContent = attempt;
    list.appendChild(li);
  });
}

function revealSecret() {
  alert(`A senha secreta é: ${secret}`);
}
