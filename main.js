var button = document.getElementById('generateBtn');
var display = document.getElementById('ucet');

var ibanGenerator = function() {

  first = Math.floor(Math.random() * 90) + 10;
  second = Math.floor(Math.random() * 100);
  third = Math.floor(Math.random() * 10);
  fourth = Math.floor(Math.random() * 10000);
  fifth = Math.floor(Math.random() * 10000);
  sixth = Math.floor(Math.random() * 10000);

  generatedIban = first + ' 0' + second + '0 ' + '000' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth

}

button.addEventListener('click', function() {

         ibanGenerator();

         display.innerHTML = generatedIban;

})
