import '../styles/Header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h2>Welcome, User</h2>
      </div>
      <div className="header-right">
        <div className="notifications">
          <span className="notification-icon">🔔</span>
          <span className="notification-badge">3</span>
        </div>
        <div className="user-profile">
          <img src="/avatar-placeholder.png" alt="User avatar" className="avatar" />
          <span className="user-name">John Doe</span>
        </div>
      </div>
    </header>
  );
}; 