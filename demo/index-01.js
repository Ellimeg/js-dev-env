function component() {
  const element = document.createElement('div');

  // Lodash aka Low dash i.e. "_", currently included via a script,
  // is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
