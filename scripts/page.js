/*
Created by ivanahepjuk@gmail.com
*/


var hexa = "";

function klik(num) {

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

	document.getElementById("hexa").value=hexa;

	//setting the progressbar NEMAZAT
	/*
	var progressbarsetting = "width: " + ((100 * hexa.length) / 84) + "%";
	document.getElementById("progressbar").setAttribute("style", progressbarsetting);
	*/









	/*Zdar TOMASU!!
	
	Do promenne hexa se pri kazdem hodu plni string obsahujici cisla 0-5, pri kazdem kliku/hodu se ten string zvetsuje. 
	Pokazde jak se kod dostane tady kde ted pisu komentar (pri kazdem hodu), je potreba vzit tento hexal string ktery je v sestkove soustave a 
	udelat z nej string v 16kove soustave. V podmince ktera nasleduje o dva radky dojde k otestovani toho, jestli ten hexadecimal string uz ma delku 64 (klidne muze zcinat i nulou, to je jedno). 
	Pokud uz je nasbirano v hodech z kostky dosttek cislic na sestaveni 64mistneho hexadecimalniho cisla, dojde ke generaci seedu. 
	Zatim jak vidis tam je natvrdo hexadecimalni string dlouhy 64mist, ze ktereho se spocita seed po peti hodech kostkou.
	Na tom pochopis jak to funguje.
	*/






	
	



	//tohle s "nelogickym" pouzitim promenne hexa je tady proto, aby si po peti kliknutich videl ze to funguje a lepe se zorientoval
	//v tom jak to myslim
	if(hexa.length >= 5)
		document.getElementById("seed").value = mn_encode('41a80cd3707c6b8e015c95bbe73f2461de407ba5677cbd205d528a6eb89d7e0d', 'english');

/*
	//A tohle tady bude, az vyresis ten hexadecimal string,)
	if (hexadecimal.length >= 64){
		//pokud bude uzivatel klikat i po nahazeni dostatecne delky,
		//dalsi hody kostkou se zahodi a timpadem nebudou mit viv
		hexadecimal = hexadecimal.substring(0,64);

		//tohle vygeneruje seed
		document.getElementById("seed").value = mn_encode(hexadecimal, 'english');
	}
*/
	
}

