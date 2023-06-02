// const getAllReposAndPrintOnScreen = async () => {
//   const reposWrapper = document.querySelector('.box')
//   try {
//     const res = await fetch('https://api.github.com/users/eyadal/repos')
//     const data = await res.json()
//     `
//           <div class="card">
//           <h5>${repos}</h5>
//           <p>description</p>
//           <a class="button" href="${repo.html_url}">Repo</a>

//           </div>
//           `

//     reposWrapper.innerHTML = reposHtml
//   } catch (error) {
//     console.error(error)
//   }
// }

// getAllReposAndPrintOnScreen()

const getAllReposAndPrintOnScreen = async () => {
  const reposWrapper = document.querySelector('.box')
  try {
    const res = await fetch('https://api.github.com/users/eyadal/repos')
    const data = await res.json()

    //name, url, description

    console.log(data[0].name, data[0].url, data[0].description)
    console.log(data[16])
    console.log(data[17])
    console.log(data[22])
    console.log(data[24])
    const repos = [data[0], data[16], data[17], data[22], data[24]]
    for (repo = 0; repo < repos.length; repo++) {
      const repoURL = repo.url
      const repoName = repo.name
      const repoDescription = repo.description`
      <div class="box">
      <div class="card">
        <h5>${repoName}</h5>
            <p>${repoDescription}</p>
        <a class="button" href="${repoURL}">Repository</a>
      </div>
    </div>
    
      `
    }

    let reposHtml = ''
    data.forEach((repo) => {
      const repoURL = repo.html_url
      const repoName = repo.name
      const repoDescription = repo.description

      const repoCard = `
        <div class="box">
          <div class="card">
            <h5>${repoName}</h5>
                <p>${repoDescription}</p>
            <a class="button" href="${repoURL}">Repository</a>
          </div>
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
