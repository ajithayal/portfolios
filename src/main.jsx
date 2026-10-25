import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/bricolage-grotesque'
import '@fontsource-variable/dm-sans'
import '@fontsource/caveat/500.css'
import '@fontsource/caveat/700.css'
import './styles/global.css'
import App from './App.jsx'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null, info: null }
  }
  static getDerivedStateFromError(error) {
    return { error }
  }
  componentDidCatch(error, info) {
    console.error("CRITICAL ERROR IN COMPONENT:", error, info)
    this.setState({ info })
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: '30px', background: '#fff', color: '#b91c1c', fontFamily: 'monospace', margin: '20px', borderRadius: '12px', border: '2px solid #b91c1c', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '10px' }}>⚠️ React Rendering Error:</h2>
          <p style={{ fontSize: '16px', fontWeight: 'bold' }}>{this.state.error.message || String(this.state.error)}</p>
          <pre style={{ whiteSpace: 'pre-wrap', marginTop: '12px', background: '#fef2f2', padding: '12px', borderRadius: '8px', fontSize: '13px' }}>
            {this.state.error.stack}
          </pre>
        </div>
      )
    }
    return this.props.children
  }
}

const rootEl = document.getElementById('root')
if (rootEl) {
  createRoot(rootEl).render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  )
}
