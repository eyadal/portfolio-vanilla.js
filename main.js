const getAllReposAndPrintOnScreen = async () => {
  const reposWrapper = document.querySelector('.box')
  try {
    const res = await fetch('https://api.github.com/users/eyadal/repos')
    const data = await res.json()
    const repos = [
      {
        name: data[0].name,
        url: data[0].html_url,
        description: data[0].description,
      },
      {
        name: data[16].name,
        url: data[16].html_url,
        description: data[16].description,
      },
      {
        name: data[17].name,
        url: data[17].html_url,
        description: data[17].description,
      },
      {
        name: data[22].name,
        url: data[22].html_url,
        description: data[22].description,
      },
      {
        name: data[24].name,
        url: data[24].html_url,
        description: data[24].description,
      },
    ]

    repos.map((repo) => ({
      name: repo.name,
      url: repo.html_url,
      description: repo.description,
    }))

    let reposHtml = ''
    repos.map((repo) => {
      const repoURL = repo.url
      const repoName = repo.name
      const repoDescription = repo.description

      let repoCard = `
        <div class="card">
          <h5>${repoName}</h5>
          <p class="par">${repoDescription}</p>
          <a class="button" href="${repoURL}">Repository</a>
        </div>
      `

      reposHtml += repoCard
    })

    reposWrapper.innerHTML = reposHtml
  } catch (error) {
    console.error(error)
  }
}

getAllReposAndPrintOnScreen()
