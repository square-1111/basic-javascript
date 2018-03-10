
var myImage = document.querySelector('img') 


var myhead = document.querySelector('h2')

myImage.onclick = function(){
	console.log("I clicked on myImage");
	if(myImage.getAttribute('src') === 'image.gif'){
		myImage.setAttribute('src', 'image2.png')
		myhead.textContent('I am Pascal\'s triangle. I am your dad! :p')
	}
	else{
		myImage.setAttribute('src','image.gif')
		myhead.textContent('Dont you dare call me that Pascal')
	}
} 

var myButton = document.getElementsByTagName("button");
console.log(myButton);
myButton.onclick = function(){
	console.log("i clicked on button");
	alert('sahi hai');
}

function mul(num1,num2){
	var resul=num1*num2
	return resul
}
num1=1
num2=4
console.log("hel" ,mul(num2,num1));
