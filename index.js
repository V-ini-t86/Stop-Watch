var seconds = document.getElementById('seconds');
var tens = document.getElementById('tens');
var start = document.querySelector('.start');
var stop = document.querySelector('.stop');
var reset = document.querySelector('.reset')
var i = 1;
var j = 1;

start.addEventListener("click",function(){
	var setId = window.setInterval(()=>{
		tens.innerHTML =i;
		i = i + 1;
		if (i > 100) {
			i =1;
			second_move();
		}
	},10);
	stop.addEventListener("click",()=>{
		clearInterval(setId);
	});
	reset.addEventListener("click",()=>{
		clearInterval(setId);
		tens.innerHTML ="00";
		seconds.innerHTML = "00";
	
	});

});

var second_move = ()=> {
	seconds.innerHTML = j;
	j = j + 1;
}

