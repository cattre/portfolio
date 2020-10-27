window.addEventListener('load', () => {
  let buttons = document.querySelectorAll('.thumbButton');
  fetch('data/projects.json').then(response => {
    return response.json();
  }).then(data => {
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        let project = data.projects.filter(obj => obj.name === button.name)[0];
        fetch('templates/project.mustache').then(response => {
          return response.text();
        }).then(template => {
          let rendered = Mustache.render(template, project);
          document.querySelector('.projectsContainer').innerHTML = rendered;
        });
      });
    });
  });
});
//# sourceMappingURL=project.js.map
