// Submit Part...
const numbers = '1234567890 '.split('');

const emptyPattern = {
  pattern: (value) => value !== '',
  message: 'Can\'t be blank',
};
const numberPattern = {
  pattern: (value) => value.split('').every(digit => numbers.includes(digit)),
  message: 'Wrong format, numbers only',
};

const form = document.getElementById('card-form');

const cardholderNameLabel = document.querySelector('label.card-holder-name');
const cardNumberLabel = document.querySelector('label.card-number');
const cardExpDateLabel = document.querySelector('label.card-exp-date');
const cardCvcLabel = document.querySelector('label.card-cvc');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const iscardholdernameValid = validate({ label: cardholderNameLabel, patterns: [emptyPattern]});
  const iscardNumberValid = validate({ label: cardNumberLabel, patterns: [emptyPattern, numberPattern]});
  const iscardCvcValid = validate({ label: cardCvcLabel, patterns: [emptyPattern]});
  const iscardExpValid = validateExp(cardExpDateLabel, [emptyPattern, numberPattern]);

  const isValid = iscardholdernameValid && iscardNumberValid && iscardCvcValid && iscardExpValid;

  if (!isValid) return;

  appearCompleted();
});

function validate({ label, input, patterns }) {
  input ??= label.querySelector('input');
  const value = input.value.trim();

  let errorMessage = '';
  for (const { pattern, message } of patterns) {
    if (pattern(value)) continue;
    errorMessage = message;
    break;
  }

  setErrorMessage(label, errorMessage);

  return errorMessage === '';
}

function validateExp(label, patterns) {
  const inputs = label.querySelectorAll('input');

  return [...inputs].every(input => validate({ label, input, patterns }));
}

function setErrorMessage(label, message) {
  const errorSpan = label.querySelector('.input-error');
  errorSpan.textContent = message;
}


// Onchange Part...
const cardFront = document.querySelector('.card-front');
const cardBack = document.querySelector('.card-back');

bindInput(
  cardholderNameLabel.querySelector('input'),
  cardFront.querySelector('.card-holder-name'),
);
bindInput(
  cardNumberLabel.querySelector('input'),
  cardFront.querySelector('.card-number'),
);
bindInput(
  cardCvcLabel.querySelector('input'),
  cardBack.querySelector('.card-cvc'),
);
bindExp(
  cardExpDateLabel.querySelector('.card-exp-date-mm'),
  cardExpDateLabel.querySelector('.card-exp-date-yy'),
  cardFront.querySelector('.card-exp-date'),
)

function bindInput(src, dst) {
  src.addEventListener('input', () => {
    const value = src.value.trim();
    dst.textContent = value;
  });
}
function bindExp(inputMM, inputYY, dst) {
  inputMM.addEventListener('input', () => {
    const value = inputMM.value.trim();
    const [mm, yy] = dst.textContent.split('/');
    dst.textContent = `${value}/${yy}`;
  });
  inputYY.addEventListener('input', () => {
    const value = inputYY.value.trim();
    const [mm, yy] = dst.textContent.split('/');
    dst.textContent = `${mm}/${value}`;
  });
}

// Completed
const cardForm = document.querySelector('form.card-form');
const completedDiv = document.querySelector('.completed');

const formConfirm = cardForm.querySelector('button');
const completeContinue = completedDiv.querySelector('button');

completeContinue.addEventListener('click', () => {
  appearCardForm();
});

function appearCompleted() {
  cardForm.classList.add('display-none');
  completedDiv.classList.remove('display-none');
}
function appearCardForm() {
  const inputs = cardForm.querySelectorAll('input');
  for (const input of inputs) {
    input.value = '';
  }
  const cardholderName = cardFront.querySelector('.card-holder-name');
  const cardNumber = cardFront.querySelector('.card-number');
  const cardExpDate = cardFront.querySelector('.card-exp-date');
  const cardCvc = cardBack.querySelector('.card-cvc');

  cardholderName.textContent = 'Jane Appleseed';
  cardNumber.textContent = '0000 0000 0000 0000';
  cardExpDate.textContent = '00/00';
  cardCvc.textContent = '000';

  cardForm.classList.remove('display-none');
  completedDiv.classList.add('display-none');
}
