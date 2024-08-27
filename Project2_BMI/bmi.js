const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
   let bmi;
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
     bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
   const result2=document.querySelector('#result2');
  if(bmi<18.6){
    result2.innerHTML ="You are Under Weight" ;
    
}
  else if(bmi>=18.6 && bmi<=24.9){
    result2.innerHTML ="You are in Normal Range"
  }
  else{
    result2.innerHTML ="You are overweight"
  }
});

