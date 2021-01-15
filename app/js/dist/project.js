var getProjects = function () {
    var detailsButtons = document.querySelectorAll('.thumbButton.projectDetails');
    var loadButtons = document.querySelectorAll('.thumbButton.load');
    fetch('data/projects.json')
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        loadButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                var project = data['projects'].filter(function (obj) { return obj['name'] === button.name; })[0];
                window.open(project.primaryLink);
            });
        });
        detailsButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                var project = data['projects'].filter(function (obj) { return obj['name'] === button.name; })[0];
                fetch('templates/project.mustache')
                    .then(function (response) {
                    return response.text();
                })
                    .then(function (template) {
                    document.querySelector('.projectsContainer').innerHTML = Mustache.render(template, project);
                });
            });
        });
    });
};
