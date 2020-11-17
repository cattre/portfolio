const getProjects = (): void => {
    let detailsButtons: NodeList = document.querySelectorAll('.thumbButton.projectDetails')
    let loadButtons: NodeList = document.querySelectorAll('.thumbButton.load')

    fetch('data/projects.json')
        .then((response: Response): Promise<object> => {
            return response.json()
        })
        .then((data: object): void => {
            loadButtons.forEach((button: HTMLInputElement) => {
                button.addEventListener('click', (): void => {
                    let project = data['projects'].filter((obj: object) => obj['name'] === button.name)[0]
                    window.open(project.primaryLink)
                })
            })
            detailsButtons.forEach((button: HTMLInputElement) => {
                button.addEventListener('click', (): void => {
                    let project = data['projects'].filter((obj: object): boolean => obj['name'] === button.name)[0]
                    fetch('templates/project.mustache')
                        .then((response: Response): Promise<string> => {
                            return response.text()
                        })
                        .then((template: string): void => {
                            document.querySelector('.projectsContainer').innerHTML = Mustache.render(template, project)
                        })
                })
            })
        })
}