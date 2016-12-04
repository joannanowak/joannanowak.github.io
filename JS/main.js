// Napisz funkcję, która pobiera jako parametr stringa (czyli napis) i zwraca ten sam napis tylko napisany wspak. Następnie odwróć wspak stringa "Akademia108" i wyświetl w konsoli. 
// Podpowiedź: Zamień stringa na tablicę, wykonaj operacje odwracania kolejności i powróć do stringa * Sposobów rozwiązania tego zadania jest kilka, podpowiadam jedno z nich :)

"use strict";
var jakisstring = "Akademia108";
var stringToArray = jakisstring.split("");
console.log(stringToArray);

var reversed = stringToArray.reverse();
console.log(reversed);
