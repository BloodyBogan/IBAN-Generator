var button = document.getElementById('generateBtn');
var display = document.getElementById('ucet');

var ibanGenerator = function() {

  first = Math.floor(Math.random() * 100);
  second = Math.floor(Math.random() * 10000);
  third = Math.floor(Math.random() * 10000);

  generatedIban = first + ' ' + second + ' ' + third

}

button.addEventListener('click', function() {

         ibanGenerator();

         display.innerHTML = generatedIban;

})
