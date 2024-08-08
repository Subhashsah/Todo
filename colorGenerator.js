let btn=document.querySelector('button');
btn.addEventListener('click',function(){
    let h1=document.querySelector('h1');
    let random=generateRandom();
    h1.innerText=random;
    let ok=document.querySelector('div');
    ok.style.backgroundColor=random;
})
function generateRandom(){
let red=Math.floor(Math.random()*255);
let green=Math.floor(Math.random()*255);
let blue=Math.floor(Math.random()*255);
let color=`rgb(${red},${green},${blue})`
return color;
}
