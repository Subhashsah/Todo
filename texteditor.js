let int = document.querySelector('input');
let p=document.querySelector('p');
int.addEventListener('input',function(){
    console.log(this.value);
    p.innerText=this.value;
})