// Napisz funkcję, która pobiera jako parametr stringa (czyli napis) i zwraca ten sam napis tylko napisany wspak. Następnie odwróć wspak stringa "Akademia108" i wyświetl w konsoli. 
// Podpowiedź: Zamień stringa na tablicę, wykonaj operacje odwracania kolejności i powróć do stringa * Sposobów rozwiązania tego zadania jest kilka, podpowiadam jedno z nich :)

"use strict";

var jakisstring;

function odwroc() {

	var stringToArray = jakisstring.split(""); // dzieli string na tablice
	console.log(stringToArray);

	var reversed = stringToArray.reverse(); // odwraca elementy tablicy
	console.log(reversed);

	var reversed2 = reversed.reverse(); // odwraca odwroconą tablicę
	console.log(reversed2);

	var noCommas = reversed2.join(" "); //łączy elementy tablicy bez przecinka
	console.log(noCommas);

	//	var joinedArrays = reversed2.toString(); //zmienia tablice w string z przecinkami
	//	console.log(joinedArrays);

}

odwroc("Akademia108");