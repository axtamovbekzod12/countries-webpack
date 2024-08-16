const loaderElement = document.querySelector('.loader'),
      loaderToggle = info => info ? loaderElement.classList.remove('hidden') : loaderElement.classList.add('hidden');
export default loaderToggle;