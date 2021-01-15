fetch('templates/portfolio.mustache')
    .then((response: Response): Promise<string> => {
        return response.text()
    })
    .then((template: string): void => {
        fetch('data/projects.json')
            .then((response: Response): object => {
                return response.json()
            }).then((data: object): void => {
                document.querySelector('.portfolioContainer').innerHTML = Mustache.render(template, data)
        })
    })