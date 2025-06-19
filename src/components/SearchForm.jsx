function SearchForm({ username, setUsername, onSearch }) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          padding: '10px',
          width: '250px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          marginRight: '10px'
        }}
      />
      <button
        onClick={onSearch}
        style={{
          padding: '10px 16px',
          background: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchForm;
