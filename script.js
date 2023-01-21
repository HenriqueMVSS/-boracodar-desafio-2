const staticSofa = document.querySelector('.sofa-static');
const gifSofa = document.querySelector('.sofa-gif');
const icon360 = document.querySelector('.icon-360');
const iconClose = document.querySelector('.icon-close');
const button = document.querySelector('.button-360');

button.addEventListener('click',addClass)

function addClass() {
  if(staticSofa.style.display != 'none'){
    icon360.style.display = 'none';
    iconClose.style.display = 'block';
    staticSofa.style.display = 'none';
    gifSofa.style.display = 'block';
  } else {
    icon360.style.display = 'block';
    iconClose.style.display = 'none';
    staticSofa.style.display = 'block';
    gifSofa.style.display = 'none';
  }
  
}
