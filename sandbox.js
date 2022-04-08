// const para = document.querySelector('p');
// const para = document.querySelector('.error');
var para = document.querySelector('div.error');

console.log(para);

// query multiple elements at once
var paras = document.querySelectorAll('p');
var errors = document.querySelectorAll('.error');

console.log(paras, errors);
console.log(paras[1], errors[0]);

// get an element by ID
var title= document.getElementById('page-title');
console.log(title);

// get elements by their class name
errors = document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]);

// get elements by their tag name
paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);

para = document.querySelector('p');

// console.log(para.innerText);
// para.innerText = 'ninjas are awesome';

paras = document.querySelectorAll('p');

// paras.forEach(p => {
//   console.log(p.innerText);
//   p.innerText = 'new text!';
// });

const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML = '<h2>this is a new h2</h2>';

// content.innerHTML += '<h2>this is an h2 added to the content</h2>';

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
  content.innerHTML += `<p>${person}</p>`;
});

const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.textContent = 'The Net Ninja webiste';

const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color: green');

title = document.querySelector('h1');

// title.setAttribute('style', 'margin: 50px;');

console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '60px';
title.style.margin = '';

// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('success');

paras = document.querySelectorAll('p');

paras.forEach(p => {
  if(p.textContent.includes('error')){
    p.classList.add('error');
  } else if(p.textContent.includes('success')) {
    p.classList.add('success');
  }
});