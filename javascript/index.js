// mobile navbar outdent

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

// slide mobile banner SM
let myIndex = 0;
carousel();

function carousel() {
  let i;
  const x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); 
}


// const setWidth = window.innerWidth;
// const upTop = document.getElementById('upTop');
// const setHight = window.innerHeight;
// console.log(setHight);

// if (setHight > 800) {
//   upTop.addEventListener(() => {
//     upTop.classList.add('active')
//   })
// }
// const handleResize = () => {
//   setWidth
// }

// window.addEventListener('resize', handleResize)
