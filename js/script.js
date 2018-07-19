function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    let  data = JSON.parse(xmlHttp.responseText)
    console.log(data.dataset.data);
  }

function todayDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
      dd = '0'+dd
    }

    if(mm<10) {
      mm = '0'+mm
    }

    today = yyyy + '-' + mm + '-' + dd;

    console.log(today);
    httpGet("https://www.quandl.com/api/v3/datasets/FRED/GDPPOT.json?api_key=qfTdSqS1fCHU84LE41Zq&collapse=annual&end_date=" + today);
}

todayDate()
