let temp=32;
let convert;

function celsius(temp){
    return (temp - 32) * (5 / 9);
    
}
function fahrenheit(temp){
    return temp * 9 / 5 + 32;
}


document.getElementById("cel").onclick=function(){
   
    

        
    
     
    
    document.getElementById("prompt").innerHTML = `Converting Fahrenheit to Celsius`
}
document.getElementById("fah").onclick=function(){
    
    document.getElementById("prompt").innerHTML = `Converting Celsius to Fahrenheit`
}


document.getElementById("but").onclick=function(){
    if(document.getElementById("cel").checked==true){
        
        temp=document.getElementById("in").value;
       
        temp = Number(temp);
        convert = celsius(temp);
        document.getElementById("out").innerHTML=`From ${temp}°F to <br> <span>${convert}°C<span>`;


    }

     else if(document.getElementById("fah").checked==true){
       
        temp=document.getElementById("in").value;
        temp = Number(temp);
        convert = fahrenheit(temp);
        document.getElementById("out").innerHTML=`From ${temp}°C to <br><span>${convert}°F<span>`;


    }
    else{
        alert("Please select a unit");
    }
}