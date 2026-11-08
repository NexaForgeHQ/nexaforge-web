import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

function App() {
  const [prompt, setPrompt] = useState('')
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Peace be upon you. What would you like to explore today?', meta: 'nexaforge · grounded assistant' },
  ])

  function ask(event) {
    event.preventDefault()
    const clean = prompt.trim()
    if (!clean) return
    setMessages((current) => [
      ...current,
      { role: 'user', text: clean },
      { role: 'assistant', text: 'This preview is ready for your API connection. Add the NexaForge endpoint and API key to enable live answers.', meta: 'preview mode · no request sent' },
    ])
    setPrompt('')
  }

  return <>
    <header className="nav shell">
      <a className="brand" href="#top"><span className="mark">✦</span><span>Nexa<span>Forge</span></span></a>
      <nav><a href="#method">Method</a><a href="#assistant">Assistant</a><a href="#about">About</a></nav>
      <a className="nav-cta" href="#assistant">Open the forge <span>↗</span></a>
    </header>
    <main id="top">
      <section className="hero shell">
        <div className="eyebrow"><i /> Grounded Islamic learning</div>
        <h1>Make room for<br /><em>better questions.</em></h1>
        <p className="lede">NexaForge helps you explore the Qur’an, hadith, and the scholarly tradition with context, citations, and the humility to say when an answer needs a human voice.</p>
        <div className="hero-actions"><a className="button primary" href="#assistant">Ask NexaForge <span>→</span></a><a className="text-link" href="#method">See how it works <span>↓</span></a></div>
        <div className="hero-meta"><span><b>01</b> Source-aware</span><span><b>02</b> Multilingual</span><span><b>03</b> Scholar-minded</span></div>
      </section>
      <section id="method" className="method shell"><div className="section-label">/ The method</div><div className="method-grid"><h2>Curiosity,<br /><span>with guardrails.</span></h2><div className="method-copy"><p>Answers should open a door, not close the conversation. NexaForge brings model intelligence together with retrieval, citations, confidence signals, and a clear handoff when scholarship matters.</p><div className="stats"><div><strong>12+</strong><small>languages</small></div><div><strong>114</strong><small>surahs indexed</small></div><div><strong>0</strong><small>secret keys requested</small></div></div></div></div></section>
      <section id="assistant" className="assistant shell"><div className="section-label">/ Try the assistant</div><div className="chat-card"><div className="chat-head"><div><span className="status" /> NexaForge AI <small>available for reflection</small></div><span className="mono">LIVE / 01</span></div><div className="messages">{messages.map((message, index) => <div className={`message ${message.role}`} key={`${message.text}-${index}`}>{message.text}{message.meta && <small>{message.meta}</small>}</div>)}</div><form className="chat-form" onSubmit={ask}><input value={prompt} onChange={(event) => setPrompt(event.target.value)} placeholder="Ask a question about your learning path…" /><button aria-label="Send">↗</button></form><p className="hint">Demo shell · connect your NexaForge API key to enable live answers.</p></div></section>
    </main>
    <footer id="about" className="footer shell"><div className="brand"><span className="mark">✦</span><span>Nexa<span>Forge</span></span></div><p>Built for thoughtful learning.<br />Designed for the long question.</p><span className="mono">© 2026 / NX-001</span></footer>
  </>
}

createRoot(document.getElementById('root')).render(<App />)
