import _ from 'lodash';
import './style.css';
import printMe from './print.js'

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button')

    //lodash, now imported by this script
    element.innerHTML = _.join(['Hello,', 'webpack'], ' ')
    element.classList.add('hello')

    btn.innerText = 'Click me and check the console';
    btn.onclick = printMe;
    
    element.appendChild(btn)

    return element
}

document.body.appendChild(component())

