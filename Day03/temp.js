function convertTemp(temp){
 var fahrenheit=((temp*9)/5) + 5
  return fahrenheit;
}

var temp = prompt("enter celsius") 

if(!isNaN(temp)){
    var fahrenheit = convertTemp(temp)
    console.log("celsius in fahrenheit is " + fahrenheit)
} else {
    console.log ("Enter Number Value Only")
}
