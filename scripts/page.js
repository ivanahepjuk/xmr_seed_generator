/*
Created by ivanahepjuk@gmail.com
		in Adrspach 2017
*/


var hexa = "";

function klik(num) {

	//it's necesarry to empty the "seed", so it can be at the end of the function created again.
	var seed = [];
	var hexa_dec = 0;
	var binary = "";

	if (num === 1) 
		hexa += "0";
	if (num === 2)
		hexa += "1";
	if (num === 3)
		hexa += "2";
	if (num === 4)
		hexa += "3";
	if (num === 5)
		hexa += "4";
	if (num === 6)
		hexa += "5";

	//This ensures that collected bits will be cutted off above x'th bit
	//if(hexa.length > 84)
	//	hexa = hexa.substring(0, 84);


	////////////////////////////
	//converting string from "hexa based" to decimal
	for (var k = 0; k < hexa.length ; k++) {
		hexa_dec += hexa[k] * (6 **(k));
	}

	///////////////////////////

	////////////////////////////
	//converting from decimal to binary
	var X = hexa_dec;
	while(X != 0){
		binary += (X%2)
		X = Math.floor(X/2);
	}

	///////////////////////////	
	


	//calculating the seed starts from here:
	//how many 11-bit (words_count) elements are there in currrent bit combination?

	document.getElementById("hexa").value=hexa;

	//setting the progressbar
	var progressbarsetting = "width: " + ((100 * hexa.length) / 84) + "%";
	document.getElementById("progressbar").setAttribute("style", progressbarsetting);

	document.getElementById("binary").value=binary;
	//shows the hexa seed in 0-5's, because "Such Wow Effect"



	var words_count = ((binary.length - (binary.length % 11)) / 11);

	
	//now take every 11-bit chunk, convert it to decimaland then tell me his representing mnemonic word!
	for (var i = 0; i < words_count; i++){
		//cutting the binary string into single chunks of the length of 11 bits
		var chunk = binary.substring( (11*i), (11*i + 11) );
		//converting binary "numbers" to decimal representation
		var decimal_number = 0;

		for (var j = 0; j < 11; j++) {
			if(chunk[j] === "1")
				decimal_number += 2**(j);
			/*else if (chunk[i] === "0")	
				decimal_number += 0;*/
		}
	
		//VISUAL HACK :OOO
		if(decimal_number >1620)
			decimal_number = 1111;

		seed.push(wordlist_en[decimal_number]);
		console.log(seed);
	}

	if(binary.length == 264)
		//call sha256 here:
		seed.push("+checksum:)");
		
	document.getElementById("seed").value = seed;
	
}
