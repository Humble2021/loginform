const steps = Array.from(document.querySelectorAll('.step'));
const nextButtons = Array.from(document.querySelectorAll('.next-step'));
const prevButtons = Array.from(document.querySelectorAll('.prev-step'));
const submitButton = document.getElementById('submit-button');

let currentStep = 0;

nextButtons.forEach((button, index) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    const currentStepInputs = Array.from(steps[currentStep].querySelectorAll('input'));
    const isCurrentStepValid = currentStepInputs.every(input => input.value.trim() !== '');

    if (isCurrentStepValid) {
      steps[currentStep].style.display = 'none';
      currentStep++;
      steps[currentStep].style.display = 'block';
    } else {
      alert('Please fill in all the fields before proceeding.');
    }
  });
});

prevButtons.forEach((button, index) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    steps[currentStep].style.display = 'none';
    currentStep--;
    steps[currentStep].style.display = 'block';
  });
});

submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  const allInputs = Array.from(document.querySelectorAll('input'));
  const isFormValid = allInputs.every(input => input.value.trim() !== '');

  if (isFormValid) {
    alert('Form submitted successfully!');
  } else {
    alert('Please fill in all the fields before submitting.');
  }
});
