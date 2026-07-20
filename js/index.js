import { fetchGitHubUser, fetchGitHubUserRepos } from './api.js';
import { inputSearch, btnSearch, profileResults, renderProfile, showLoading, showAlert } from './ui.js';

btnSearch.addEventListener('click', async () => {
  const userName = inputSearch.value.trim();

  if (!userName) {
    showAlert('Por favor, digite um nome de usuário do GitHub.');
    profileResults.innerHTML = '';
    return;
  }

  showLoading();

  try {
    const userData = await fetchGitHubUser(userName);
    const userRepos = await fetchGitHubUserRepos(userName);
    // debug logs to inspect fetched data
    console.log('fetched userData', userData);
    console.log('fetched userRepos', userRepos);

    renderProfile(userData, userRepos, profileResults);
  } catch (error) {
    console.error('Erro ao buscar o perfil do usuário:', error);
    showAlert(error.message || 'Ocorreu um erro ao buscar o perfil do usuário.');
    profileResults.innerHTML = '';
  }
});