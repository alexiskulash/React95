import { useState } from 'react';
import { TaskBar, List } from '@react95/core';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';

import Home from './pages/Home';
import Settings from './pages/Settings';

import './App.css';

function App() {
  const [_, setShowStartMenu] = useState(false);

  return (
    <Router>
      <div className="desktop">
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
        
        <TaskBar
          list={
            <List>
              <Link to="/" onClick={() => setShowStartMenu(false)} style={{ textDecoration: 'none', color: 'inherit' }}>
                <List.Item>
                  <img src="https://win98icons.alexmeub.com/icons/png/computer_explorer-5.png" alt="home" style={{ width: 24, marginRight: 8 }} />
                  Home
                </List.Item>
              </Link>
              <Link to="/settings" onClick={() => setShowStartMenu(false)} style={{ textDecoration: 'none', color: 'inherit' }}>
                <List.Item>
                  <img src="https://win98icons.alexmeub.com/icons/png/settings_gear-0.png" alt="settings" style={{ width: 24, marginRight: 8 }} />
                  Settings
                </List.Item>
              </Link>
              <List.Divider />
              <List.Item onClick={() => setShowStartMenu(false)}>
                <img src="https://win98icons.alexmeub.com/icons/png/shut_down_normal-0.png" alt="shutdown" style={{ width: 24, marginRight: 8 }} />
                Shut Down...
              </List.Item>
            </List>
          }
        />
      </div>
    </Router>
  );
}

export default App;
