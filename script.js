//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('button');

  let expression = '';

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const buttonValue = button.textContent;

      if (buttonValue === '=') {
        try {
          const result = eval(expression);
          display.value = result;
          expression = '';
        } catch (error) {
          display.value = 'Error';
          expression = '';
        }
      } else if (buttonValue === 'C') {
        display.value = '';
        expression = '';
      } else if (buttonValue === 'back') {
        expression = expression.slice(0, -1);
        display.value = expression;
      } else {
        expression += buttonValue;
        display.value += buttonValue;
      }
    });
  });
});
