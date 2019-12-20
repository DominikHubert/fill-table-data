var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
      min = (630000-this.responseText)*10;
      stu = (min/60);
      tag = Math.floor(stu/24);
      
    }
	Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
	}

	var date = new Date();
	
	date = date.addDays(tag);
	
	var dd = String(date.getDate()).padStart(2, '0');
	var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = date.getFullYear();
	today = dd + '.' + mm + '.' + yyyy;
	
	document.getElementById("time").innerHTML = today;
	
	document.getElementById("blocks").innerHTML = (630000-this.responseText);
};

xhttp.open("GET", "https://blockchain.info/q/getblockcount", true);
xhttp.send();
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("price").innerHTML = this.responseText;
    }
};
xhttp.open("GET", "https://blockchain.info/q/24hrprice", true);
xhttp.send();

