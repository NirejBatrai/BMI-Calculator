let button = document.getElementById('btn');

button.addEventListener('click', (e) => {
  e.preventDefault();
  const height = parseInt(document.getElementById('heightCm').value);
  const weight = parseInt(document.getElementById('weightKg').value);
  const result = document.getElementById('output');
  let height_status = false,
    weight_status = false;
  if (height === '' || isNaN(height) || height <= 0) {
    document.getElementById('height_error').innerHTML =
      'Please provide a valid height';
  } else {
    document.getElementById('height_error').innerHTML = '';
    height_status = true;
  }
  if (weight === '' || isNaN(weight) || weight <= 0) {
    document.getElementById('weight_error').innerHTML =
      'Please provide a valid weight';
  } else {
    document.getElementById('weight_error').innerHTML = '';
    weight_status = true;
  }

  if (height_status && weight_status) {
    const Bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (Bmi < 18.6) {
      result.innerHTML = 'Under weight : ' + Bmi;
    } else if (Bmi >= 18.6 && Bmi < 24.9) {
      result.innerHTML = ' Normal : ' + Bmi;
    } else {
      alert('The form has errors \n The BMI is: ' + Bmi);
      result.innerHTML = '';
    }
  }
});
