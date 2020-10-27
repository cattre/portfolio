fetch('templates/portfolio.mustache').then(response => {
  return response.text();
}).then(template => {
  fetch('data/projects.json').then(response => {
    return response.json();
  }).then(data => {
    document.querySelector('.portfolioContainer').innerHTML = Mustache.render(template, data);
  });
});
//# sourceMappingURL=portfolio.js.map
