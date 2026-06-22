import React, { useEffect, useState } from 'react';
import { Button, Input, Modal, Toast, Loader } from '../components/ui';
import './styles.css';

export default function App() {
  const [name, setName] = useState('');
  const [task, setTask] = useState('Review wireframes');
  const [error, setError] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 3200);
    return () => clearTimeout(timer);
  }, [toast]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }

    setError('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setToast({ message: `Saved profile for ${name}.`, type: 'success' });
      setIsOpen(true);
    }, 900);
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Week 3 Demo</p>
          <h1>Component Library Showcase</h1>
          <p className="hero-copy">
            A responsive demo page using Button, Input, Modal, Toast and Loader. Dark / light mode support is included.
          </p>
        </div>
        <Button variant="secondary" onClick={() => setIsDark((current) => !current)}>
          {isDark ? 'Switch to Light' : 'Switch to Dark'}
        </Button>
      </header>

      <section className="page-section">
        <div className="section-header">
          <div>
            <h2>Task dashboard</h2>
            <p>Use the form to update your task and trigger the UI components.</p>
          </div>
          <Button onClick={() => setToast({ message: 'Toast notification opened.', type: 'info' })}>
            Show toast
          </Button>
        </div>

        <div className="dashboard-grid">
          <div className="card">
            <h3>Profile form</h3>
            <form onSubmit={handleSubmit} className="form-stack">
              <Input
                label="Name"
                placeholder="Enter your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                error={error}
              />

              <Input
                label="Current task"
                placeholder="Enter a task for today"
                value={task}
                onChange={(event) => setTask(event.target.value)}
              />

              <div className="card-actions">
                <Button type="submit" isLoading={loading}>
                  Save task
                </Button>
                <Button variant="secondary" type="button" onClick={() => setIsOpen(true)}>
                  Open modal
                </Button>
              </div>
            </form>
          </div>

          <div className="card">
            <h3>Live preview</h3>
            <div className="preview-row">
              <div>
                <p className="small-label">Task</p>
                <p>{task}</p>
              </div>
              <div>
                <p className="small-label">Owner</p>
                <p>{name || 'Anonymous'}</p>
              </div>
            </div>
            <div className="preview-banner">
              <Loader size="md" className="preview-loader" />
              <span>Loading the next screen...</span>
            </div>
          </div>

          <div className="card card-summary">
            <h3>Action summary</h3>
            <div className="status-row">
              <div className="status-pill">Tasks complete</div>
              <div className="status-pill">3 items</div>
              <div className="status-pill">Light mode</div>
            </div>
            <div className="mini-list">
              <div className="mini-row">
                <span>Home screen</span>
                <Button size="sm" variant="secondary" onClick={() => setToast({ message: 'Home card clicked', type: 'info' })}>
                  View
                </Button>
              </div>
              <div className="mini-row">
                <span>Detail screen</span>
                <Button size="sm" variant="secondary" onClick={() => setToast({ message: 'Detail screen opened', type: 'info' })}>
                  View
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Demo modal">
        <p>This modal is part of the component library demo. Click close when you are done.</p>
        <div className="card-actions">
          <Button onClick={() => setIsOpen(false)}>Close</Button>
          <Button variant="danger" onClick={() => setToast({ message: 'Modal action confirmed.', type: 'success' })}>
            Confirm
          </Button>
        </div>
      </Modal>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
