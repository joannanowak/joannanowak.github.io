//
//// Napisz funkcję, która pobiera jako parametr stringa (czyli napis) i zwraca ten sam napis tylko napisany wspak. Następnie odwróć wspak stringa "Akademia108" i wyświetl w konsoli. 
//// Podpowiedź: Zamień stringa na tablicę, wykonaj operacje odwracania kolejności i powróć do stringa * Sposobów rozwiązania tego zadania jest kilka, podpowiadam jedno z nich :)
//
//"use strict";
//
//var jakisstring;
//
//function odwroc() {
//
//	var stringToArray = jakisstring.split(""); // dzieli string na tablice
//	console.log(stringToArray);
//
//	var reversed = stringToArray.reverse(); // odwraca elementy tablicy
//	console.log(reversed);
//
//	var reversed2 = reversed.reverse(); // odwraca odwroconą tablicę
//	console.log(reversed2);
//
//	var noCommas = reversed2.join(" "); //łączy elementy tablicy bez przecinka
//	console.log(noCommas);
//
//	//	var joinedArrays = reversed2.toString(); //zmienia tablice w string z przecinkami
//	//	console.log(joinedArrays);
//
//}
//
//odwroc("Akademia108");
//
//
//


//Zadanie w repl.it
//// Napisz funkcję, która pobiera jako parametr stringa (czyli napis) i zwraca ten sam napis tylko napisany wspak. Następnie odwróć wspak stringa "Akademia108" i wyświetl w konsoli. 
//// Podpowiedź: Zamień stringa na tablicę, wykonaj operacje odwracania kolejności i powróć do stringa * Sposobów rozwiązania tego zadania jest kilka, podpowiadam jedno z nich :)
//
//"use strict";
//
//var jakisstring;
//
//function odwroc(jakisstring) {
//	
//	var stringToArray = jakisstring.split(''); // dzieli string na tablice
//	console.log(stringToArray);
//
//	var reversed = stringToArray.reverse(); // odwraca elementy tablicy
//	console.log(reversed);
//
//	var reversed2 = reversed.reverse(); // odwraca odwroconą tablicę
//	console.log(reversed2);
//	
//	var noCommas = reversed2.join(" "); //łączy elementy tablicy bez przecinka
//	console.log(noCommas);
//	
//	var joinedArrays = reversed2.toString(); //zmienia tablice w string z przecinkami
//	console.log(joinedArrays);
//	
//}
//
//odwroc("Akademia108");
//
//
//




//ZADANIE 3
// Napisz funkcję ze zmiennymi lokalnymi, która policzy sumę i iloczyn elementów tablicy [1, 2, 3, 4, 5, 6]. Funkcja przyjmuje jeden parametr - tablicę z liczbami. Funkcja nie zwraca nic. Funkcja wyświetla wyniki. 
// Podpowiedź: Użyj pętli for w zadaniu.

var tablica = [1, 2, 3, 4, 5, 6];

function licz() {

	var suma = 0;
	for (var i = 0; i > tablica.length; ++i) {
		suma += tablica[i];
	}

	return licz;
	
}

licz(tablica);
console.log(licz(tablica));