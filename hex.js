const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const colors = ["1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];






btn.addEventListener("click", function(){
    
    // console.log(randomNumber);
    var randomColor='#';
    for(var i=0;i<6;i++){
        randomNumber = Math.floor(Math.random()*colors.length);
        randomColor+=colors[randomNumber];
    } 
    // console.log(randomColor);
    document.body.style.backgroundColor=randomColor;
    color.textContent=randomColor;
    color.style.color=randomColor;
});