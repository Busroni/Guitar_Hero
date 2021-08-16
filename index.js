const judul = document.getElementById('judul');
const ul = document.getElementById('list');

const li = document.createElement('li');
li.innerText = 'ini baru';

let judulOffset = judul.getBoundingClientRect();
console.log(judulOffset);


setTimeout(()=>{
    judul.innerText = "ini berubah";
    judul.removeAttribute('class');
    ul.appendChild(li);
    ul.removeChild(ul.firstChild);
    judulOffset.left = 100;
},3000)

let i = 1;
let j = 1;
let k = 1;
let temp=1;
let strip = 2;
let strip2 = 3;
let strip3 = 1;


const sekarang = document.getElementById('sekarang');
sekarang.innerHTML = "Berapa Coy" ;

const target = document.getElementById('target');
let angkaTarget = (Math.floor(Math.random()*9)+1)*(Math.floor(Math.random()*9)+1);
target.innerHTML = angkaTarget ;


const belt = document.getElementById('belt');
console.log(belt);
setInterval(()=>{
	const elemen=document.getElementsByTagName('span')
	console.log(elemen[temp])
	temp++;
	
},1000)

setInterval(()=>{
    const span = document.createElement('span');
    if (i==strip){
        span.innerText = Math.floor(Math.random()*9)+0;
        i=1;
        banyak();
    }else{
        span.innerText = '-';
        i++;
    }
    belt.appendChild(span);
	belt.insertBefore(span,belt.childNodes[0]);

},1000);

const belt2 = document.getElementById('belt2');
console.log(belt2);
setInterval(()=>{
    const span = document.createElement('span');
    if (j==strip2){
        span.innerText = Math.floor(Math.random()*9)+0;
        j=1;
        banyak2();
    }else{
        span.innerText = '-';
        j++;
    }
    belt2.appendChild(span);
    belt2.insertBefore(span,belt2.childNodes[0]);
},1000);

const belt3 = document.getElementById('belt3');
console.log(belt3);

setInterval(()=>{
    const span = document.createElement('span');
    if (k==strip3){
        span.innerText = Math.floor(Math.random()*9)+0;
        k=1;
        banyak3();
    }else{
        span.innerText = '-';
        k++;
    }
    belt3.appendChild(span);
	belt3.insertBefore(span,belt3.childNodes[0]);
},1000);

function banyak(){
    strip = Math.floor(Math.random()*6)+2;
    return strip;
}

function banyak2(){
    strip2 = Math.floor(Math.random()*6)+2;
    return strip2;
}

function banyak3(){
    strip3 = Math.floor(Math.random()*6)+2;
    return strip3;
}