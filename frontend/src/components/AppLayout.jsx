import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

// Layout compartido entre Chat y Reporte
export default function AppLayout({ children, scrollable = false }) {
  const { user, logout } = useAuth();

  return (
    <div className="app-layout">
      <header className="topbar">
        <div className="topbar-left">
          <div className="topbar-brand">
            <span className="logo-text">Clamaco</span>
          </div>
          <nav className="topbar-nav">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`} end>
              Chats IA
            </NavLink>
            <NavLink to="/reporte" className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}>
              Reporte
            </NavLink>
          </nav>
        </div>
        <div className="topbar-user">
          <span className="user-name">{user?.username}</span>
          <button className="btn-logout" onClick={logout}>Cerrar sesión</button>
        </div>
      </header>

      <main className={`main-content${scrollable ? ' main-content--scroll' : ''}`}>
        {children}
      </main>
    </div>
  );
}
