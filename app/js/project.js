const getProjects = () => {
    let detailsButtons = document.querySelectorAll('.thumbButton.projectDetails')
    let loadButtons = document.querySelectorAll('.thumbButton.load')

    fetch('data/projects.json')
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            loadButtons.forEach(button => {
                button.addEventListener('click', () => {
                    let project = data.projects.filter(obj => obj.name === button.name)[0]
                    window.open(project.primaryLink)
                })
            })
            detailsButtons.forEach(button => {
                button.addEventListener('click', () => {
                    let project = data.projects.filter(obj => obj.name === button.name)[0]
                    fetch('templates/project.mustache')
                        .then(response => {
                            return response.text()
                        })
                        .then(template => {
                            document.querySelector('.projectsContainer').innerHTML = Mustache.render(template, project)
                        })
                })
            })
        })
}