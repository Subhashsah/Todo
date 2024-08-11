let inp=document.querySelector('input');
let btn=document.querySelector('button');
let ul=document.querySelector('ul')
btn.addEventListener('click',function(){
    let item=document.createElement('li')
    item.innerText=inp.value;
    ul.appendChild(item);
  
})
ul.addEventListener('click',function(event){
    event.target;
    console.log(event.target);
    if(event.target!==ul){
        event.target.remove();
    }
    
})