import _ from 'lodash';
import Icon from './icon.jfif'
import './style.css'
import city from './city.json'
import financial from './financial.csv'
import profile from './profile.yaml'

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')

  const image = new Image()
  image.src = Icon
  element.appendChild(image)

  console.log('city ', city)
  console.log('financial ', financial)
  console.log('profile ', profile)

  return element;
}

document.body.appendChild(component());