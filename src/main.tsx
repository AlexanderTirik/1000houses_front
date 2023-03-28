import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './i18n'
import { Router } from './containers/Router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>
)
