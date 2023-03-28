function calculateNewtonSecondLaw(value1, value2, valueType) {
    if (valueType === 'force') {
      const mass = value1;
      const acceleration = value2;
      const force = mass * acceleration;
      return `A força resultante é ${force} N.`;
    } else if (valueType === 'mass') {
      const force = value1;
      const acceleration = value2;
      const mass = force / acceleration;
      return `A massa é ${mass} kg.`;
    } else if (valueType === 'acceleration') {
      const force = value1;
      const mass = value2;
      const acceleration = force / mass;
      return `A aceleração é ${acceleration} m/s².`;
    } else {
      return 'Tipo de cálculo desconhecido. Use "force", "mass" ou "acceleration".';
    }
  }
  
  function validateForm(valueType, value1, value2) {
    let isValid = true;
  
    const valueTypeError = document.getElementById('valueType-error');
    const value1Error = document.getElementById('value1-error');
    const value2Error = document.getElementById('value2-error');
  
    valueTypeError.style.display = 'none';
    value1Error.style.display = 'none';
    value2Error.style.display = 'none';
  
    if (!valueType) {
      valueTypeError.style.display = 'block';
      isValid = false;
    }
  
    if (!value1) {
      value1Error.style.display = 'block';
      isValid = false;
    }
  
    if (!value2) {
      value2Error.style.display = 'block';
      isValid = false;
    }
  
    return isValid;
  }
  
  const form = document.getElementById('calculator-form');
  const result = document.getElementById('result');
  const valueType = document.getElementById('valueType');
  const label1 = document.getElementById('label1');
  const label2 = document.getElementById('label2');
  
  valueType.addEventListener('change', () => {
    if (valueType.value === 'force') {
      label1.textContent = 'Massa (m):';
      label2.textContent = 'Aceleração (a):';
    } else if (valueType.value === 'mass') {
      label1.textContent = 'Força resultante (F):';
      label2.textContent = 'Aceleração (a):';
    } else if (valueType.value === 'acceleration') {
      label1.textContent = 'Força resultante (F):';
      label2.textContent = 'Massa (m):';
    }
  });
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const value1 = parseFloat(document.getElementById('value1').value);
    const value2 = parseFloat(document.getElementById('value2').value);
    const valueType = document.getElementById('valueType').value;
  
    if (validateForm(valueType, value1, value2)) {
      const output = calculateNewtonSecondLaw(value1, value2, valueType);
      result.textContent = output;
    }
  });
  