import React, { useState } from 'react';
import { SidebarProps } from '../types/sidebar.interface';
import '../Dashboard.scss';
import logotype from '../assets/img/logo.svg';
import { ReactComponent as ToggleButton } from '../assets/img/toogle-button.svg';
import { Account } from './Account';

export const Sidebar: React.FC<SidebarProps> = (props) => {
  // Use .sidebar__content for your scrolling content
  // You can use custom components before/in .sidebar__content

  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <aside id="sidebar" className={sidebarOpen ? 'sidebar' : 'sidebar toggled'}>
      <div className="sidebar__header">
        <img
          className={sidebarOpen ? 'logo' : 'logo hidden'}
          src={props.logo || logotype}
          alt="logo"
        />
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          <ToggleButton aria-label="toggle sidebar" />
        </button>
      </div>
      <div className="sidebar__content">
        {props.account && (
          <Account
            name={props.account.name}
            email={props.account.email}
            avatarPath={props.account.avatarPath}
            open={sidebarOpen}
          />
        )}
        {sidebarOpen ? props.children : props.toggledItems}
      </div>
    </aside>
  );
};
