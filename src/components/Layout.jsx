import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Layout.css';

const Layout = ({ children }) => {
  const location = useLocation();

  const menuItems = [
    { path: '/production', label: '生产管理' },
    { path: '/batching', label: '配料方案' },
  ];

  return (
    <div className="layout">
      {/* 顶部导航栏 */}
      <header className="header">
        <div className="logo">
          生产管理系统
        </div>
        <div className="user-info">
          <span className="user-name">管理员</span>
          <button className="logout-btn">退出</button>
        </div>
      </header>

      <div className="main-container">
        {/* 左侧导航菜单 */}
        <nav className="sidebar">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 主内容区域 */}
        <main className="content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout; 