import _ from 'lodash';

function init() {
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack & Koa'], ' ');
    return element;
}

document.body.appendChild(init());