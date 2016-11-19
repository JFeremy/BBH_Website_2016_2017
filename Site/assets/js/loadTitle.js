var title_pos = $('#Title_nav');
var title_origin = title_pos.html();
var title_length = title_pos.html().length;
var text = 'rest retagne andball';
var logo = ["B", "B", "H"];
var words = title_pos.html().split(" ");
var array = text.split("");
var words_length = [words[0].length,
										words[1].length,
										words[2].length ];
words[0] = "B";
words[1] = "B";
words[2] = "H";

var len = text.length;
var i = 0;
var title = '',
	lettre = '';

var typewriter = {
	interval:0.01,
	init: function(){
		this.animation($('.Title_nav_effet'))},
	animation: function(el){
		var l = el[0].innerHTML.length;
		var newVal = '';
		for(var k = 0; k < l; k++){
			var animDelay='style="-webkit-animation-delay:'+(this.interval)+'s;"';
			lettre = el[0].innerHTML.charAt(k);
			newVal = '<span class="letter" '+animDelay+'>'+el[0].innerHTML.charAt(k)+'</span>';
		}

		if(i < words_length[0])
		{
			el[0].innerHTML = logo[0] + newVal + words[1] + words[2];
			logo[0] += lettre;
		}
		else if((i >= words_length[0]) && (i < words_length[0] + words_length[1]))
		{
			el[0].innerHTML = logo[0] + logo[1] + newVal + words[2];
			logo[1] += lettre;
		}
		else
		{
			el[0].innerHTML = logo[0] + logo[1] + logo[2] + newVal;
			logo[2] += lettre;
		}

		if (l == title_length-3) {
			title_reset();
		}
	}
}

function title_start() {
	setTimeout(function(){
		title_pos.html(words[0] + words[1] + words[2]);
	}, 0);
}
function title_reset() {
	title_pos.html(title_origin);
}

function title_anim() {
	title += array[i];
	title_pos.html(title);
	typewriter.init();

	i++;

	if ( i < len ) {
		setTimeout(title_anim, 100);
	}
}

title_start();

setTimeout(function(){title_anim();}, 1000);
