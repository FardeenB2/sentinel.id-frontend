import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import settingssentlogo from '../assets/sentlogo.png';
import Presets from '../components/presets.jsx';
import Users from '../components/users.jsx';

function Settings() {
  const [activeTab, setActiveTab] = useState('users');

  const tabStyle = (tab) => ({
    padding: '0.7rem 1.5rem',
    marginRight: '1rem',
    borderRadius: '6px',
    backgroundColor: activeTab === tab ? '#e8baff' : '#1f1f1f',
    color: activeTab === tab ? '#121212' : '#ccc',
    border: 'none',
    fontWeight: '600',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    minWidth: '200px',
    textAlign: 'center',
  });

  return (
    <div style={{ 
      padding: '2rem 4rem', 
      fontFamily: 'sans-serif', 
      background: 'linear-gradient(to bottom, #121332, #000)', 
      minHeight: '100vh', 
      color: '#fff' 
    }}>
      
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
        <Link to="/">
          <img 
            src={settingssentlogo} 
            alt="Sentinel logo" 
            style={{ height: '48px', marginRight: '1rem' }} 
          />
        </Link>
        <h1 style={{ fontSize: '2.25rem', fontWeight: '700', margin: 0 }}>
          Settings
        </h1>
      </div>

      {/* Tab Navigation */}
      <div style={{
        display: 'flex',
        justifyContent: 'flex-start',
        gap: '1rem',
        marginBottom: '1.5rem',
        borderBottom: '1px solid #555',
        paddingBottom: '0.75rem',
        flexWrap: 'wrap'
      }}>
        <button style={tabStyle('users')} onClick={() => setActiveTab('users')}>
          Authorized Users
        </button>
        <button style={tabStyle('presets')} onClick={() => setActiveTab('presets')}>
          Authentication Presets
        </button>
      </div>

      {/* Tab Content */}
      <div style={{ marginTop: '1rem' }}>
        {activeTab === 'users' && <Users />}
        {activeTab === 'presets' && <Presets />}
      </div>
    </div>
  );
}

export default Settings;
