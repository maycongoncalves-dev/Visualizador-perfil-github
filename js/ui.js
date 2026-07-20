const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

const showLoading = () => (profileResults.innerHTML = '<p class="loading">Carregando...</p>');
const showAlert = message => alert(message);

const renderProfile = (userData, userRepos = [], container = profileResults) => {
    const name = userData?.name || userData?.login || 'Nome indisponível';
    const bio = userData?.bio || 'Não possui bio cadastrada 😢.';
    const followers = userData?.followers ?? 0;
    const following = userData?.following ?? 0;

    const reposHTML =userRepos && userRepos.length > 0 ? userRepos.map(repo => `
<a href="${repo.html_url}" target="blank">    
    <div class="repository-card">
        <h3>${repo.name}</h3>
        <div class="repository-stats">
            <span>⭐Stars: ${repo.stargazers_count}</span>
            <span>🍴 Forks: ${repo.forks_count}</span>
            <span>👀 Watchers: ${repo.watchers_count}</span>
            <span>💻 Language: ${repo.language || `Não informada`}</span>
        </div>    
    </div>
    </a> 
    `).join(``) : `<p>Nenhum repositório encontrado</p>`;

    container.innerHTML = `
    <div class="profile-card">
      <img src="${userData.avatar_url}" alt="Avatar de ${name}" class="profile-avatar">
      <div class="profile-info">
        <h2>${name}</h2>
        <p>${bio}</p>
      </div>
    </div>

    <div class="profile-counters">
      <div class="followers">
        <h4>👥 Seguidores</h4>
        <span>${followers}</span>
      </div>
      <div class="following">
        <h4>👥 Seguindo</h4>
        <span>${following}</span>
      </div>
    </div>

    ${reposHTML}
  `;
};

export { inputSearch, btnSearch, profileResults, showLoading, showAlert, renderProfile };