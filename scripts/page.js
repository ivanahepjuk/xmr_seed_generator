//alert("hohoohohohh");

var binary = "";



function klik(num) {

	//it's necesarry to empty the "seed", so it can be at the end of the function created again.
	var seed = [];

	if (num === 1) 
		binary += "001";
	if (num === 2)
		binary += "010";
	if (num === 3)
		binary += "011";
	if (num === 4)
		binary += "100";
	if (num === 5)
		binary += "101";
	if (num === 6)
		binary += "110";

	//This ensures that collected bits will be cutted off above 256'th bit
	if(binary.length > 264)
		binary = binary.substring(0, 264);


	//shows the binary seed in 1's and 0's, because "Such Wow Effect"
	document.getElementById("binary").value=binary;

	//calculating the seed starts from here:
	//how many 11-bit (words_count) elements are there in currrent bit combination?
	var words_count = ((binary.length - (binary.length % 11) ) / 11);

	console.log("dalsi");
	//now take every 11-bit chunk, convert it to decimaland then tell me his representing mnemonic word!
	for (var i = 0; i < words_count; i++){
		//cutting the binary string into single chunks of the length of 11 bits
		var chunk = binary.substring( (11*i), (11*i + 11) );
		//converting binary "numbers" to decimal representation
		var decimal_number = 0;
		
		if (chunk[0] === "1")
			decimal_number += 1;
		else if (chunk[0] === "0")
			decimal_number += 0;

		if (chunk[1] === "1")
			decimal_number += 2;
		else if (chunk[1] === "0")
			decimal_number += 0;

		if (chunk[2] === "1")
			decimal_number += 4;
		else if (chunk[2] === "0")
			decimal_number += 0;

		if (chunk[3] === "1")
			decimal_number += 8;
		else if (chunk[3] === "0")
			decimal_number += 0;

		if (chunk[4] === "1")
			decimal_number += 16;
		else if (chunk[4] === "0")
			decimal_number += 0;

		if (chunk[5] === "1")
			decimal_number += 32;
		else if (chunk[5] === "0")
			decimal_number += 0;

		if (chunk[6] === "1")
			decimal_number += 64;
		else if (chunk[6] === "0")
			decimal_number += 0;

		if (chunk[7] === "1")
			decimal_number += 128;
		else if (chunk[7] === "0")
			decimal_number += 0;

		if (chunk[8] === "1")
			decimal_number += 256;
		else if (chunk[8] === "0")
			decimal_number += 0;

		if (chunk[9] === "1")
			decimal_number += 512;
		else if (chunk[9] === "0")
			decimal_number += 0;

		if (chunk[10] === "1")
			decimal_number += 1024;
		else if (chunk[10] === "0")
			decimal_number += 0;

		console.log(decimal_number);
		document.getElementById("progressbar").style.width = decimal_number/20;

		//VISUAL HACK :OOO
		if(decimal_number >1620)
			decimal_number = 1111;

		seed.push(wordlist_en[decimal_number - 1]);
	}

		if(binary.length == 264)
			//call sha256 here:
			seed.push("\n     +checksum:)");
		
		document.getElementById("seed").value = seed;
	
}
