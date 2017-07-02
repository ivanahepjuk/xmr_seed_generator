//alert("hohoohohohh");

var binary = "";



function klik(num) {

	//it's necesarry to empty the "seed", so it can be at the end of the function created again.
	var seed = [];

	if (num === 1) 
		binary += "00";
	if (num === 2)
		binary += "01";
	if (num === 3)
		binary += "10";
	if (num === 4)
		binary += "11";
	if (num === 5)
		binary += "0";
	if (num === 6)
		binary += "1";

	//This ensures that collected bits will be cutted off above 256'th bit
	if(binary.length > 264)
		binary = binary.substring(0, 264);


	//shows the binary seed in 1's and 0's, because "Such Wow Effect"
	document.getElementById("binary").value=binary;

	//setting the progressbar
	var progressbarsetting = "width: " + ((100 * binary.length) / 256) + "%";
	document.getElementById("progressbar").setAttribute("style", progressbarsetting);


	//calculating the seed starts from here:
	//how many 11-bit (words_count) elements are there in currrent bit combination?
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
