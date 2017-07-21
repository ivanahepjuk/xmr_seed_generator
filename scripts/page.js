/*
Created by ivanahepjuk@gmail.com
*/

var hexal = "";
var done = false;
var hexadecimal = "";

function dice_throwed(num) {
	if(!done){
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

		hexadecimal = hexal2hxd(hexal);

		if (hexadecimal.length >= 64){	
			done = true;	
			document.getElementById("seed").value = mn_encode(hexadecimal, 'english');
		}

		//setting the progressbar NEMAZAT	
		var progressbarsetting = "width: " + (100*hexadecimal.length/64) + "%";
		document.getElementById("progressbar").setAttribute("style", progressbarsetting);
	}
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
