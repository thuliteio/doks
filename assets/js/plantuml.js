import plantumlEncoder from 'plantuml-encoder';

document.addEventListener('DOMContentLoaded', () => {
  let elements = document.querySelectorAll('.plantuml');
  elements.forEach((v) => {
    let encoded = plantumlEncoder.encode(v.textContent);
    let src = '//www.plantuml.com/plantuml/svg/' + encoded;
    v.innerHTML = '<img src="' + src + '" />';
  })
});

