import React from 'react';

function Users() {
  const users = [
    {
      username: 'Franklin_Thompson',
      email: 'FranklinWins@gmail.com',
      userId: '1238796470',
      status: 'Active'
    }
  ];

  return (
    <div style={{ marginTop: '2rem' }}>
     <div style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  backgroundColor: '#181818',
  padding: '1rem 2rem',
  borderRadius: '10px',
  color: '#a98fff',
  fontSize: '1.2rem',
  fontWeight: '600',
  margin: '0 auto 2rem auto',
  maxWidth: 'fit-content',
  boxShadow: '0 0 0 1px #333'
}}>
  🔗 Application: 
  <a
    href="https://www.todo.com"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: '#fff',
      textDecoration: 'none',
      fontWeight: 'bold',
      marginLeft: '0.25rem'
    }}
  >
    Sentinel2DCheck
  </a>
</div>



      {/* Grid Table */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        backgroundColor: '#1e1e1e',
        borderRadius: '10px',
        padding: '1rem 0',
        maxWidth: '1000px',
        margin: '0 auto',
        textAlign: 'center',
        fontFamily: 'sans-serif'
      }}>
        {/* Headers */}
        {['Username', 'Email Address', 'User ID', 'Activation Status'].map((header, idx) => (
          <div key={idx} style={{
            fontWeight: 'bold',
            color: '#ccc',
            padding: '1rem 0',
            borderBottom: '1px solid #333'
          }}>
            {header}
          </div>
        ))}

        {/* User Row */}
        {users.map((user, idx) => (
          <React.Fragment key={idx}>
            <div style={{ padding: '1rem', color: '#fff', borderBottom: '1px solid #333' }}>{user.username}</div>
            <div style={{ padding: '1rem', color: '#fff', borderBottom: '1px solid #333' }}>{user.email}</div>
            <div style={{ padding: '1rem', color: '#fff', borderBottom: '1px solid #333' }}>{user.userId}</div>
            <div style={{ padding: '1rem', color: '#4efc58', borderBottom: '1px solid #333' }}>{user.status}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Users;
