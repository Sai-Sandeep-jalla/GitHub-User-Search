function RepoCard({ repo }) {
  return (
    <div style={{
      background: '#fff',
      padding: '1rem',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        <strong>{repo.name}</strong>
      </a>
      <p>{repo.description || 'No description.'}</p>
      <small>⭐ {repo.stargazers_count}</small>
    </div>
  );
}

export default RepoCard;
