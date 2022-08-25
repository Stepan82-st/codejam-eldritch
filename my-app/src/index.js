//import image from './images/lazy.png';

const createImage = (src) => new Promise((res, rej) => {
  const img = new Image();
  img.onload = () => res(img);
  img.onerror = rej;
  img.src = src;
});

async function render() {
  const subHeader = document.createElement('h2');
  subHeader.innerHTML = 'This elements was created by js';
  const myImage = await createImage(image);
  document.body.appendChild(subHeader);
  document.body.appendChild(myImage);
}

//render();
const mapsAzathoth = document.querySelectorAll('.maps');
const btn = document.getElementsByTagName('button');
console.log(btn);
mapsAzathoth.forEach(elem => 
elem.addEventListener('click', function(){
  const btnLeave = document.querySelectorAll('.btn-leave');
  btnLeave.forEach(elem => elem.classList.add('active'));
  btnLeave.forEach(elem =>  elem.addEventListener('click', function(){
    const btnRandom = document.querySelectorAll('.randome-coloda');
    btnRandom.forEach(elem => elem.classList.add('active'));
  }))
})
)


function Stack() {
  this.count = 0
  this.storage = {}

  this.push = function(value) {
      this.storage[this.count] = value
      this.count++
  }

  this.pop = function() {
      if (this.count === 0) return undefined
      this.count--
      let result = this.storage[this.count]
      delete this.storage[this.count]
      return result
  }

  this.peek = function() {
      return this.storage[this.count - 1]
  }
  this.size = function() {
    return this.count
}
}
