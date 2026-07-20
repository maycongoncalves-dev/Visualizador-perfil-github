const BASE_URL = 'https://api.github.com';

async function fetchGitHubUser(userName) {
  if (!userName) throw new Error('Nome de usuário não informado.');

  const res = await fetch(`${BASE_URL}/users/${encodeURIComponent(userName)}`);
  if (!res.ok) throw new Error(`Erro ${res.status}: ${res.statusText}`);
  return await res.json();
}

async function fetchGitHubUserRepos(userName) {
  if (!userName) throw new Error('Nome de usuário não informado.');

  const res = await fetch(`${BASE_URL}/users/${encodeURIComponent(userName)}/repos?per_page=10&sort=created`);
  if (!res.ok) throw new Error(`Erro ${res.status}: ${res.statusText}`);
  return await res.json();
}

export { fetchGitHubUser, fetchGitHubUserRepos };
