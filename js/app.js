function calsPerDay() {
  function find(id) {
    return document.getElementById(id);
  }

  const age = find('age').value;
  const height = find('height').value * 2.54;
  const weight = find('weight').value / 2.2;
  let result = 0;

  if (find('male').checked)
    result = 66.47 +  (13.75 * weight) + (5.0 * height - (6.75 * age));
  else if (find('female').checked)
    result = 665.09 + (9.56 * weight) + (1.84 * height - (4.67 * age));
  find('totalCals').innerHTML = Math.round( result );



}

calsPerDay();
