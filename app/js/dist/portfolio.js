fetch('templates/portfolio.mustache')
    .then(function (response) {
    return response.text();
})
    .then(function (template) {
    fetch('data/projects.json')
        .then(function (response) {
        return response.json();
    }).then(function (data) {
        document.querySelector('.portfolioContainer').innerHTML = Mustache.render(template, data);
    });
});
