function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function callFlicker($target, size, color1, color2, color3){
		var fastInterval 	= getRandomInt(1, 5) * 120;
		var longInterval 	= getRandomInt(1, 20) * 45;
		var afIntervals 	= getRandomInt(3, 6);
		var alIntervals 	= getRandomInt(1, 3);
		var getTColor 		= $target.css('color');	
		var TargetLight = $target.css({
			'-webkit-box-shadow'	: '1 1px '+size+'px rga('+color1+','+color2+','+color3+')',
			'box-shadow'			: '1 1px '+size+'px rgb('+color1+','+color2+','+color3+')',
			'color'					: getTColor,
			'opacity'				: 1
		});
		var TargetDark = $target.css({
			'-webkit-box-shadow'	: '1 1px '+size+'px rga('+color1+','+color2+','+color3+')',
			'box-shadow'			: '1 1px '+size+'px rgb('+color1+','+color2+','+color3+')',
			'opacity'				: 0.9
		});
		
		console.log(afIntervals+' '+alIntervals);
		
		while(afIntervals > 0) {
			afIntervals -= 1;			
			setInterval(function(){
				$target.css({
					'-webkit-box-shadow'	: '1 1px '+size+'px rga('+color1+','+color2+','+color3+')',
					'box-shadow'			: '1 1px '+size+'px rgb('+color1+','+color2+','+color3+')',
					'color'					: getTColor,
					'opacity'				: 0.9
				});
			}, fastInterval);			
			setInterval(function(){
				$target.css({
					'-webkit-box-shadow'	: '1 1px '+size+'px rga('+color1+','+color2+','+color3+')',
					'box-shadow'			: '1 1px '+size+'px rgb('+color1+','+color2+','+color3+')',
					'opacity'				: 0.7
				});
			}, fastInterval*4);
			console.log(afIntervals);
		}	
};

$(document).ready(function(){  
    callFlicker($('.flicker'), 25, 68, 192, 255);
     callFlicker($('.flickerbg'), 25, 68, 192, 255);
     callFlicker($('.flickerbgf'), 25, 68, 192, 255);
    
    
});
$( function() {
    $( "#draggable" ).draggable();
    });