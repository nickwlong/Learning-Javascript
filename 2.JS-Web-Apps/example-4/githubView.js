class GithubView {
  constructor(model, api) {
    this.model = model;
    this.api = api;



    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.api.getRepoInfo(repoName, repoData => {
        console.log(repoData);
        this.display(repoData)
      });
      
    });
  }

  display(repoData) {
    const repoName = document.querySelector('#repo-name');
    repoName.innerText = repoData.full_name;
    const repoDescription = document.querySelector('#repo-description');
    repoDescription.innerText = repoData.description;
    const repoImgURL = repoData.organization.avatar_url
    document.getElementById('repo-image').src = repoImgURL;
  }
}

module.exports = GithubView;