
var myImage = document.querySelector('img') 

myImage.onclick = function(){
	console.log("I clicked on myImage");
	if(myImage.getAttribute('src') === 'image.png'){
		myImage.setAttribute('src', 'Image2.png')
	}
	else{
		myImage.setAttribute('src','image.png')
	}
} 

var myButton = document.getElementsByTagName("button");
console.log(myButton);
myButton.onclick = function(){
	console.log("i clicked on button");
	alert('achya. sahi hai');
}

function mul(num1,num2){
	var resul=num1*num2
	return resul
}
num1=1
num2=4
console.log("hel" ,mul(num2,num1));
