$(function(){
var kwadrat = $('#kwadrat');
var button = $('button');
var napis = $('h2');
	
	napis.hide();
	button.click(function(){
		kwadrat.animate({'margin-left':'100px'}, 1500, zmniejsz);
		function zmniejsz(){
			kwadrat.animate({'height': '100px', 'width': '100px'}, 1500, zmienKolor);
			function zmienKolor(){
				kwadrat.fadeOut(2500, function(){
					kwadrat.css({'background-color': 'blue'}).fadeIn(2500, napisH2);
					function napisH2(){
						napis.show(2500);
					}
				});
			}
		}
	})
	
	
	
	
	
	
});