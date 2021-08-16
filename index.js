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


const belt = document.getElementById('belt');
console.log(belt);
setInterval(()=>{
    const span = document.createElement('span');
    span.innerText = '=';

    belt.appendChild(span);
},1000);

const belt2 = document.getElementById('belt2');
console.log(belt2);
setInterval(()=>{
    const span = document.createElement('span');
    span.innerText = '+';

    belt2.appendChild(span);
},1000);

const belt3 = document.getElementById('belt3');
console.log(belt3);
setInterval(()=>{
    const span = document.createElement('span');
    span.innerText = Math.floor(Math.random()*7)+1;

    belt3.appendChild(span);
},1000);