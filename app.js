const btnEl = document.getElementById('btn');
const bmiInputEl = document.getElementById('bmi-result');
const weightconditionEl = document.getElementById('weight-condition');



function calculateBMI() {
  const heightValue = document.getElementById('height').value / 100
  const weightValue = document.getElementById('weight').value
  
  const bmiValue = weightValue / (heightValue * heightValue)

  bmiInputEl.value = bmiValue.toFixed(2);

  // if (heightValue > 300 || weightValue > 1000) {
  //   alert('Are you sure? Seems like you are settin the new Guiness record...');
  // }

  if(bmiValue < 18.5) {
    weightconditionEl.innerText = 'Underweight'
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightconditionEl.innerText = 'Normal weight'
  } else if (bmiValue >= 25 && bmiValue <= 29.9){
    weightconditionEl.innerText = 'Overweight'
  } else if (bmiValue >= 30) {
    weightconditionEl.innerText = 'Obesity'
  } else if (heightValue > 300) {
    alert('Are you sure? Seems like you are settin the new Guiness record...');
  } else if (weightValue > 1000) {
    alert('Are you sure? Seems like you are settin the new Guiness record...');
  }
}


btnEl.addEventListener('click', calculateBMI);