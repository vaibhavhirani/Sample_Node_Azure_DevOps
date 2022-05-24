var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(8080, function () {
  console.log('Listening to Port 8080');
});

class Factorial {
  constructor(){
      
  };

  factorialShort(n) {
      if (n < 0) {
          throw new Error(`Negative number!`);
      }
      return (n !== 1) ? n * this.factorialShort(n - 1) : 1;
  };

  factorialSimple(n) {
      if (n < 0) {
          throw new Error(`Negative number!`);
      }
      if (n !== 1) {
          return n * this.factorialShort(n-1);
      } else {
          return 1;
      }
  };
};

module.exports = Factorial;