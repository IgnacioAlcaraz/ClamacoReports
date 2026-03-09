import { useAuth } from '../context/AuthContext.jsx';
import Chat from '../components/Chat.jsx';

export default function ChatPage() {
  const { user, logout } = useAuth();

  return (
    <div className="app-layout">
      <header className="topbar">
        <div className="topbar-brand">
          <span className="logo-text">Clamaco</span>
          <span className="logo-sub">Chats IA</span>
        </div>
        <div className="topbar-user">
          <span className="user-name">{user?.username}</span>
          <button className="btn-logout" onClick={logout}>
            Cerrar sesión
          </button>
        </div>
      </header>

      <main className="main-content">
        <Chat />
      </main>
    </div>
  );
}
