export default function MessageBubble({ message }) {
  const isUser = message.role === 'user';

  return (
    <div className={`bubble-row ${isUser ? 'bubble-row--user' : 'bubble-row--bot'}`}>
      {!isUser && (
        <div className="avatar avatar--bot" aria-hidden="true">
          IA
        </div>
      )}
      <div className={`bubble ${isUser ? 'bubble--user' : 'bubble--bot'}`}>
        {message.content}
      </div>
      {isUser && (
        <div className="avatar avatar--user" aria-hidden="true">
          Tú
        </div>
      )}
    </div>
  );
}
