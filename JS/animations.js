$(function(){
var kwadrat = $('#kwadrat');
var button = $('button');
var napis = $('h2');
var button2 = $('#button2');
var button3 = $('#button3');
var paragraf = $('.para');
var paragrafCount = $('.para').length;
var paragrafIndex =0;
	
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
	
	console.log(paragrafCount);
	
	button2.click(function(){
		lastGoFirst(paragrafIndex); //jako parametr - kolejny nr paragrafu
		console.log(paragrafIndex);
	});
	function lastGoFirst(){
			for(var i=0; i<paragrafCount; ++i){
				if(paragrafIndex=0){
					paragraf.css({'color': 'blue'},2000);
				}
			}
		}
	
	
	button3.click(function(){
		firstGoLast(paragrafIndex);
		console.log(paragrafIndex);
	});
	function firstGoLast(){
		for (var i=0; i< paragrafCount; ++i){
			if (paragrafIndex = paragrafCount){
				paragraf.css({'color':'red'},2000);
			}
		}
	}
	
	
});