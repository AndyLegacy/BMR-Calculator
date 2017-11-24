function calsPerDays() {
  function find(id) { return document.getElementById(id)}

  let age = find('age').value
  let height = find('height').value * 2.54
  let weight = find('weight').value / 2.2
  let result = 0
  if (find('male').checked)
    result = 66.47 +  (13.75 * weight) + (5.0 * height - (6.75 * age))
    


  }



};
