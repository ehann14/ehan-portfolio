"use client";

import { useState, useEffect } from "react";

export default function AdminPage() {
  const [token, setToken] = useState<string | null>(typeof window !== 'undefined' ? localStorage.getItem('admin_token') : null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [visitors, setVisitors] = useState<any[]>([]);
  const [stats, setStats] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (res.ok && data.token) {
      localStorage.setItem('admin_token', data.token);
      setToken(data.token);
    } else {
      alert('Login failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('admin_token');
    setToken(null);
  };

  useEffect(() => {
    if (!token) return;
    (async () => {
      const [v, s, m] = await Promise.all([
        fetch('/api/admin/visitors', { headers: { Authorization: `Bearer ${token}` } }),
        fetch('/api/admin/stats', { headers: { Authorization: `Bearer ${token}` } }),
        fetch('/api/admin/messages', { headers: { Authorization: `Bearer ${token}` } }),
      ]);
      if (v.ok) setVisitors(await v.json().then(r => r.visitors || []));
      if (s.ok) setStats(await s.json());
      if (m.ok) setMessages(await m.json().then(r => r.messages || []));
    })();
  }, [token]);

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <form onSubmit={login} className="p-8 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <h2 className="text-xl font-bold mb-4">Admin Login</h2>
          <input className="block mb-3 w-64 p-2" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input className="block mb-3 w-64 p-2" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <div>
          <button onClick={logout} className="px-3 py-1 border rounded">Logout</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <section className="p-4 rounded" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <h2 className="font-semibold mb-2">Statistics</h2>
            <div className="flex items-center gap-6">
              <div>
                <div className="text-sm text-muted">Total visits</div>
                <div className="text-2xl font-bold">{stats?.totalVisits ?? '—'}</div>
              </div>
              <div>
                <div className="text-sm text-muted">Unique IPs</div>
                <div className="text-2xl font-bold">{stats?.uniqueIPs ?? '—'}</div>
              </div>
              <div>
                <div className="text-sm text-muted">Last 24h</div>
                <div className="text-2xl font-bold">{stats?.last24 ?? '—'}</div>
              </div>
            </div>

            {/* small bar chart */}
            <div className="mt-4">
              {stats?.daily ? (
                <svg viewBox="0 0 700 140" className="w-full h-32">
                  {(() => {
                    const daily = stats.daily || [];
                    const max = Math.max(...daily.map((d: any) => d.count), 1);
                    const w = 600 / daily.length;
                    return daily.map((d: any, i: number) => {
                      const h = (d.count / max) * 80;
                      const x = 50 + i * (w + 6);
                      const y = 100 - h;
                      return (
                        <g key={d.day}>
                          <rect x={x} y={y} width={w} height={h} fill="#3B82F6" rx="4" />
                          <text x={x + w / 2} y={116} fontSize={11} fill="#94a3b8" textAnchor="middle">{d.day.slice(5)}</text>
                        </g>
                      );
                    });
                  })()}
                </svg>
              ) : (
                <div>Loading chart...</div>
              )}
            </div>
          </section>

          <section className="p-4 rounded" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <h2 className="font-semibold mb-3">Messages</h2>
            {messages.length === 0 && <div className="text-sm text-muted">No messages yet.</div>}
            <div className="space-y-3">
              {messages.map((m) => (
                <div key={m.id} className="p-3 rounded" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{m.subject || 'No subject'}</div>
                    <div className="text-xs text-muted">{new Date(m.created_at).toLocaleString()}</div>
                  </div>
                  <div className="text-sm text-muted">From: {m.name} • {m.email}</div>
                  <div className="mt-2">{m.message}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <section className="p-4 rounded" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <h2 className="font-semibold mb-3">Recent Visitors</h2>
            <div className="space-y-2 max-h-[60vh] overflow-auto">
              {visitors.length === 0 && <div className="text-sm text-muted">No visits logged yet.</div>}
              {visitors.map((v) => (
                <div key={v.id} className="p-3 rounded" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <div className="text-xs text-muted">{new Date(v.created_at).toLocaleString()}</div>
                  <div className="font-medium">{v.path}</div>
                  <div className="text-sm text-muted">{v.ip} • {v.user_agent?.slice(0, 80)}{v.user_agent?.length > 80 ? '…' : ''}</div>
                  <div className="text-xs">Referrer: {v.referrer || '-'}</div>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
