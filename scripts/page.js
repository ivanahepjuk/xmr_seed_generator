/*
Created by ivanahepjuk@gmail.com
*/

var hexal = "";
//var hexadecimal = "";

function klik(num) {

	if (num === 1) 
		hexal += "0";
	if (num === 2)
		hexal += "1";
	if (num === 3)
		hexal += "2";
	if (num === 4)
		hexal += "3";
	if (num === 5)
		hexal += "4";
	if (num === 6)
		hexal += "5";

	document.getElementById("hexa").value=hexal;

	if (hexal.length >= 100){		
		hexal = hexal.substring(0,100);	
		document.getElementById("seed").value = mn_encode(hexal2hxd(hexal), 'english');
	}

	//setting the progressbar NEMAZAT	
	//var progressbarsetting = "width: " + (hexal.length) + "%";
	//document.getElementById("progressbar").setAttribute("style", progressbarsetting);
}

// adapted from
// https://stackoverflow.com/questions/18626844/convert-a-large-integer-to-a-hex-string-in-javascript
function hexal2hxd(str){ // .toString(16) only works up to 2^53
    var hexal = str.toString().split(''), sum = [], hxd = [], i, s
    while(hexal.length){
        s = 1 * hexal.shift()
        for(i = 0; s || i < sum.length; i++){
            s += (sum[i] || 0) * 6
            sum[i] = s % 16
            s = (s - sum[i]) / 16
        }
    }
    while(sum.length){
        hxd.push(sum.pop().toString(16))
    }
    return hxd.join('')
}
