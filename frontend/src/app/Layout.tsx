import React from 'react';
import { Outlet } from 'react-router';
import HomeIcon from '@mui/icons-material/Home'

function Layout() {
  return (
    <div className="Layout">
      <header className="Layout-header">
        <p>
          Edit <code>src/Layout.tsx</code> and save to reload.
        </p>
        <a
          className="Layout-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <HomeIcon />
        </a>
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;
