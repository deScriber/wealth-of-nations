var request = new XMLHttpRequest();

request.open('GET', 'https://www.quandl.com/api/v3/datasets/FRED/GDPPOT.json?api_key=qfTdSqS1fCHU84LE41Zq', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(date => {
      console.log(date.value);
    });
  } else {
    console.log('error');
  }
}

request.send();
