import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchGitHubData = async () => {
    if (!username) {
      setError('Please enter a GitHub username.');
      return;
    }

    setLoading(true);
    setError('');
    setUserData(null);
    setRepos([]);

    try {
      const userRes = await fetch(`https://api.github.com/users/${username}`);
      if (!userRes.ok) throw new Error('User not found');
      const user = await userRes.json();

      const repoRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
      const allRepos = await repoRes.json();

      const topRepos = allRepos
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 5);

      setUserData(user);
      setRepos(topRepos);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="app">
      <h1>GitHub User Search</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={fetchGitHubData}>Search</button>
      </div>

      {loading && <p className="status loading">Loading...</p>}
      {error && <p className="status error">{error}</p>}

      {userData && (
        <div className="profile-section">
          <div className="profile-card">
            <img src={userData.avatar_url} alt="avatar" />
            <h2>{userData.name || userData.login}</h2>
            <p>{userData.bio}</p>
            <p>📍 {userData.location || 'N/A'}</p>
            <p>👥 Followers: {userData.followers}</p>
            <a href={userData.html_url} target="_blank" rel="noreferrer">
              View GitHub Profile →
            </a>
          </div>
        </div>
      )}

      {repos.length > 0 && (
        <div className="repos-section">
          <h3>⭐ Top 5 Repositories</h3>
          <div className="repos-grid">
            {repos.map((repo) => (
              <div key={repo.id} className="repo-card">
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  <strong>{repo.name}</strong>
                </a>
                <p>{repo.description || 'No description.'}</p>
                <small>⭐ {repo.stargazers_count}</small>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
