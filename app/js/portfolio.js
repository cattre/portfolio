fetch('templates/portfolio.mustache')
    .then(response => {
        return response.text()
    })
    .then(template => {
        fetch('data/projects.json')
            .then(response => {
                return response.json()
            }).then(data => {
            let rendered = Mustache.render(template, data)
            document.querySelector('.portfolioContainer').innerHTML = rendered
        })
    })