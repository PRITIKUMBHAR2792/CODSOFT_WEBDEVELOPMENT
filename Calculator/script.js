const screen = document.getElementById('screen');

function press(val) {
  screen.textContent += val;
}

function clearScreen() {
  screen.textContent = '';
}

function calculate() {
  try {
    const expression = screen.textContent
      .replace(/π/g, 'Math.PI')
      .replace(/e/g, 'Math.E')
      .replace(/sin/g, 'Math.sin')
      .replace(/cos/g, 'Math.cos')
      .replace(/tan/g, 'Math.tan')
      .replace(/log/g, 'Math.log10')
      .replace(/sqrt/g, 'Math.sqrt')
      .replace(/exp/g, 'Math.exp');

    screen.textContent = eval(expression);
  } catch (e) {
    screen.textContent = 'Error';
  }
}
