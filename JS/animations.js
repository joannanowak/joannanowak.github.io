$(function(){
var kwadrat = $('#kwadrat');
var button = $('button');
var napis = $('h2');

	
	//ZADANIE 1//
	napis.hide(); //ukrywa napis h2
	button.click(function(){ //po kliknięciu w button
		kwadrat.animate({'margin-left':'100px'}, 1500, zmniejsz); //przesuń o 100px i zmniejsz
		function zmniejsz(){
			kwadrat.animate({'height': '100px', 'width': '100px'}, 1500, zmienKolor); //zmniejsz i zmien kolor
			function zmienKolor(){
				kwadrat.fadeOut(2500, function(){ //ale najpierw zniknij fadeOut
					kwadrat.css({'background-color': 'blue'}).fadeIn(2500, napisH2); //przypisz nowy kolor tla i pokaz napis
					function napisH2(){ //pokaz napis
						napis.show(2500); 
					}
				});
			}
		}
	})
	
	//ZADANIE 2//
var listOfPara = $('#singe_homework_solution');
var paragraf = $('.para');

	
	console.log(listOfPara);
	console.log(paragraf);
	console.log(paragraf[0]);

	var first = paragraf.first();
	console.log(first);
	
	 var last = paragraf.last();
	console.log(last);
	
	 var first= paragraf.first();
	
	console.log(first);
	
	
	
$('#next').click(function(){
		
	paragraf.each(function(){
	
    paragraf.first().insertAfter(last);
	})
});

$('#prev').click(function(){
	
	paragraf.each(function(){
    
	
    paragraf.last().insertBefore(first);
		})
});
			
	
	
});
	
	






//
//	
//$('#next').click(function(){
//     var last = paragraf.last();
//	
//     console.log(last);
//	
//    paragraf.first().insertAfter(last);
//	
//});
//
//$('#prev').click(function(){
//     var first= paragraf.first();
//	
//	console.log(first);
//	
//    paragraf.last().insertBefore(first);
//});
//			
//	
//	
//});
//	
//	