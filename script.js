let s = document.querySelectorAll("strong");

function highlight() {
	 for(let elem of s){
		 elem.style.color = "rgb(0, 128, 0)";
	 }
}

function return_normal() {
     for(let elem of s){
		 elem.style.color = "rgb(0, 0, 0)";
	 }
}
