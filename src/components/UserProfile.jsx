function UserProfile({ user }) {
  return (
    <div className="profile-card">
      <img src={user.avatar_url} alt="avatar" />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio}</p>
      <p>📍 {user.location || 'N/A'}</p>
      <p>👥 Followers: {user.followers}</p>
      <a href={user.html_url} target="_blank" rel="noreferrer">
        View Profile →
      </a>
    </div>
  );
}

export default UserProfile;
