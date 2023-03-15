/*
<div class="works__developer">
    <img src="./img/computer.jpg" alt="spotify">
    <p>Lorem ipsum</p>
    <p>HTML + CSS + JS</p>
</div> 
*/

const container = document.querySelector('.works__model');

const createElement = (src) => {
    const worksDev = document.createElement('div');
    worksDev.classList.add('works__developer');

    const img = document.createElement('img');
    img.setAttribute('src', src);

    const name = document.createElement('p');
    name.innerText = 'Lorem Ipsum';

    const languajes = document.createElement('p');
    languajes.innerText = 'HTML + CSS + JS';

    worksDev.appendChild(img);
    worksDev.appendChild(name);
    worksDev.appendChild(languajes);

    container.appendChild(worksDev);
}


createElement('./img/redes.jpg');
createElement('./img/computer.jpg');
createElement('./img/code.jpg');
createElement('./img/hardware.jpg');
createElement('./img/nasa.jpg');
createElement('./img/setup.jpg');
createElement('./img/spotify.jpg');
createElement('./img/world.jpg');