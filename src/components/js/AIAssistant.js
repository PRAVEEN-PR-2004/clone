import React, { useState, useRef, useEffect } from 'react';

// Simple floating chat widget that talks to the local Python server
// Env override: set REACT_APP_PYTHON_API to something like https://your-host:5001
const PYTHON_API =  'https://gt-holidays-chatbot.onrender.com';

const AIAssistant = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hi there! How can I help you with your trip?' }
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const endRef = useRef(null);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  useEffect(() => {
    if (endRef.current) endRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const sendMessage = async (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;
    setError('');
    setMessages((m) => [...m, { role: 'user', text }]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch(`${PYTHON_API}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Server error');
      setMessages((m) => [...m, { role: 'assistant', text: data.reply || 'No reply' }]);
    } catch (err) {
      setError(err.message || 'Failed to reach AI server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        aria-label="Open AI Assistant"
        onClick={() => setOpen((v) => !v)}
        className="btn rounded-circle position-fixed bottom-0 start-0 m-3 d-flex align-items-center justify-content-center shadow"
        style={{ width: 56, height: 56, zIndex: 9999, fontSize: 24, fontWeight: 700, color: '#111', backgroundColor: '#ffcc00', borderColor: '#ffcc00' }}
      >
        🤖
      </button>

      {/* Popup card */}
      {open && (
        <div
          className="position-fixed bottom-0 start-0 mb-5 ms-3 shadow"
          style={{ width: 320, maxHeight: 420, zIndex: 9999 }}
        >
          <div className="card" style={{ borderRadius: 12, overflow: 'hidden' }}>
            {/* Header */}
            <div className="card-header d-flex align-items-center justify-content-between" style={{ backgroundColor: '#ffcc00' }}>
              <div className="d-flex align-items-center gap-2">
                <div className="d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: 28, height: 28, background: '#111', color: '#ffcc00', fontWeight: 700 }}>gt</div>
                <div>
                  <div className="fw-bold text-dark">GT Holidays</div>
                  <div className="small text-dark-50" style={{ opacity: .8 }}>AI Assistant</div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="btn btn-sm btn-outline-dark border-0">×</button>
            </div>

            {/* Messages */}
            <div className="card-body p-2" style={{ background: '#fafafa', maxHeight: 300, overflowY: 'auto' }}>
              {messages.map((m, idx) => (
                <div key={idx} className={`d-flex mb-2 ${m.role === 'user' ? 'justify-content-end' : 'justify-content-start'}`}>
                  <div
                    className="p-2 rounded shadow-sm"
                    style={{
                      maxWidth: '80%',
                      color: '#111',
                      background: m.role === 'user' ? '#ffcc00' : '#ffffff'
                    }}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {error && (
                <div className="text-danger small mt-1">{error}</div>
              )}
              <div ref={endRef} />
            </div>

            {/* Composer */}
            <form onSubmit={sendMessage} className="card-footer d-flex gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={loading ? 'Waiting for reply…' : 'Type your message'}
                disabled={loading}
                className="form-control"
              />
              <button type="submit" disabled={loading} className="btn btn-dark">
                {loading ? '…' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
