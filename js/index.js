// Your code goes here
// * MOUSEOVER

const overMouse = document.querySelectorAll('img');
overMouse.forEach(event => {
   event.addEventListener('mouseover', () => {
      event.style.transform = 'scale(1.3)';
      event.style.transition = 'all 0.2s';
   })
});

overMouse.forEach(event => {
   event.addEventListener('mouseleave', () => {
      event.style.transform = 'scale(1)';
      event.style.transition = 'all 1.5s';
   })
});

// * LOAD

window.addEventListener('load', () => {
   alert('Press "OK" to continue.')
});

// * WHEEL

const wheelie = document.querySelector('p');
wheelie.addEventListener('wheel', (event) => {
   const colors = ['orange', 'white', 'red', 'blue'];
   const random = Math.floor(Math.random() * 4);
   event.target.style.backgroundColor = colors[random];
});

// * FOCUS

const focused = document.querySelectorAll('nav a');
focused.forEach(event => {
   event.addEventListener('focus', (event) => {
      event.target.style.background = 'orange';
   });
})

// * DOUBLE CLICK

const nav = document.querySelector('nav');
nav.addEventListener('dblclick', (event) => {
   event.target.style.backgroundColor = 'white';
});

// * RESIZE

window.addEventListener('resize', () => {
   alert('That Hurt! You have changed the size of the screen!');
});

// * KEYDOWN
const downKey = document.querySelector('body');
downKey.addEventListener('keydown', (event) => {
   event.target.style.color = 'orange';
});

downKey.addEventListener('keyup', (event) => {
   event.target.style.color = 'black';
});

// * DRAG / DROP

const dragIt = document.querySelectorAll('img');
dragIt.forEach(event => {
   event.addEventListener('drag', (event) => {
      event.target.style.opacity = '0.4';
   });
})

// * SELECT

const clicker = document.querySelector('.content-destination');
clicker.addEventListener('click', (event) => {
   event.target.style.backgroundColor = 'skyblue';
   event.target.style.color = 'white';
});